import { useRouter } from "next/router";
import { prisma } from "../../db/prisma";

export default async function Post({ post }) {
  const router = useRouter();
  const { id } = router.query;

  if (!post) {
    return <p>Post non trouvé.</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-700">{post.title}</h1>
      <p className="text-gray-600 mt-4">
        Publié le{" "}
        {new Date(post.createdAt).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <img
        src={post.imageUrl || "https://via.placeholder.com/300x180"}
        alt={post.title}
        className="w-full h-auto mt-6"
      />
      <p className="mt-6 text-gray-700">{post.content}</p>
    </div>
  );
}

// Récupérer les données du post côté serveur
export async function getServerSideProps(context) {
  const { id } = context.params;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id, 10) },
  });

  return {
    props: { post },
  };
}
