import { fetchAPI } from '@/lib/api';
import { CalendarHeartIcon, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';



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
`

const Navber = async () => {
  const data = await fetchAPI(GET_ALL_CATEGORIES);
  const allCategories = data.categories.nodes;

  const activeCategories = allCategories.filter(
    (cat) => cat.slug !== 'uncategorized' && cat.count > 0
  );
  return (
    <div>

      {/* top navber section */}
      <section className='topHeader container mx-auto flex justify-between items-center py-[10px] px-[15px]'>
        <div className="dates">
          <p className='text-gray-400 text-[14px]'>ঢাকা, বুধবার ০৮ জুলাই ২০২৬<br />
            ২৪ আষাঢ় ১৪৩৩</p>
        </div>
        <div className="logoSec">
          {/* <img src="./astha-logo.png" alt="" /> */}
          <Image 
            src="/astha-logo.png"
            alt="Logo"
            width={100}
            height={100}
            />
        </div>
        <div className="calender text-gray-400 text-[14px]">
          <button><CalendarHeartIcon /></button>
        </div>
      </section>

      {/* bottom navber section */}
      <section className='bottomHeader container mx-auto flex justify-between items-center py-[10px] px-[15px]'>
        <div className="homeBtn">
          <Link href="/" className='flex items-center gap-2 text-black hover:text-red-500 transition-colors'>
            <Home />
          </Link>
        </div>
        <div className="navberMenu">
          <nav className='flex gap-4'>
            {activeCategories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className="text-black hover:text-white transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Navber