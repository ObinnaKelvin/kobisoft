import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-row gap-3 items-center justify-between w-full min-h-[100px] border-2 border-[#4b4b4b]'>
        
        {/* Logo Here */}
        <div className='text-white text-[14px] pt-5 flex flex-col pl-[50px] gap-3'>
            <Link href={'/'}>
                <Image className='cursor-pointer' src="/logofooter.png" alt="social media links" width={150} height={30} />
            </Link>
            <div>
                 © {currentYear} All rights reserved.
            </div>
        </div>

        {/* Privacy Policy . Terms & Conditions . Refund Policy */}

        <div className='flex flex-row items-center justify-center gap-5 text-[#FFFFFF] text-[14px]'>
            <Link href={'/privacy'} className='cursor-pointer hover:underline'>Privacy Policy</Link>
            <Link href={'/terms'} className='cursor-pointer hover:underline'>Terms & Conditions</Link>
            <Link href={'/refund'} className='cursor-pointer hover:underline'>Refund Policy</Link>
        </div>

        {/* Social Media Links Here */}
        <div className='flex flex-row gap-[20px] items-center pr-[50px]'>
            <Image className='cursor-pointer' src="/instagram.png" alt="social media links" width={20} height={30} />
            <Image className='cursor-pointer' src="/tiktok.png" alt="social media links" width={20} height={30} />
            <Image className='cursor-pointer' src="/linkedin.png" alt="social media links" width={20} height={30} />
            <Image className='cursor-pointer' src="/twitter.png" alt="social media links" width={20} height={30} />
        </div>

    </div>
  )
}

export default Footer