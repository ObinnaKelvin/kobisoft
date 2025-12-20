import React from 'react'

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
import Link from 'next/link';

function StartHere() {
  return (
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
                  Get Started
              </div>
          </motion.div>

          {/* Contact Form Here */}
          <div className='w-full z-3 h-max gap-[20px] mt-[-40px] mb-[50px]'>
              <form className='flex flex-col gap-5 border-2 border-[#2D2D30] bg-[#1E1E1E] rounded-[2em] px-[50px] py-[50px] w-[80%] mx-auto'>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Full Name *</span>
                  <input type="text" placeholder="John Doe" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                </div>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Your Position *</span>
                  <input type="text" placeholder="Owner, CEO, Manager" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                </div>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Brand Name *</span>
                  <input type="text" placeholder="Kobisoft Digitals" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                </div>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Brand Type *</span>
                    <select name="brandtype" id="brandtype"  className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]'>
                        <option value="">Select One</option>
                        <option value="Product-based">Product-based</option>
                        <option value="Service-based">Service-based</option>
                        <option value="E-commerce/Online Store">E-commerce/Online Store</option>
                        <option value="Restaurant/Food & Beverage">Restaurant/Food & Beverage</option>
                        <option value="Event or Hospitality">Event or Hospitality</option>
                        <option value="Fashion or Beauty">Fashion or Beauty</option>
                        <option value="Banking or Finance">Banking or Finance</option>
                        <option value="Tech/Saas">Tech/Saas</option>
                        <option value="Health & Wellness">Health & Wellness</option>
                        <option value="Creative/Media">Creative/Media</option>
                        <option value="Education/Training">Education/Training</option>
                        <option value="Real Estate/Property">Real Estate/Property</option>
                        <option value="NGO/Non-profit">NGO/Non-profit</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Your Services *</span>
                  <input type="text" placeholder="Products or services you offer" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
                </div>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Social Media or Website *</span>
                  <input type="text" placeholder="Your brand's social media handle or website link" className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]' />
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
                  <span className='text-white mb-2'>Project/Service Type *</span>
                    <select name="servicetype" id="servicetype"  className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]'>
                        <option value="">Select One</option>
                        <option value="Branding & Identity">Branding & Identity</option>
                        <option value="Creative Design">Creative Design</option>
                        <option value="Digital Market">Digital Market</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Video & Motion Design">Video & Motion Design</option>
                        <option value="Website Design & Development">Website Design & Development</option>
                        <option value="App Design & Development">App Design & Development</option>
                    </select>
                </div>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Budget Range *</span>
                    <select name="budgetrange" id="budgetrange"  className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]'>
                        <option value="">Select One</option>
                        <option value="$1,000 - $10,000">$1,000 - $10,000</option>
                        <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="not_sure">Not sure, let's talk first</option>
                    </select>
                </div>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Duration *</span>
                    <select name="duration" id="duration"  className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline outline-[#ffffff50]'>
                        <option value="">Select One</option>
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="4 weeks">4 weeks</option>
                        <option value="3 months+">3 months+</option>
                    </select>
                </div>
                <div className="flex flex-col">
                  <span className='text-white mb-2'>Tell Us More *</span>
                  <textarea placeholder="Anything else you want us to know about your project..." className='bg-[#2D2D30] rounded-[12px] px-[20px] py-[10px] text-white focus:outline-none h-[150px] resize-none focus:outline outline-[#ffffff50]'></textarea>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="checkbox" className='w-[20px] h-[20px] accent-[#B11A3D]' />
                  <div>I agree to the <Link href={'/privacy'} className='cursor-pointer text-[#B11A3D] hover:underline hover:text-[#B11A3D]'>Privacy Policy.</Link></div>
                </div>
                <button type="submit" className='bg-[#B11A3D] text-white font-semibold rounded-[3em] px-[20px] py-[10px] hover:bg-[#9e1530] transition-colors duration-300'>Send Message</button>

              </form>
          </div>

            {/* Faq Banner */}
            <div className="flex flex-col h-max w-full gap-10 items-center justify-center pb-[80px] pt-[80px] mt-[40px]">
                <Faq/>
            </div>


            {/* Footer */}
            <Footer />


      </div>

    </div>
  )
}

export default StartHere