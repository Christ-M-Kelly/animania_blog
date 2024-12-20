import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();

interface DecodedToken extends JwtPayload {
  email: string;
  id: string;
}

async function verifyToken(token: string): Promise<DecodedToken | null> {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as DecodedToken;
    return decoded;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const decoded = await verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ error: "Token invalide" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });

    if (!user) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { content, postId } = await request.json();

    const comment = await prisma.comment.create({
      data: {
        content: content.trim(),
        post: {
          connect: { id: postId },
        },
        author: {
          connect: { id: user.id },
        },
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur création commentaire:", error.message);
    }
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
