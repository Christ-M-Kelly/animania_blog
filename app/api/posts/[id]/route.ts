import { prisma } from "../../../db/prisma";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, context: Context) {
  const { id } = await context.params;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: { name: true },
        },
        comments: {
          include: {
            author: {
              select: { name: true },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!post) {
      return new Response(null, { status: 404 });
    }

    return Response.json(post);
  } catch (error) {
    console.error("Erreur récupération post:", error);
    return new Response(null, { status: 500 });
  }
}
