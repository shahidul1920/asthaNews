import Image from 'next/image'
import React from 'react'

const HeroNews = () => {
    return (
        <div className='pt-[2rem] '>
            <section className="container mx-auto bg-red-50">

                <div className="headerHeroImage w-full">
                    {/* Hero Image bbb */}
                    <Image
                        src="/Hompage-banner2-Desktop.webp"
                        alt="Hero Image"
                        width={1120}
                        height={432}
                        objectFit="cover"
                        className="w-full"
                    />
                </div>

                <section className="mainTopNews w-full p-8 grid grid-cols-2 bg-background">

                    <div className="leftSideNews topNews grid grid-cols-2 gap-2 border-r-1 border-gray-300 pr-2">
                        <div className="contents font-bangali grid grid-cols-1">
                            <h3 className="text-[18px] font-bold">
                                আর্জেন্টিনা–মিসর ম্যাচে রেফারিং বিতর্ক নিয়ে ব্যাখ্যা দিল ফিফা
                            </h3>
                            <p className="text-base text-gray-700 text-[14px]">
                                ফিফা জানিয়েছে, আর্জেন্টিনা–মিসর ম্যাচে রেফারিং বিতর্কের জন্য তারা একটি ব্যাখ্যা দিয়েছে। ফিফা জানিয়েছে, আর্জেন্টিনা–মিসর ম্যাচে রেফারিং বিতর্কের জন্য তারা একটি ব্যাখ্যা দিয়েছে।
                            </p>
                            <span className="text-sm text-gray-500">০৯ জুলাই ২০২৬, ০৫:০০</span>
                        </div>
                        <div className="image">
                            <Image
                                src="/prothomalo-bangla_2026-07-09_nxgtx74x_bbm.avif"
                                alt="Top News Image 1"
                                width={560}
                                height={216}
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                    <div className="rightSideNews trandingNews grid grid-cols-2 gap-4 grid-rows-2 pl-4">
                        <div className="trandingNewsItem flex gap-2">
                            <div className="texts font-bangali flex flex-col justify-between">
                                <h4 className="text-[14px] font-bold">
                                    ফ্রান্সের বিপক্ষে সাইবারিকে পাচ্ছে না মরক্কো
                                </h4>
                                <span className="text-sm text-gray-500">০৯ জুলাই ২০২৬, ০৫:০০</span>
                            </div>
                            <Image
                                src="/prothomalo-bangla_2026-07-09_nxgtx74x_bbm.avif"
                                alt="Trending News Image 1"
                                width={200}
                                height={200}
                                className="size-[100px] object-cover"
                            />
                        </div>
                        <div className="trandingNewsItem flex gap-2">
                            <div className="texts font-bangali flex flex-col justify-between">
                                <h4 className="text-[14px] font-bold">
                                    ফ্রান্সের বিপক্ষে সাইবারিকে পাচ্ছে না মরক্কো
                                </h4>
                                <span className="text-sm text-gray-500">০৯ জুলাই ২০২৬, ০৫:০০</span>
                            </div>
                            <Image
                                src="/prothomalo-bangla_2026-07-09_nxgtx74x_bbm.avif"
                                alt="Trending News Image 2"
                                width={200}
                                height={200}
                                className="size-[100px] object-cover"
                            />
                        </div>
                        <div className="trandingNewsItem flex gap-2">
                            <div className="texts font-bangali flex flex-col justify-between">
                                <h4 className="text-[14px] font-bold">
                                    ফ্রান্সের বিপক্ষে সাইবারিকে পাচ্ছে না মরক্কো
                                </h4>
                                <span className="text-sm text-gray-500">০৯ জুলাই ২০২৬, ০৫:০০</span>
                            </div>
                            <Image
                                src="/prothomalo-bangla_2026-07-09_nxgtx74x_bbm.avif"
                                alt="Trending News Image 3"
                                width={200}
                                height={200}
                                className="size-[100px] object-cover"
                            />
                        </div>
                        <div className="trandingNewsItem flex gap-2">
                            <div className="texts font-bangali flex flex-col justify-between">
                                <h4 className="text-[14px] font-bold">
                                    ফ্রান্সের বিপক্ষে সাইবারিকে পাচ্ছে না মরক্কো
                                </h4>
                                <span className="text-sm text-gray-500">০৯ জুলাই ২০২৬, ০৫:০০</span>
                            </div>
                            <Image
                                src="/prothomalo-bangla_2026-07-09_nxgtx74x_bbm.avif"
                                alt="Trending News Image 4"
                                width={200}
                                height={200}
                                className="size-[100px] object-cover"
                            />
                        </div>
                    </div>

                </section>
            </section>
        </div>
    )
}

export default HeroNews