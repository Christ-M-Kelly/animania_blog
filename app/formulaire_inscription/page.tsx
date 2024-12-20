"use client";

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Formulaire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.text();
      console.log("Statut de la réponse:", response.status);
      console.log("Réponse du serveur:", responseData);

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status} ${responseData}`);
      }

      const result = JSON.parse(responseData);

      console.log("Utilisateur créé:", result.user);

      toast.success("Utilisateur créé avec succès !");
      setTimeout(() => {
        window.location.href = "http://localhost:3000"; // Redirection
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      toast.error("Erreur lors de l'envoi des données.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <ToastContainer />
      <main className="relative min-h-screen flex flex-col items-center justify-center py-12">
        <video
          src="https://videos.pexels.com/video-files/856354/856354-hd_1920_1080_25fps.mp4"
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-amber-900/40 z-[-1]" />

        <div className="relative bg-white/10 p-6 md:p-10 rounded-3xl shadow-2xl w-[90%] max-w-md backdrop-blur-md border border-amber-200/20 z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-amber-100">
            Créer un compte
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-amber-200 mb-1.5"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="mt-1 block w-full px-3 py-2.5 rounded-xl bg-white/10 border border-amber-200/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 transition-all duration-200 text-amber-100 placeholder-amber-300/50 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-amber-200 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
                className="mt-1 block w-full px-3 py-2.5 rounded-xl bg-white/10 border border-amber-200/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 transition-all duration-200 text-amber-100 placeholder-amber-300/50 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-amber-200 mb-1.5"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="mt-1 block w-full px-3 py-2.5 rounded-xl bg-white/10 border border-amber-200/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 transition-all duration-200 text-amber-100 placeholder-amber-300/50 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-amber-200 mb-1.5"
              >
                Rôle
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2.5 rounded-xl bg-white/10 border border-amber-200/20 focus:border-amber-400 focus:ring-2 focus:ring-amber-300/40 transition-all duration-200 text-amber-100 text-sm"
              >
                <option value="USER" className="bg-amber-900 text-amber-100">
                  Utilisateur
                </option>
                <option value="ADMIN" className="bg-amber-900 text-amber-100">
                  Administrateur
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white py-2.5 rounded-xl hover:from-amber-600 hover:to-amber-800 transform hover:scale-[1.02] transition-all duration-200 font-medium text-sm mt-6"
            >
              S'inscrire
            </button>
          </form>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 via-amber-950/40 to-transparent backdrop-blur-sm">
          <div className="container mx-auto px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t border-amber-100/10 pt-6">
              <div className="flex items-center space-x-6 md:pl-4">
                <Link
                  href="/"
                  className="text-amber-100 hover:text-white transition-colors duration-200 text-sm hover:scale-105 transform"
                >
                  Accueil
                </Link>
                <span className="text-amber-100/30">•</span>
                <Link
                  href="/connexion"
                  className="text-amber-100 hover:text-white transition-colors duration-200 text-sm hover:scale-105 transform"
                >
                  Connexion
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center space-x-10">
                  <a
                    href="#"
                    className="text-amber-100 hover:text-white transition-all duration-200 transform hover:scale-110 hover:rotate-6"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-amber-100 hover:text-white transition-all duration-200 transform hover:scale-110 hover:-rotate-6"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-amber-100 hover:text-white transition-all duration-200 transform hover:scale-110 hover:rotate-6"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
              <div className="text-amber-100/80 text-sm font-light tracking-wider md:pr-4">
                © 2024 Animania. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
