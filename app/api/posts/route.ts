import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
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

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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

    const { title, content, category, imageUrl } = await request.json();
    const slug = generateSlug(title);

    const post = await prisma.post.create({
      data: {
        title,
        content,
        category,
        imageUrl,
        slug,
        author: {
          connect: { id: user.id },
        },
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création du post:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du post" },
      { status: 500 }
    );
  }
}
