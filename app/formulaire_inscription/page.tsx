"use client"; // Marque ce fichier comme un Client Component

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify"; // Notifications Toast
import "react-toastify/dist/ReactToastify.css";

export default function Formulaire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
    postTitle: "",
    postContent: "",
    postSlug: "",
    commentContent: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Données insérées avec succès !");
        // Rediriger vers localhost après succès
        setTimeout(() => {
          window.location.href = "http://localhost:3000"; // Redirection
        }, 2000);
      } else {
        toast.error(result.error || "Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      toast.error("Erreur lors de l'envoi des données.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Notifications */}
      <ToastContainer />
      <main className="relative min-h-screen flex flex-col items-center pt-32 pb-32">
        {/* Vidéo en arrière-plan */}
        <video
          src="https://videos.pexels.com/video-files/856354/856354-hd_1920_1080_25fps.mp4"
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        />

        {/* Superposition sombre */}
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]" />

        {/* Formulaire et contenu */}
        <div className="relative bg-white p-6 sm:p-8 md:p-20 rounded-xl shadow-2xl w-[90%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] backdrop-blur-sm bg-opacity-90 z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-blue-800">
            Ajouter des données
          </h2>
          {message && (
            <div className="text-green-600 text-sm text-center mb-4">
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Nom */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
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
                className="mt-1 block w-full px-3 py-2 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
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
                className="mt-1 block w-full px-3 py-2 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
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
                className="mt-1 block w-full px-3 py-2 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Rôle */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
              >
                Rôle
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
              >
                <option value="USER">Utilisateur</option>
                <option value="ADMIN">Administrateur</option>
              </select>
            </div>

            {/* Titre du post */}
            <div>
              <label
                htmlFor="postTitle"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
              >
                Titre du Post
              </label>
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={formData.postTitle}
                onChange={handleChange}
                placeholder="Titre du post"
                className="mt-1 block w-full px-3 py-2 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Contenu du post */}
            <div>
              <label
                htmlFor="postContent"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
              >
                Contenu du Post
              </label>
              <textarea
                id="postContent"
                name="postContent"
                value={formData.postContent}
                onChange={handleChange}
                placeholder="Contenu du post..."
                className="mt-1 block w-full px-3 py-2 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
              />
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 font-semibold text-base sm:text-lg shadow-md"
            >
              Envoyer
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
