import { NextResponse } from "next/server";
import { prisma } from "@/app/db/prisma";
import { handleUpload } from "@/app/upload/uploadActions";

export async function POST(request: Request) {
  try {
<<<<<<< HEAD
    const contentType = request.headers.get("Content-Type");

    // Vérification que le content type est bien "multipart/form-data"
    if (!contentType?.includes("multipart/form-data")) {
      return NextResponse.json({ error: "Content-Type non supporté" }, { status: 400 });
    }

    const formData = await request.formData();

    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const published = formData.get("published") === "true";
    const imageFile = formData.get("image") as Blob | null;

    if (!title || !content) {
      return NextResponse.json({ error: "Titre et contenu sont requis." }, { status: 400 });
    }

    // Upload de l'image si elle est présente
    let imageUrl: string | null = null;
    if (imageFile) {
=======
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Le titre et le contenu sont requis" },
        { status: 400 }
      );
    }

    const published = formData.get("published") === "true";
    const image = formData.get("image") as File;

    let imagePath = null;
    if (image) {
>>>>>>> origin/main
      try {
        const { url } = await handleUpload({
          file: image,
          input: { type: "post" },
        });

        imagePath = url;
      } catch (uploadError) {
        console.error("Erreur upload:", uploadError);
        return NextResponse.json(
          {
            error: "Erreur lors de l'upload de l'image",
            details: String(uploadError),
          },
          { status: 500 }
        );
      }
    }

<<<<<<< HEAD
    // Création d'un slug unique basé sur le titre
    let slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    const existingPost = await prisma.post.findUnique({ where: { slug } });
    if (existingPost) {
      slug += `-${Date.now()}`;
=======
    const user = await prisma.user.findFirst();
    if (!user) {
      return NextResponse.json(
        { error: "Aucun utilisateur trouvé" },
        { status: 400 }
      );
>>>>>>> origin/main
    }

    // Création du post dans la base de données
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
<<<<<<< HEAD
        slug,
        views: 0, // Vous pouvez ajuster selon vos besoins
        ...(imageUrl && { imageUrl }),
=======
        imageUrl: imagePath,
        slug: title.toLowerCase().replace(/ /g, "-") + "-" + Date.now(),
        author: {
          connect: { id: user.id },
        },
        views: 0,
>>>>>>> origin/main
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Erreur serveur détaillée:", error);
    return NextResponse.json(
      {
        error: "Erreur lors de la création du post",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
