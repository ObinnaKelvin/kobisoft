import React from 'react'
import { Geist, Geist_Mono, Montserrat } from "next/font/google";



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


const refundData = [
    {
        id: 1,
        title: '',
        content: 'At Kobisoft Digitals, our work involves strategy, creativity, time, and dedicated expertise. Because of the nature of our services, all payments made are non-refundable.'
    },
    {
        id: 2,
        title: 'No Refund Policy',
        content: 'Once a project has commenced and payment (full or partial) has been received, no refunds will be issued under any circumstances. Payments for digital services such as design, content creation, strategy, or marketing campaigns are final and non-transferable.'
    },
    {
        id: 3,
        title: 'Service Quality',
        content: 'We are committed to providing quality work. If a client is dissatisfied, Kobisoft Digitals will make reasonable efforts to address valid concerns within the agreed project scope.'
    },
    {
        id: 4,
        title: 'Cancellations',
        content: 'If a client decides to cancel after a project has started, the payment made will be retained to cover time, resources, and effort already invested.'
    },
    {
        id: 5,
        title: 'Exceptions',
        content: 'Refunds may only be considered if Kobisoft Digitals fails to deliver the agreed service and no work has been started. This is subject to management approval.'
    },
    {
        id: 6,
        title: 'Agreement',
        content: 'By engaging Kobisoft Digitals services, you acknowledge that you have read, understood, and agreed to this No Refund Policy.'
    }

]

function Refund() {
  return (
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
                    Refund Policy
                </div>
                <div className='flex gap-3 w-max bg-[#2D2D30] py-[15px] px-[30px] rounded-[3em]'>
                    <Image className='cursor-pointer' src="/time.png" alt="time" width={30} height={30} />
                    <div className='text-[#ffffff90]'>Last Updated on September 24, 2025</div>
                </div>
            </motion.div>

            {/* Privacy terms Content */}
            <div className='w-[80%] z-3 h-max gap-[20px] mt-[-70px]'>

                {refundData.map((refund) => (
                    <div key={refund.id} className='flex flex-col gap-3 my-[30px] bg-[#2D2D30] h-max rounded-[3em] px-[50px] py-[50px]'>
                        <div className='text-white font-semibold text-[20px]'>{refund.title}</div>
                        <div className='text-white font-light text-[16px]'>{refund.content}</div>
                    </div>
                ))}

            </div>

        </div>


        {/* Footer */}
        <Footer />
        
    </div>
  )
}

export default Refund