import { NextResponse } from "next/server";
import { prisma } from "@/app/db/prisma";
import { handleUpload } from "@/app/upload/uploadActions";

export async function POST(request: Request) {
  try {
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

    const user = await prisma.user.findFirst();
    if (!user) {
      return NextResponse.json(
        { error: "Aucun utilisateur trouvé" },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        imageUrl: imagePath,
        slug: title.toLowerCase().replace(/ /g, "-") + "-" + Date.now(),
        author: {
          connect: { id: user.id },
        },
        views: 0,
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
