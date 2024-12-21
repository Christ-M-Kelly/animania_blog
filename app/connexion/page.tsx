"use client";

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
<<<<<<< HEAD
=======
import React, { useState } from "react";
import { useAuth } from "@/src/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Connexion() {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";
  const { login } = useAuth();
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.token) {
        console.log("Connexion réussie");
        console.log("Données utilisateur reçues:", result.user);

        // Stockage des informations utilisateur dans le localStorage
        localStorage.setItem("user", JSON.stringify(result.user));
        console.log("Données utilisateur stockées dans localStorage");

        // Forcer la mise à jour du header
        window.dispatchEvent(new Event("storage"));
        window.dispatchEvent(new Event("userLogin"));
        console.log("Événements de mise à jour déclenchés");

        // Afficher le toast et rediriger immédiatement
        toast.success("Connexion réussie", {
          onClose: () => {
            window.location.href = "/";
          },
          autoClose: 1000,
        });
      } else {
<<<<<<< HEAD
        toast.error(result.error || "Email ou mot de passe incorrect");
=======
        if (!data.user?.name || !data.token) {
          throw new Error("Données de connexion invalides");
        }

        const userData = {
          name: data.user.name,
          email: data.user.email,
        };

        login(userData, data.token);
        toast.success(`Bonjour, ${userData.name} !`);
        router.push(decodeURIComponent(returnUrl));
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      toast.error("Erreur lors de la connexion. Veuillez réessayer.");
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
<<<<<<< HEAD
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
=======
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-sm sm:text-base"
                  required
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600"
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
>>>>>>> 108f84205b2fb17193a7c96d7ac6c52f3878318b
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
