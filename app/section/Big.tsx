import React from 'react'
import MaxWidthWrapper from '../components/mmw'
import Image from 'next/image'
import { FAQ } from '../components/constants/index'
import Link from 'next/link'
import { FaGooglePlay } from "react-icons/fa6";

const Main = () => {
  return (
    <section className='h-screen'>
      <MaxWidthWrapper className='h-full'>
        <div className='flex justify-center'>
          <Link href="https://play.google.com/store/apps/details?id=com.zervebox.app" target='_blank'>
            <Image
              src="/img/bgImg.png"
              alt='background-image'
              height={700}
              width={700}
              className='mt-0'
            />
          </Link>
        </div>
        <div className='grid grid-cols-1'>
          <div>
            <h2 className='text-center text-5xl font-semibold'>Why <span className='text-[#F5753A]'>Zerve</span><span className='text-[#3E479B]'>box</span> ?</h2>
          </div>
          <div className='flex flex-col md:flex-row justify-between py-10'>
            {FAQ.map((item, index) => (
              <div key={index} className='p-4 flex-1'>
                <h3 className='text-2xl font-bold mb-3'>{item.heading}</h3>
                <p className='text-lg'>{item.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Main;
