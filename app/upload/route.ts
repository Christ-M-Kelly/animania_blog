import { createReadStream } from "fs";
import { NextResponse } from "next/server";
import { blob } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    // Récupère les données du formulaire
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "Aucun fichier envoyé." },
        { status: 400 }
      );
    }

    // Charge le fichier vers Vercel Blob
    const { url } = await blob.upload(file.name, file.stream(), {
      contentType: file.type,
      access: "public", // Rend l'image publique
    });

    console.log("Image uploadée :", url);

    // Retourne l'URL de l'image
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Erreur lors de l'upload :", error);
    return NextResponse.json(
      { error: "Erreur lors de l'upload de l'image." },
      { status: 500 }
    );
  }
}
