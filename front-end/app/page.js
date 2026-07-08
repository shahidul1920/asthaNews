// components/Navbar.js
import Link from 'next/link';
import { fetchAPI } from '../lib/api';

const GET_ALL_CATEGORIES = `
  query GetAllCategories {
    categories(first: 100) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;

export default async function Navbar() {
  const data = await fetchAPI(GET_ALL_CATEGORIES);
  const allCategories = data.categories.nodes;

  // Filter out empty categories and the default "Uncategorized"
  const activeCategories = allCategories.filter(
    (cat) => cat.slug !== 'uncategorized' && cat.count > 0
  );

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex gap-6">
        <Link href="/" className="font-bold text-xl text-red-500">
          Astha News
        </Link>
        
        <ul className="flex gap-4 items-center">
          {activeCategories.map((category) => (
            <li key={category.id}>
              <Link 
                href={`/${category.slug}`} 
                className="hover:text-red-400 transition-colors capitalize"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}