"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

import C_Footer from "./C_Footer";

export default function Connexion() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center pt-32 pb-32 bg-gradient-to-b from-green-100 to-green-300 relative">
        <div className="bg-white p-6 sm:p-8 md:p-20 rounded-xl shadow-2xl w-[90%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] backdrop-blur-sm bg-opacity-90 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800">
            Connexion
          </h2>
          <form className="space-y-5 sm:space-y-6">
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
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-sm sm:text-base"
                required
                placeholder="••••••••"
              />
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
