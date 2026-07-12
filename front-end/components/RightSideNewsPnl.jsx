import Image from 'next/image'
import React from 'react'

const RightSideNewsPnl = () => {
    return (
        <div className='rightSideNewsPnl font-bangali'>

            <section className="top1sec grid grid-cols-2 gap-4 font-bangali border-b-1 border-brandborder pb-4 items-center max-h-[400px]">
                <div className="leftt h-full">
                    <Image
                        src="http://localhost/astha-news/wp-content/uploads/2026/07/prothomalo-bangla_2026-07-11_mpg7sr81_US-Iran-2.jpg"
                        alt="abc"
                        width={350}
                        height={250}
                        className="object-cover size-full transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="right">
                    <h3 className="text-[38px] font-bold text-gray-900">
                        মার্কিন বোমা হামলা ও প্রাথমিক সমঝোতা ব্যর্থ, ইরান নিয়ে ট্রাম্পের পরের পরিকল্পনা কী
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolores modi eveniet totam, quis possimus minima distinctio, tempore numquam, ducimus vitae hic omnis rerum perspiciatis porro dicta maiores illo ab!
                    </p>
                    <p className="mt-4 text-[16px] text-gray-500">
                        ১১ জুলাই, ২০২৬ এ ১১:২৬ AM
                    </p>
                </div>
            </section>

            <section className="top2sec grid grid-cols-2 gap-4 font-bangali pt-4">

                <div className="leftt">

                </div>

                <div className="rightt">
                    
                </div>

            </section>



        </div>
    )
}

export default RightSideNewsPnl