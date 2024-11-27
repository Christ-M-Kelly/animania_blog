"use client"; // Ajout de cette ligne en haut du fichier

import { useState } from "react";

export default function Home() {
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
        setMessage("Données insérées avec succès !");
      } else {
        setMessage(result.error || "Une erreur est survenue.");
      }
    } catch (error) {
      setMessage("Erreur lors de l'envoi des données.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Ajouter des données</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="USER">Utilisateur</option>
          <option value="ADMIN">Administrateur</option>
        </select>
        <input type="text" name="postTitle" placeholder="Titre du post" value={formData.postTitle} onChange={handleChange} />
        <textarea name="postContent" placeholder="Contenu du post" value={formData.postContent} onChange={handleChange} />
        <input type="text" name="postSlug" placeholder="Slug du post" value={formData.postSlug} onChange={handleChange} />
        <textarea name="commentContent" placeholder="Commentaire" value={formData.commentContent} onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
