"use client";

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Connexion() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Connexion réussie !");
        setTimeout(() => {
          window.location.href = "http://localhost:3000"; // Redirection
        }, 2000);
      } else {
        toast.error(result.error || "Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      toast.error("Erreur lors de la connexion.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <ToastContainer />
      <main className="relative min-h-screen flex flex-col items-center justify-center py-12">
        <video
          src="/videos/2_chiots.webm"
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-emerald-800/30 z-[-1]" />

        <div className="relative bg-white/15 p-6 md:p-10 rounded-3xl shadow-2xl w-[90%] max-w-md backdrop-blur-md border border-emerald-100/30 z-10 hover:bg-white/20 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-emerald-50">
            Connexion
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-emerald-100 mb-1.5"
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
                className="mt-1 block w-full px-3 py-2.5 rounded-xl bg-white/15 border border-emerald-100/30 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200/50 transition-all duration-200 text-emerald-50 placeholder-emerald-200/50 text-sm hover:bg-white/20"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-emerald-100 mb-1.5"
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
                className="mt-1 block w-full px-3 py-2.5 rounded-xl bg-white/15 border border-emerald-100/30 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200/50 transition-all duration-200 text-emerald-50 placeholder-emerald-200/50 text-sm hover:bg-white/20"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-white py-2.5 rounded-xl hover:from-emerald-500 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 font-medium text-sm mt-6 shadow-lg shadow-emerald-900/20"
            >
              Se connecter
            </button>
          </form>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 via-emerald-950/40 to-transparent backdrop-blur-sm">
          <div className="container mx-auto px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t border-emerald-100/10 pt-6">
              <div className="flex items-center space-x-6 md:pl-4">
                <Link
                  href="/"
                  className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm hover:scale-105 transform"
                >
                  Accueil
                </Link>
                <span className="text-emerald-100/30">•</span>
                <Link
                  href="/formulaire_inscription"
                  className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm hover:scale-105 transform"
                >
                  S'inscrire
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center space-x-10">
                  <a
                    href="#"
                    className="text-emerald-100 hover:text-white transition-all duration-200 transform hover:scale-110 hover:rotate-6"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-emerald-100 hover:text-white transition-all duration-200 transform hover:scale-110 hover:-rotate-6"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-emerald-100 hover:text-white transition-all duration-200 transform hover:scale-110 hover:rotate-6"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
              <div className="text-emerald-100/80 text-sm font-light tracking-wider md:pr-4">
                © 2024 Animania. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
