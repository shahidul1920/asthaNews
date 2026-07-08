// app/[category]/page.js
import Image from "next/image";
import { fetchAPI } from "../../lib/api"; // Notice the two dots (../../) because we are one folder deeper now!

export default async function CategoryPage({ params }) {
  // 1. Next.js extracts the category slug from the URL (e.g., "business")
  const resolvedParams = await params;
  const currentCategory = resolvedParams.category;

  // 2. We write our query to accept a dynamic variable ($categoryName)
  const GET_CATEGORY_NEWS = `
    query GetCategoryNews($categoryName: String!) {
      posts(where: { categoryName: $categoryName }, first: 10) {
        nodes {
          id
          title
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  // 3. We fetch the data, passing the URL slug in as the variable
  const data = await fetchAPI(GET_CATEGORY_NEWS, {
    variables: { categoryName: currentCategory },
  });

  const posts = data?.posts?.nodes || [];

  return (
    <main className="p-10 max-w-4xl mx-auto">
      {/* We use the category slug as the page title */}
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {currentCategory} News
      </h1>

      {/* If a category is empty (like your new one), we show a fallback message */}
      {posts.length === 0
        ? <p className="text-gray-500 text-lg">
            No news found in this category yet.
          </p>
        : <div className="grid gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>

                {post.featuredImage?.node?.sourceUrl && (
                  <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-md">
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                )}

                <p className="text-gray-600 mb-4 prose">
                  {post.excerpt ? post.excerpt.replace(/<[^>]*>/g, "") : ""}
                </p>

                <p className="text-sm text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </article>
            ))}
          </div>}
    </main>
  );
}
