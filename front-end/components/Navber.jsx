import { Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import CalendarToggle from './CalendarToggle';
import { fetchNavigationCategories } from '@/lib/categories';

const Navber = async () => {
  const activeCategories = await fetchNavigationCategories();
  const now = new Date();
  const formattedDate = now.toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div>

      {/* top navber section */}
      <section className='topHeader container mx-auto flex justify-between items-center py-2.5 px-3.75'>
        <div className="dates font-bangali text-[16px] w-30">
          <p className='text-gray-400'>{formattedDate}</p>
        </div>
        <div className="logoSec">
          {/* <img src="./astha-logo.png" alt="" /> */}
          <Link href="/" className='flex items-center gap-2 text-black hover:text-red-500 transition-colors'>
          <Image
            src="/astha-logo.png"
            alt="Logo"
            width={100}
            height={100}
          /></Link>
        </div>
        <div className="calender text-gray-400 text-[14px] w-30 flex justify-end">
          <CalendarToggle />
        </div>
      </section>

      {/* bottom navber section */}
      <section className='bottomHeader container mx-auto flex justify-between items-center py-2.5 px-3.75'>
        <div className="homeBtn">
          <Link href="/" className='flex items-center gap-2 text-black hover:text-red-500 transition-colors'>
            <Home />
          </Link>
        </div>
        <div className="navberMenu">
          <nav className='flex gap-10 justify-between'>
            {activeCategories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className="text-black hover:text-red transition-colors font-poppins"
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/about"
              className="text-black hover:text-red transition-colors font-poppins"
            >
              About Us
            </Link>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Navber