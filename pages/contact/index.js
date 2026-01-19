

// google fonts
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  
});

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "@/variants";
import Image from 'next/image';
import Footer from '@/components/Footer';
import Faq from "@/components/Faq";
import TrustedBy from "@/components/TrustedBy";
import LaunchBanner from "@/components/LaunchBanner";

//icons

import {
  RxCrop,
  Rxpencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxPencil2,
} from 'react-icons/rx'
import Link from "next/link";
import Head from "next/head";



const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Kobisoft Digitals</title>
        <meta name="description" content="Learn more about Kobisoft Digitals, a leading digital solutions agency dedicated to creating impactful online experiences through creativity, strategy, and technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/siteicon.ico" />
      </Head>
      <div className="flex flex-col h-max relative items-center justify-center top-0">


        {/* Blur Effect */}
        <div className="flex items-center w-screen h-screen justify-center absolute top-0">
          <div className="bg-[#B11A3D] h-[350px] w-[750px] rounded-[50%] z-1 blur-2xl ml-[500px]"></div>
          <div className="bg-[#ffffff] opacity-4 w-screen h-full absolute z-2"></div>
        </div>

        {/* hero section */}

        <div className="flex flex-col items-center bg-[#00000060] 
                xl:bg-[#00000060] gap-[20px] w-full  z-3 relative">

            <motion.div 
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                className="flex flex-col gap-[20px] w-[80%] h-max z-3
                pl-[0px] pt-[50px] pr-[0px] pb-[50px] 
                xl:pl-[0px] xl:pt-[150px] xl:pr-[0px] xl:pb-[50px] "
                animate="show"
                exit="hidden">

                {/* pane */}
                <div className="bg-[#B11A3D] w-[50px] h-[5px] xl:w-[100px] xl:h-[6px]"></div>
                {/* text */}
                <div className="font-thin
                    xl:text-[45px] xl:w-[50%] xl:font-light
                    lg:text-[40px] lg:w-[50%] 
                    md:text-[40px] md:w-[70%]
                    text-[23px] w-[90%] 
                    ">
                    {/* title */}
                    Contact Us
                </div>
            </motion.div>

            {/* Contact Form Here */}
            <motion.div 
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='w-full z-3 h-max gap-[20px] mt-[-40px] mb-[50px]'>
                <form className='flex flex-col gap-5 border-2 border-[#2D2D30] bg-[#1E1E1E] rounded-[2em] px-[50px] py-[50px] w-[80%] mx-auto'>
                  <div className="flex flex-col">
                    <span className='text-white mb-2'>Full Name *</span>
                    <input type="text" placeholder="John Doe" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                  </div>
                  <div className="flex flex-col">
                    <span className='text-white mb-2'>Brand Name *</span>
                    <input type="text" placeholder="Kobisoft Digitals" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                  </div>
                  <div className="flex flex-col">
                    <span className='text-white mb-2'>Email *</span>
                    <input type="email" placeholder="ayochuks@kobisoftdigitals.com" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                  </div>
                  <div className="flex flex-col">
                    <span className='text-white mb-2'>Phone Number *</span>
                    <input type="tel" placeholder="+234 xxx xxx xxx" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                  </div>
                  <div className="flex flex-col">
                    <span className='text-white mb-2'>Location *</span>
                    <input type="text" placeholder="Country & Your business address" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                  </div>
                  <div className="flex flex-col">
                    <span className='text-white mb-2'>Message *</span>
                    <textarea placeholder="Type your message..." className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline-none h-[150px] resize-none focus:outline outline-[#ffffff50]'></textarea>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input type="checkbox" className='w-[20px] h-[20px] accent-[#B11A3D]' />
                    <div>I agree to the <Link href={'/privacy'} className='cursor-pointer text-[#B11A3D] hover:underline hover:text-[#B11A3D]'>Privacy Policy.</Link></div>
                  </div>
                  <button type="submit" className='bg-[#B11A3D] text-white font-semibold rounded-[3em] px-[20px] py-[10px] hover:bg-[#9e1530] transition-colors duration-300'>Send Message</button>

                </form>
            </motion.div>


        </div>

        {/* Faq Banner */}
        <div className="flex flex-col h-max w-full gap-10 items-center justify-center pb-[80px] pt-[80px] mt-[40px]">
          <Faq/>
        </div>


        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Contact;
