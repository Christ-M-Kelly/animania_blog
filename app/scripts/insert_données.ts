import { prisma } from "@/app/db/prisma";

async function main() {
  // Insérer un utilisateur avec un post et un commentaire
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      password: "securepassword",
      role: "USER",
      posts: {
        create: [
          {
            title: "Post de bienvenue",
            content: "Ceci est le premier article.",
            slug: "post-de-bienvenue",
            comments: {
              create: [
                {
                  content: "Félicitations pour votre premier article !",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Utilisateur créé :", user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
