import { prisma } from "@/app/db/prisma";
import { NextResponse } from "next/server";

// methode post et get 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role, postTitle, postContent, postSlug, commentContent } = body;

    // Créer un utilisateur avec un post
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
        posts: {
          create: {
            title: postTitle,
            content: postContent,
            slug: postSlug,
          },
        },
      },
      include: { posts: true }, // Inclure les posts créés dans la réponse
    });

    if (!user.posts.length) {
      throw new Error("Erreur lors de la création du post.");
    }

    // Récupérer l'ID du Post
    const postId = user.posts[0].id;

    // Créer un commentaire lié au Post
    const comment = await prisma.comment.create({
      data: {
        content: commentContent,
        authorId: user.id,
        postId: postId,
      },
    });

    return NextResponse.json({ message: "Données insérées avec succès", user, comment });
  } catch (error: any) {
    console.error("Erreur Prisma :", error.message);
    return NextResponse.json(
      { error: "Erreur lors de l'insertion des données", details: error.message },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    // Récupérer tous les utilisateurs avec leurs relations (posts et commentaires)
    const users = await prisma.user.findMany({
      include: {
        posts: {
          include: {
            comments: true, // Inclure les commentaires des posts
          },
        },
        comments: true, // Inclure les commentaires écrits par l'utilisateur
      },
    });

    // Structurer les données si nécessaire
    const structuredData = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      posts: user.posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        slug: post.slug,
        comments: post.comments.map((comment) => ({
          id: comment.id,
          content: comment.content,
        })),
      })),
      comments: user.comments.map((comment) => ({
        id: comment.id,
        content: comment.content,
        postId: comment.postId,
      })),
    }));

    return NextResponse.json({ users: structuredData });
  } catch (error: any) {
    console.error("Erreur lors de la récupération des données :", error.message);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des données", details: error.message },
      { status: 500 }
    );
  }
}
