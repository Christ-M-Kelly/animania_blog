import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { prisma } from "./db/prisma";

export default async function Home() {
  // Récupérer les données de la base de données
  const data = await prisma.user.findMany();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <h1>Bienvenue sur la page d'accueil</h1>
        <p>Voici le contenu de votre application.</p>
        {/* Afficher les données récupérées */}
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
