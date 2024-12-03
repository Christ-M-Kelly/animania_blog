import { prisma } from "@/app/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: {
          include: {
            comments: true,
          },
        },
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json(
      {
        error: "Erreur lors de la récupération des données",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
