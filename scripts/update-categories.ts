import { PrismaClient, AnimalCategory } from "@prisma/client";

const prisma = new PrismaClient();

async function updateCategories() {
  try {
    // Afficher toutes les catégories disponibles
    console.log("Catégories disponibles:", Object.values(AnimalCategory));

    // Mettre à jour les articles sans catégorie
    const result = await prisma.post.updateMany({
      where: {
        OR: [
          { category: { equals: undefined } },
          { category: { notIn: Object.values(AnimalCategory) } },
        ],
      },
      data: {
        category: AnimalCategory.TERRESTRES,
      },
    });

    console.log(`Mise à jour effectuée : ${result.count} articles modifiés`);

    // Vérifier tous les articles
    const allPosts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        category: true,
      },
    });

    console.log("\nListe de tous les articles :");
    allPosts.forEach((post) => {
      console.log(`- ${post.title}: ${post.category}`);
    });

    // Afficher la distribution
    const distribution = await prisma.post.groupBy({
      by: ["category"],
      _count: true,
    });

    console.log("\nRépartition des catégories :");
    distribution.forEach((item) => {
      console.log(`${item.category}: ${item._count} articles`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur détaillée :", {
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Erreur inconnue :", error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

updateCategories().catch((error) => {
  console.error("Erreur non gérée :", error);
  process.exit(1);
});
