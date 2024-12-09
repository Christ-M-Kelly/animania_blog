"use client";

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormulairePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    published: false,
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Construction du FormData
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("published", String(formData.published));
    if (image) {
      formDataToSend.append("image", image);
    }

    try {
      const response = await fetch("/api/Post", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Post créé avec succès !");
        setTimeout(() => {
          window.location.href = "http://localhost:3000"; // Redirection (modifiable)
        }, 2000);
        // Réinitialisation des données
        setFormData({ title: "", content: "", published: false });
        setImage(null);
        setPreview(null);
      } else {
        toast.error(result.error || "Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      toast.error("Erreur lors de l'envoi des données.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <ToastContainer />
      <main className="relative min-h-screen flex flex-col items-center pt-32 pb-32">
        <video
          src="https://videos.pexels.com/video-files/856354/856354-hd_1920_1080_25fps.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]" />
        <div className="relative bg-white p-6 sm:p-8 md:p-20 rounded-xl shadow-2xl w-[90%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] backdrop-blur-sm bg-opacity-90 z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-blue-800">
            Créer un Post
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
              >
                Titre
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Titre du post"
                required
                className="mt-1 block w-full px-3 py-2 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
              >
                Contenu
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Contenu du post"
                required
                className="mt-1 block w-full px-3 py-2 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-sm sm:text-base h-28"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm sm:text-base font-semibold text-blue-700 mb-2"
              >
                Ajouter une image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm sm:text-base"
              />
              {preview && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Aperçu de l'image :</p>
                  <img
                    src={preview}
                    alt="Prévisualisation"
                    className="w-full h-40 object-cover rounded-md shadow-md"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="published" className="text-sm sm:text-base font-semibold text-blue-700">
                Publier immédiatement
              </label>
            </div>
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
