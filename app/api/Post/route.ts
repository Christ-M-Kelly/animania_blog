import { NextResponse } from "next/server";
import { prisma } from "@/app/db/prisma";
import { uploadImage } from "@/app/api/utils/blob";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const published = formData.get("published") === "true";
    const imageFile = formData.get("image") as Blob | null;

    if (!title || !content) {
      return NextResponse.json({ error: "Titre et contenu requis." }, { status: 400 });
    }

    let imageUrl = null;
    if (imageFile) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (err) {
        console.error("Erreur lors de l'upload de l'image :", err);
        return NextResponse.json({ error: "Erreur lors de l'upload de l'image" }, { status: 500 });
      }
    }

    let slug = title.toLowerCase().replace(/ /g, "-");
    if (await prisma.post.findUnique({ where: { slug } })) {
      slug += `-${Date.now()}`;
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        slug,
        views: 0,
        authorId: "author-id-placeholder", // Ajustez selon votre logique
        ...(imageUrl && { imageUrl }),
      },
    });

    return NextResponse.json({ message: "Post créé avec succès", post });
  } catch (error) {
    console.error("Erreur lors de la création du post :", error);
    return NextResponse.json({ error: "Erreur lors de la création du post" }, { status: 500 });
  }
}
