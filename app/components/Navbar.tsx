import React from 'react'
import MaxWidthWrapper from './mmw';
import Image from 'next/image';
import Link from 'next/link';
import { FaGooglePlay, FaInstagram } from "react-icons/fa6";


const Navbar: React.FC = () => {
    return (
        <section className='z-[100] sticky backdrop-blur-md h-14 inset-x-0 top-0 w-full transition-all'>
            <MaxWidthWrapper>
                <div className='flex justify-between pt-4'>
                    <div>
                        <Link href="@">
                            <Image
                                src='/img/main_logo_icon.png'
                                height={40}
                                width={40}
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <div className=' flex items-end justify-end gap-x-10'>
                        {/* <button className="border bg-[#F5753A] hover:bg-[#c1683e] transition-all duration-200 text-gray-100 py-2 px-4 rounded-full">Login</button> */}
                        <Link href="https://play.google.com/store/apps/details?id=com.zervebox.app" target='_blank'>
                            <FaGooglePlay size={32} />
                        </Link>

                        {/* <button className="bg-[#3E479B] hover:bg-[#151836] transition-all duration-200 text-gray-100 py-2 px-4 rounded-full">Sign up</button> */}
                        <Link href="https://www.instagram.com/zervebox?igsh=eTFlN2JzMG1kNm5x" target='_blank'>
                            <FaInstagram size={32} />
                        </Link>

                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default Navbar