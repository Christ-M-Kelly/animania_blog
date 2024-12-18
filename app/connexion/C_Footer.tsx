import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

export default function C_Footer() {
  const navLinks: NavLink[] = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    // Gérer le clic sur les liens si nécessaire
  };

  return (
    <footer className="bg-green-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo_rbg.png"
                alt="Logo Animania"
                fill
                sizes="40px"
                className="rounded-full bg-white p-1 shadow-md hover:scale-105 transition-transform duration-300 object-cover"
              />
            </div>
            <span className="text-lg font-bold text-white">Animania</span>
          </Link>
          <nav>
            <ul className="flex flex-row space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-white hover:text-green-200 text-sm font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
