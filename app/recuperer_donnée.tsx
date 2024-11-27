import { prisma } from "@/app/db/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany({
        include: {
          posts: {
            include: { comments: true },
          },
          comments: true,
        },
      });

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération des données", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
