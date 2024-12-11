import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { prisma } from "./db/prisma";

export default async function Home() {
  // Récupérer les données de la base de données depuis le modèle Post
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      createdAt: true,
      title: true,
      content: true,
      imageUrl: true,
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
            Bienvenue sur la page d'accueil
          </h1>
          <p className="text-center text-gray-700 mb-8">
            Découvrez nos derniers articles et contenus.
          </p>

          {/* Grille des blocs d'articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Conteneur de l'image */}
                <div className="w-full h-64 relative">
                  <img
                    src={post.imageUrl || "https://via.placeholder.com/300x180"}
                    alt={post.title}
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                </div>

                {/* Contenu de l'article */}
                <div className="p-4">
                  <div className="text-green-600 font-semibold text-sm uppercase mb-2">
                    {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 hover:text-green-700 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {post.content.substring(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
