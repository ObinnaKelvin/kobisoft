

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
import ServicesAccordion from "@/components/ServicesAccordion";
import Head from "next/head";

//service data

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
  },
]

const Services = () => {
  return (
    <>
      <Head>
        <title>Services Kobisoft Digitals | Digital Marketing Agency in Lagos, Nigeria</title>
        <meta name="description" content="Kobisoft Digitals offers a wide range of digital services including branding, design, development, copywriting, and SEO to help your business thrive online." />
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
                    Our Services
                </div>
            </motion.div>

            {/* Services Content */}
            <div className='w-full z-3 h-max gap-[20px] mt-[-40px]'>
                <ServicesAccordion  />

            </div>


        </div>

        {/* Launch Banner */}
        <div className="flex flex-col h-max w-full gap-10 items-center justify-center pb-[80px] pt-[80px] mt-[40px]">
          <LaunchBanner />
        </div>


        {/* Footer */}
        <Footer />
      </div>
    </>
  );  
};

export default Services;
