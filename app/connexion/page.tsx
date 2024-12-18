"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import C_Footer from "./C_Footer";
import Link from "next/link";
import { setAuthToken } from "@/app/api/utils/auth";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setAuthToken(data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/");
      } else {
        setError(data.message || "Une erreur est survenue");
      }
    } catch (err) {
      console.error("Erreur de connexion:", err);
      setError("Une erreur est survenue lors de la connexion");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-16 bg-gradient-to-b from-green-50 to-green-100">
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-[90%] max-w-[500px] backdrop-blur-sm bg-opacity-90">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800">
            Connexion
          </h2>
          {error && (
            <div className="text-red-600 text-sm text-center mb-6">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-semibold text-green-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                required
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-semibold text-green-700 mb-2"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                  required
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700"
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transform hover:scale-[1.02] transition-all duration-200 font-semibold text-lg shadow-md"
            >
              Se connecter
            </button>

            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Pas encore de compte ?
                </span>
              </div>
            </div>

            <Link
              href="/formulaire_inscription"
              className="block w-full text-center py-3 px-6 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-[1.02] transition-all duration-200 font-semibold text-lg"
            >
              S'inscrire
            </Link>
          </form>
        </div>
      </main>
      <C_Footer />
    </div>
  );
}
