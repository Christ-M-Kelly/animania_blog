"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/src/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "@/src/components/FormattedDate";
import { useErrorHandler } from "@/src/hooks/useErrorHandler";

function CommentFormComponent({
  onSubmit,
  isSubmitting,
  newComment,
  setNewComment,
}: {
  onSubmit: (content: string) => Promise<void>;
  isSubmitting: boolean;
  newComment: string;
  setNewComment: (value: string) => void;
}) {
  const handleLocalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof onSubmit === "function") {
      onSubmit(newComment);
    }
  };

  return (
    <form onSubmit={handleLocalSubmit} className="space-y-4">
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition-colors duration-200"
        placeholder="Votre commentaire..."
        rows={3}
        disabled={isSubmitting}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Publication..." : "Publier"}
      </button>
    </form>
  );
}

const CommentForm = dynamic(() => Promise.resolve(CommentFormComponent), {
  ssr: false,
});

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
}

interface CommentSectionProps {
  postId: string;
  initialComments: Comment[];
}

export default function CommentSection({
  postId,
  initialComments,
}: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const { getToken, getUser } = useAuth();
  const pathname = usePathname();
  const { handleError } = useErrorHandler();

  useEffect(() => {
    const token = getToken();
    const user = getUser();
    setIsAuth(!!token && !!user);
  }, [getToken, getUser]);

  const handleSubmit = useCallback(
    async (content: string) => {
      if (!content.trim()) return;

      setIsSubmitting(true);
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content,
            postId,
          }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi du commentaire");
        }

        const newComment = await response.json();
        setComments((prev) => [...prev, newComment]);
        toast.success("Commentaire ajouté avec succès");
      } catch (error) {
        handleError(
          error,
          "Une erreur est survenue lors de l'envoi du commentaire"
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [getToken, getUser, postId, handleError]
  );

  return (
    <div className="space-y-6">
      <ToastContainer />
      <h3 className="text-2xl font-bold mb-6">Commentaires</h3>

      <div className="mb-8">
        {isAuth ? (
          <CommentForm
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            newComment={newComment}
            setNewComment={setNewComment}
          />
        ) : (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600">
              <Link
                href={`/connexion?returnUrl=${encodeURIComponent(pathname)}`}
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Connectez-vous
              </Link>{" "}
              pour laisser un commentaire
            </p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500 flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-2 w-4 h-4 !text-sm"
                    style={{ fontSize: "14px" }}
                  />
                  {comment.author?.name || "Utilisateur"}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mr-2 w-4 h-4 !text-sm"
                    style={{ fontSize: "14px" }}
                  />
                  <FormattedDate date={comment.createdAt} />
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">
            Aucun commentaire pour le moment. Soyez le premier à commenter !
          </p>
        )}
      </div>
    </div>
  );
}
