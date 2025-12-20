import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/launchbanner.module.css'

function LaunchBanner() {
  return (
    <div className='flex flex-col gap-3 items-center justify-center w-full xl:w-[80%] h-[400px]'>
      <div className='flex flex-row gap-3 w-[80%] xl:w-[80%] bg-[#2D2D30] h-[400px] rounded-[2em]  overflow-hidden relative'>
        <div className='flex flex-col  items-center justify-center text-white w-[40%] h-full py-[40px] px-[50px]'>
          <div className='text-[30px]'>
            Ready To Launch Something <span className='font-bold'>Extraordinary?</span>
          </div>
          <div className='text-[#FFFFFF] flex gap-2 items-center justify-center cursor-pointer border-2 border-[#B11A3D] px-[40px] py-[10px] rounded-[12px] mt-[10px] w-[100%] '>
              <Link href={'/start-here'} className='cursor-pointer'>Start Here</Link>
          </div>
        </div>
        <div className='flex flex-col  items-center justify-center text-white w-[60%] h-full  py-[40px] px-[50px]'>
          <Image src={'/spiral.png'} width={900} height={1000} alt='Launch Banner Image' className={`${style.spiral} absolute object-cover mr-[-270px]`} />
        </div>
      </div>
    </div>
  )
}

export default LaunchBanner