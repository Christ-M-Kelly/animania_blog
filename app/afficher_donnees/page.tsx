"use client";

import { useEffect, useState } from "react";

export default function AfficherDonnees() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/users");
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          setError(result.error || "Une erreur est survenue.");
        }
      } catch (err) {
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Liste des données</h1>
      {data &&
        data.users.map((user: any) => (
          <div key={user.id}>
            <h2>{user.name} ({user.email})</h2>
            <p>Rôle : {user.role}</p>
            {user.posts.map((post: any) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                {post.comments.map((comment: any) => (
                  <p key={comment.id}>Commentaire : {comment.content}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
