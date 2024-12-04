"use client";

import Link from "next/link";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

interface HeaderProps {
  className?: string;
}

// Ajouter cette interface
interface DecodedToken {
  exp: number;
}

export default function Header({ className }: HeaderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fonction pour vérifier si le token est valide
  const isTokenValid = () => {
    if (!isClient) return false;
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: DecodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return decodedToken.exp > currentTime;
      } catch {
        return false;
      }
    }
    return false;
  };

  const userName = isClient ? localStorage.getItem("userName") : null;

  // Vérification de l'état de l'authentification
  const isAuthenticated = isTokenValid();

  const menu_navigation = [
    {
      name: "Accueil",
      href: "/",
    },
    {
      name: "A propos",
      href: "/a-propos",
    },
    {
      name: "Posts",
      href: "",
    },
    {
      name: "Contact",
      href: "",
    },
  ];

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    window.location.reload(); // Recharger la page pour mettre à jour l'interface
  };

  return (
    <header
      className={`bg-gradient-to-b from-green-500 to-green-400 ${className}`}
    >
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Section gauche avec logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo_rbg.png"
            width={100}
            height={100}
            alt="logo = image d'un chien et d'un chat"
          />
          <nav>
            <ul className="flex flex-row space-x-12">
              {menu_navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Barre de recherche et bouton se connecter */}
        <div className="relative flex items-center space-x-4">
          {/* Si l'utilisateur est connecté, afficher son nom ou un bouton de déconnexion */}
          {isAuthenticated ? (
            <>
              <div className="font-semibold text-white">{`Bonjour, ${userName}`}</div>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-indigo-600/90 px-4 py-2 text-white transition-all duration-300 hover:bg-indigo-800"
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <Link
              href="/connexion"
              className="ml-[-500px] rounded-lg bg-green-600 px-4 py-2 text-white transition-all duration-300 hover:bg-green-700"
            >
              Se connecter
            </Link>
          )}

          {/* Barre de recherche */}
          <input
            type="text"
            placeholder="Rechercher..."
            className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </header>
  );
}
