// app/api/insertion/route.ts
import { prisma } from "@/app/db/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role, postTitle, postContent, postSlug, commentContent } = body;

    // Créer un utilisateur avec un rôle et un post associé
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
    });

    // Ajouter un commentaire associé au post et à l'utilisateur
    const postId = user.posts[0].id;
    const comment = await prisma.comment.create({
      data: {
        content: commentContent,
        authorId: user.id,
        postId: postId,
      },
    });

    return NextResponse.json({ message: "Données insérées avec succès", user, comment });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'insertion des données", details: error.message },
      { status: 500 }
    );
  }
}
