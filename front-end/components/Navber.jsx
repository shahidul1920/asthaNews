import { Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import CalendarToggle from './CalendarToggle';
import { fetchNavigationCategories } from '@/lib/categories';
import MobileNav from './MobileNav';

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
      <section className='topHeader container mx-auto grid grid-cols-2 items-center gap-y-1 px-4 py-2.5 md:grid-cols-[1fr_auto_1fr] md:gap-y-0 md:px-6'>
        <div className="dates row-start-2 min-w-0 font-bangali text-xs sm:text-[16px] md:row-auto">
          <p className='text-gray-400'>{formattedDate}</p>
        </div>
        <div className="logoSec col-span-2 row-start-1 justify-self-center md:col-span-1 md:row-auto">
          {/* <img src="./astha-logo.png" alt="" /> */}
          <Link href="/" className='flex items-center gap-2 text-black hover:text-red-500 transition-colors'>
          <Image
            src="/astha-logo.png"
            alt="Logo"
            width={90}
            height={90}
          /></Link>
        </div>
        <div className="calender row-start-2 flex justify-end text-[14px] text-gray-400 md:row-auto">
          <CalendarToggle />
        </div>
      </section>

      {/* bottom navber section */}
      <section className='bottomHeader container mx-auto flex items-center justify-between px-4 py-2.5 md:px-6'>
        <div className="homeBtn hidden lg:block">
          <Link href="/" className='flex items-center gap-2 text-black hover:text-red-500 transition-colors'>
            <Home />
          </Link>
        </div>
        <div className="navberMenu hidden lg:block">
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
        <MobileNav categories={activeCategories} />
      </section>
    </div>
  )
}

export default Navber
