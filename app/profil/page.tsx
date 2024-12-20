"use client";

import { useEffect, useState } from 'react';
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function ProfilePage() {
  const user = {
    _id: '67489e12f4cff587c4eae238',
    createdAt: '2024-11-28T16:45:06.790+00:00',
    email: 'gege@gmail.com',
    name: 'Mehdi',
  };

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsResponse = await fetch(`/api/posts?authorId=${user._id}`);
        const commentsResponse = await fetch(`/api/comments?author_id=${user._id}`);
        const postsData = await postsResponse.json();
        const commentsData = await commentsResponse.json();
        setPosts(postsData);
        setComments(commentsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    fetchData();
  }, [user._id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg w-full p-6 bg-white rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Profil de {user.name}</h1>
          <div className="space-y-4">
            <div>
              <span className="font-medium text-gray-700">Date de création :</span>{' '}
              {new Date(user.createdAt).toLocaleDateString('fr-FR')}
            </div>
            <div>
              <span className="font-medium text-gray-700">Email :</span> {user.email}
            </div>
            <div>
              <h2 className="text-xl font-semibold mt-6 mb-4">Mes Posts</h2>
              {posts.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {posts.map((post) => (
                    <li key={post._id}>
                      <span className="font-medium text-blue-600">{post.title}</span> -{' '}
                      {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Aucun post trouvé.</p>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold mt-6 mb-4">Mes Commentaires</h2>
              {comments.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {comments.map((comment) => (
                    <li key={comment._id}>
                      <span className="text-gray-700">{comment.content}</span> -{' '}
                      {new Date(comment.createdAt).toLocaleDateString('fr-FR')}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Aucun commentaire trouvé.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
