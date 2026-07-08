'use client'
import { CalendarHeartIcon } from 'lucide-react'
import Image from 'next/image'

const Navber = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navber