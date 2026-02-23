import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-col xl:flex-row lg:flex-row
    gap-[40px] xl:gap-3 lg:gap-3 items-center justify-between 
    w-full 
    h-full lg:min-h-[100px] xl:min-h-[100px] 
    py-[30px]
    px-[15px] lg:px-[50px] xl:px-[50px]
    pb-[100px]
    border-2 border-[#4b4b4b]'>
        
        {/* Logo Here */}
        <div className='text-white text-[14px] pt-5 flex flex-col  gap-3 w-full lg:w-[33%] xl:w-[33%]'>
            <Link href={'/'}>
                <Image className='cursor-pointer' src="/logofooter.png" alt="social media links" width={170} height={30} />
            </Link>
            <section>
                Digital agency specializing in branding, digital marketing, web & app development, and growth-driven creative solutions.
            </section>
            <div>
                 © {currentYear} All rights reserved.
            </div>
        </div>

        {/* Privacy Policy . Terms & Conditions . Refund Policy */}

        <div className='flex flex-col xl:flex-row lg:flex-row items-left xl:items-center lg:items-center justify-center gap-5 text-[#FFFFFF] text-[14px] w-full lg:w-[33%] xl:w-[33%]'>
            <Link href={'/privacy'} className='cursor-pointer hover:underline hover:text-[#B11A3D]'>Privacy Policy</Link>
            <Link href={'/termsandconditions'} className='cursor-pointer hover:underline hover:text-[#B11A3D]'>Terms & Conditions</Link>
            <Link href={'/refund'} className='cursor-pointer hover:underline hover:text-[#B11A3D]'>Refund Policy</Link>
        </div>

        {/* Social Media Links Here */}
        <div className='flex flex-row gap-[20px] items-center justify-center  w-full lg:w-[33%] xl:w-[33%]'>
            <Image className='cursor-pointer' src="/instagram.png" alt="social media links" width={20} height={30} />
            <Image className='cursor-pointer' src="/tiktok.png" alt="social media links" width={20} height={30} />
            <Image className='cursor-pointer' src="/linkedin.png" alt="social media links" width={20} height={30} />
            <Image className='cursor-pointer' src="/twitter.png" alt="social media links" width={20} height={30} />
        </div>

    </div>
  )
}

export default Footer