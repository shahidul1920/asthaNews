import Image from 'next/image'
import React from 'react'

const LeftSideNewsPnl = () => {
    return (
        <div className='leftSideNewsPnl flex flex-col gap-4'>

            <section className='sidebarCard flex flex-col gap-4 mt-4 border-b-1 border-brandborder pb-1.5 font-bangali'>
                <div className="headNimage flex gap-2 justify-between items-center">
                    <h4 className='text-[18px] font-bold w-4/6'>প্রাথমিকে বৃত্তি পাওয়া শিক্ষার্থীরা কত টাকা, কত দিন পাবে</h4>
                    <div className="w-2/6">
                        <Image
                            src="http://localhost/astha-news/wp-content/uploads/2026/07/prothomalo-bangla_2026-07-11_mpg7sr81_US-Iran-2.jpg"
                            alt="image of news"
                            width={100}
                            height={100}
                            className="size-full object-cover"
                        />
                    </div>
                </div>
                <p className='text-[16px] text-black'>প্রাথমিকে বৃত্তি পাওয়া শিক্ষার্থীরা কত টাকা, কত দিন পাবে, প্রাথমিকে, কত দিন পাবে.......</p>
            </section>
            
        </div>
    )
}

export default LeftSideNewsPnl