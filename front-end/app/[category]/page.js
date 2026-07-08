// app/[category]/page.js
import { fetchAPI } from '../../lib/api'; // Notice the two dots (../../) because we are one folder deeper now!

export default async function CategoryPage({ params }) {
  // 1. Next.js extracts the category slug from the URL (e.g., "business")
  const currentCategory = params.category;

  // 2. We write our query to accept a dynamic variable ($categoryName)
  const GET_CATEGORY_NEWS = `
    query GetCategoryNews($categoryName: String!) {
      posts(where: { categoryName: $categoryName }, first: 10) {
        nodes {
          id
          title
          date
          excerpt
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
      <h1 className="text-4xl font-bold mb-8 capitalize">{currentCategory} News</h1>
      
      {/* If a category is empty (like your new one), we show a fallback message */}
      {posts.length === 0 ? (
        <p className="text-gray-500 text-lg">No news found in this category yet.</p>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              
              <div 
                className="text-gray-600 mb-4 prose"
                dangerouslySetInnerHTML={{ __html: post.excerpt }} 
              />
              
              <p className="text-sm text-gray-400">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}