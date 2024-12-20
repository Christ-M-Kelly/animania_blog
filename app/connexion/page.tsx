"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import { useAuth } from "@/src/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import C_Footer from "./C_Footer";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
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
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <main className="min-h-screen flex flex-col items-center pt-32 pb-32 bg-gradient-to-b from-green-50 to-green-100 relative">
        <div className="bg-white p-6 sm:p-8 md:p-20 rounded-xl shadow-2xl w-[90%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] backdrop-blur-sm bg-opacity-90 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800">
            Connexion
          </h2>
          {error && (
            <div className="text-red-600 text-sm text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
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
                className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-sm sm:text-base"
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
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 font-semibold text-base sm:text-lg shadow-md"
            >
              Se connecter
            </button>
          </form>
        </div>
      </main>
      <C_Footer />
    </div>
  );
}
