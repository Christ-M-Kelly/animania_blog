import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { prisma } from "./db/prisma";

export default async function Home() {
  return (
    <main>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Voici le contenu de votre application.</p>
    </main>
  );
}
