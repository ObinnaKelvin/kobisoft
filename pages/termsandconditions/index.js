import React from 'react'
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Head from 'next/head';



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


const termsData = [
    {
        id: 1,
        title: 'Introduction',
        content: 'Welcome to Kobisoft Digitals. By accessing or using our website (kobisoftdigitals.com), services, or materials, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.'
    },
    {
        id: 2,
        title: 'Our Services',
        content: 'Kobisoft Digitals is a digital marketing agency that provides services including but not limited to branding, content creation, design, social media management, advertising, website design, and digital strategy. All services are tailored based on the client’s goals and deliverables as outlined in the signed proposal or agreement.'
    },
    {
        id: 3,
        title: 'Project Scope & Deliverables',
        content: 'All projects begin once payment or a deposit has been received. Deliverables, timelines, and expectations are outlined in the client proposal or service agreement. Any request outside the agreed scope will be treated as an add-on and billed separately.'
    },
    {
        id: 4,
        title: 'Communication & Feedback',
        content: 'Clients are expected to provide feedback or approval within the agreed timelines to prevent project delays. Delays in communication or feedback may affect delivery dates.'
    },
    {
        id: 5,
        title: 'Payment Terms',
        content: 'Payment terms are specified in the client proposal or invoice. Late payments may delay ongoing work or result in service suspension. Services commence after the agreed payment (full or partial) has been made.'
    },
    {
        id: 6,
        title: 'Intellectual Property',
        content: 'Upon full payment, clients own the final deliverables. Kobisoft Digitals retains the right to showcase completed work for portfolio, marketing, or promotional purposes unless otherwise agreed in writing.'
    },
    {
        id: 7,
        title: 'Confidentiality',
        content: 'Both parties agree to maintain confidentiality on all project-related information, data, and materials shared during the course of work.'
    },
    {
        id: 8,
        title: 'Limitation of Liability',
        content: 'While Kobisoft Digitals aims to provide high-quality services, we are not liable for any loss of revenue, profits, or data resulting from delays, technical issues, or actions beyond our control.'
    },
    {
        id: 9,
        title: 'Termination',
        content: 'Either party may terminate a project or agreement with written notice. Any work completed prior to termination must be paid in full.'
    },
    {
        id: 10,
        title: 'Modifications',
        content: 'Kobisoft Digitals reserves the right to update or modify these Terms & Conditions at any time. Continued use of our website or services constitutes acceptance of any changes.'
    },

]



function Terms() {
  return (
    <>
        <Head>
        <title>Terms and Conditions - Kobisoft Digitals</title>
        <meta name="description" content="Kobisoft Digitals Terms and Conditions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/siteicon.ico" />
        </Head>
        <div className='flex flex-col h-max relative items-center justify-center top-0'>

            {/* Hero Section */}

            {/* Blur Effect */}
            <div className="flex items-center w-screen h-screen justify-center absolute top-0">
            <div className="bg-[#B11A3D] h-[350px] w-[750px] rounded-[50%] z-1 blur-2xl ml-[-500px]"></div>
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
                        Terms and Conditions
                    </div>
                    <div className='flex gap-3 w-max bg-[#2D2D30] py-[15px] px-[30px] rounded-[3em]'>
                        <Image className='cursor-pointer' src="/time.png" alt="time" width={30} height={30} />
                        <div className='text-[#ffffff90]'>Last Updated on September 24, 2025</div>
                    </div>
                </motion.div>

                {/* Privacy terms Content */}
                <div className='w-[80%] z-3 h-max gap-[20px] mt-[-70px]'>

                    {termsData.map((terms) => (
                        <div key={terms.id} className='flex flex-col gap-3 my-[30px] bg-[#2D2D30] h-max rounded-[3em] px-[50px] py-[50px]'>
                            <div className='text-white font-semibold text-[20px]'>{terms.title}</div>
                            <div className='text-white font-light text-[16px]'>{terms.content}</div>
                        </div>
                    ))}

                </div>

            </div>


            {/* Footer */}
            <Footer />
            
        </div>
    </>
  )
}

export default Terms