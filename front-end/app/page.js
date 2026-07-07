// app/page.js
import { fetchAPI } from '../lib/api';

// The GraphQL query to get our posts
const GET_LATEST_NEWS = `
  query GetLatestNews {
    posts(first: 5) {
      nodes {
        id
        title
        date
        excerpt
      }
    }
  }
`;

export default async function Home() {
  // Fetch the data on the server
  const data = await fetchAPI(GET_LATEST_NEWS);
  const posts = data.posts.nodes;

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">Astha News Portal</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            
            {/* Rendering the raw HTML excerpt safely */}
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
    </main>
  );
}