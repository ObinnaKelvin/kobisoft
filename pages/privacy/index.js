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


const policyData = [
    {
        id: 1,
        title: 'Information We Collect',
        content: 'We may collect personal information from you when you visit our website, fill out our form, or interact with our services. This information may include your name, email address, contact details, and any other information you voluntarily provide to us.'
    },
    {
        id: 2,
        title: 'How We Use Your Information',
        content: 'We may use the information we collect from you for various purposes, including: Providing and improving our products and services, Personalizing your experience on our website, Communicating with you about your business and any updates or promotions, Analyzing website traffic and user behavior to enhance our offerings, Sending you marketing emails. (You can opt out at any time by sending us an email or by unsubscribing directly from the marketing emails you receive.)'
    },
    {
        id: 3,
        title: 'Data Security',
        content: 'We take data security seriously and employ industry-standard measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.'
    },
    {
        id: 4,
        title: 'Third-Party Disclosure',
        content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided that they agree to keep your information confidential.'
    },
    {
        id: 5,
        title: 'Cookies',
        content: 'Our website may use cookies to enhance your browsing experience and collect information about how you interact with our site. You can adjust your browser settings to refuse cookies or alert you when cookies are being sent, but some features of the site may not function properly without cookies.'
    },
    {
        id: 6,
        title: 'Changes to this Privacy Policy',
        content: 'We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this Privacy Policy periodically for any updates.'
    },
    {
        id: 7,
        title: 'Contact Us',
        content: 'If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at hello@kobisoftdigitals.com'
    },

]

function Privacy() {
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
                    Privacy Policy
                </div>
                <div className='flex gap-3 w-max bg-[#2D2D30] py-[15px] px-[30px] rounded-[3em]'>
                    <Image className='cursor-pointer' src="/time.png" alt="time" width={30} height={30} />
                    <div className='text-[#ffffff90]'>Last Updated on September 24, 2025</div>
                </div>
            </motion.div>

            {/* Privacy Policy Content */}
            <div className='w-[80%] z-3 h-max gap-[20px] mt-[-70px]'>

                {policyData.map((policy) => (
                    <div key={policy.id} className='flex flex-col gap-3 my-[30px] bg-[#2D2D30] h-max rounded-[3em] px-[50px] py-[50px]'>
                        <div className='text-white font-semibold text-[20px]'>{policy.title}</div>
                        <div className='text-white font-light text-[16px]'>{policy.content}</div>
                    </div>
                ))}

            </div>

        </div>


        {/* Footer */}
        <Footer />
        
    </div>
  )
}

export default Privacy