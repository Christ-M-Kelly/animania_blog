import { notFound } from "next/navigation";
import { prisma } from "@/app/db/prisma";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import CommentSection from "@/src/components/CommentSection";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
      comments: {
        include: {
          author: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/"
            className="text-green-600 hover:text-green-700 mb-6 inline-flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i>
            Retour aux articles
          </Link>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {post.imageUrl && (
              <div className="w-full flex justify-center bg-gray-100 p-8">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="max-h-[400px] w-auto object-contain"
                />
              </div>
            )}

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-green-500 mb-4">
                {post.title}
              </h1>

              <div className="flex items-center text-gray-600 mb-6">
                <span className="mr-4">
                  <i className="far fa-user mr-2"></i>
                  {post.author.name}
                </span>
                <span>
                  <i className="far fa-calendar mr-2"></i>
                  {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="prose prose-green max-w-none">{post.content}</div>
            </div>
          </div>
          <div className="border-t mt-8">
            <div className="p-6 sm:p-8">
              <CommentSection
                postId={post.id}
                initialComments={post.comments}
              />
            </div>
          </div>
        </article>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
