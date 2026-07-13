import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchNavigationCategories } from '@/lib/categories'

const Footer = async () => {
    const activeCategories = await fetchNavigationCategories();

    return (
        <>
            <div className='footerSec border-y border-brandborder py-12'>
                <div className="container mx-auto">
                    <div className="secOne flex flex-col">
                        <div className="logoSec mb-[1rem]">
                            <Image
                                src="/name-lg.png"
                                alt="Logo"
                                width={200}
                                height={100}
                            />
                        </div>
                        <div className="navberMenu leading-0 mt-[2rem]">
                            <nav className='flex flex-wrap gap-10 max-w-[700px]'>
                                {activeCategories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/${category.slug}`}
                                        className="text-black text-[18px] hover:text-red transition-colors font-poppins"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/about"
                                    className="text-black text-[18px] hover:text-red transition-colors font-poppins"
                                >
                                    About Us
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-brandborder py-8 mb-10">
                <div className="sectwo container mx-auto flex justify-between gap-8">
                    <div className="social">
                        <h4 className="text-[28px] font-semibold font-poppins">Follow Us</h4>
                        <div className="icons flex gap-4 mt-2">
                            <a href="https://www.facebook.com" target='_blank' className='size-[50px] object-contain'>
                                <Image
                                    src='/facebook.png'
                                    width={50}
                                    height={50}
                                    alt='facebook icon'
                                />
                            </a>
                            <a href="https://www.x.com" target='_blank' className='size-[50px] object-contain'>
                                <Image
                                    src='/x.png'
                                    width={50}
                                    height={50}
                                    alt='x icon'
                                />
                            </a>
                            <a href="https://www.instagram.com" target='_blank' className='size-[50px] object-contain'>
                                <Image
                                    src='/insta.png'
                                    width={50}
                                    height={50}
                                    alt='instagram icon'
                                />
                            </a>
                            <a href="https://www.linkedin.com" target='_blank' className='size-[50px] object-contain'>
                                <Image
                                    src='/linkedin.png'
                                    width={50}
                                    height={50}
                                    alt='linkedin icon'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer