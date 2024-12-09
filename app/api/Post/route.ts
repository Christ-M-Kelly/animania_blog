import { NextResponse } from "next/server";
import { prisma } from "@/app/db/prisma";
import { uploadImage } from "@/app/api/utils/blob";

export async function POST(request: Request) {
  try {
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
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (err) {
        console.error("Erreur lors de l'upload de l'image :", err);
        return NextResponse.json({ error: "Erreur lors de l'upload de l'image" }, { status: 500 });
      }
    }

    // Création d'un slug unique basé sur le titre
    let slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    const existingPost = await prisma.post.findUnique({ where: { slug } });
    if (existingPost) {
      slug += `-${Date.now()}`;
    }

    // Création du post dans la base de données
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        slug,
        views: 0, // Vous pouvez ajuster selon vos besoins
        ...(imageUrl && { imageUrl }),
      },
    });

    return NextResponse.json({ message: "Post créé avec succès", post });
  } catch (error) {
    console.error("Erreur lors de la création du post :", error);
    return NextResponse.json({ error: "Erreur lors de la création du post" }, { status: 500 });
  }
}
