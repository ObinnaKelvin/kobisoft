import Image from "next/image";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import style from "@/styles/homepage.module.css";
import Avatar from "@/components/Avatar";
import ServicesAccordion from "@/components/ServicesAccordion";


const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
  
});

//components
// import ParticlesContainer from "@/dump/ParticlesContainer";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "@/variants";
import TrustedBy from "@/components/TrustedBy";
import Skills from "@/components/Skills";
import WhyYouNeedUs from "@/components/WhyYouNeedUs";

//css const
// const glowcss = `${style.glowUpButton} flex items-center justify-center bg-[#2D2D30] 
// xl:w-[239px] xl:h-[87px] 
// lg:w-[239px] lg:h-[87px] 
// xmd:w-[239px] xmd:h-[87px] 
// md:w-[239px] md:h-[87px] 
// sm:w-[239px] sm:h-[87px] 
// rounded-[40px]  cursor-pointer`
// // border-[#B11A3D] border-[4px]



//metadata
export const metadata = {
  title: "Kobisoft Digitals",
  description: `At Kobisoft Digitals, we’re more than just a digital agency—we’re your growth partner. 
  🚀 We combine creativity, technology, and strategy to craft solutions that help brands stand out, connect with their audience, 
    and scale with confidence. We believe every business deserves a strong digital presence, and our mission is to transform ideas into powerful, 
    measurable results. Whether you’re a startup finding your voice or an established business looking to grow, we bring the expertise and innovation to make it happen. Our Products & Services. 
    We offer end-to-end digital solutions tailored to your goals:
    Branding & Creative Design – Logo design, visual identity, brand storytelling
    Digital Marketing – SEO, social media management, paid ads, content marketing
    Website Design & Development – Modern, responsive, and conversion-focused sites
    Mobile App Design & Development – Engaging apps for iOS & Android
    Media Production – Photography, videography, and creative campaigns
    Data & Analytics – Insights and strategies that boost ROI
    At the heart of what we do is a simple promise: to help your brand grow, connect, and thrive in the digital world.`,
};

export default function Home() {
  return (
    // <div
    //   className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    // >
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
    //           pages/index.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>
    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>

    // Container
    <div className="flex flex-col h-max relative items-center justify-center top-0">

      <div className="bg-primary/60 h-screen relative flex flex-col items-center justify-center">
      
      
        {/* Blur Effect */}
        <div className="flex items-center w-screen h-screen justify-center absolute top-0">
          <div className="bg-[#B11A3D] h-[350px] w-[750px] rounded-[50%] z-1 blur-2xl"></div>
          <div className="bg-[#ffffff] opacity-4 w-screen h-full absolute z-2"></div>
        </div>

        {/* hero section */}
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          className="flex flex-col gap-[20px] bg-[#00000060] 
          xl:bg-[#00000060] w-[80%] h-max z-3 rounded-[30px] 
          pl-[15px] pt-[50px] pr-[10px] pb-[50px] 
          xl:pl-[70px] xl:pt-[50px] xl:pr-[70px] xl:pb-[50px]"
          animate="show"
          exit="hidden">

          {/* pane */}
          <div className="bg-[#B11A3D] w-[50px] h-[5px] xl:w-[100px] xl:h-[6px]"></div>
          {/* text */}
          <div className="font-thin
          xl:text-[45px] xl:w-[50%] 
          lg:text-[40px] lg:w-[50%] 
          md:text-[40px] md:w-[70%]
          text-[23px] w-[90%] 
          mb-[40px]
          
          ">
            {/* title */}
              Building brands and digital solutions that drive business growth.
          </div>

          {/* button */}
          <motion.div 
            variants={fadeIn('down', 0.2)}
            // initial="hidden"
            initial="show"
            animate="show"
            // exit="hidden"
            className={`${style.glowUpButton} flex items-center justify-center bg-[#2D2D30] 
                        xl:w-[239px] xl:h-[87px] 
                        lg:w-[239px] lg:h-[87px] 
                        xmd:w-[239px] xmd:h-[87px] 
                        md:w-[239px] md:h-[87px] 
                        w-[239px] h-[87px] 
                        
                        rounded-[40px]  cursor-pointer`}>
                         GET STARTED
          </motion.div>




        </motion.div>

        {/* Avatar Img */}
        <motion.div 
          variants={fadeIn('up', 0.4)}
          className=" flex absolute z-5 right-[150px]" 
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration: 1, ease: 'easeInOut'}}>
          <Avatar/>
        </motion.div>


      </div>



      {/* Particles */}
      {/* <ParticlesContainer /> */}


      {/* Trusted By */}

      <div className=" h-[400px] w-full flex flex-col items-center gap-10 p-[30px]">

        {/* Title */}
        <div className="
        text-[20px]
        xl:text-[25px]
        lg:text-[25px] 
        md:text-[25px]
        ">
          Trusted By
        </div>

        {/* Trusted Clients Container */}
        <TrustedBy />


      </div>

      {/* Services We Offer */}

      {/* Services-container */}
      <div className="flex flex-col h-max w-full gap-10 items-center justify-center pb-[60px]">

        <div className="xl:w-[80%] flex flex-col items-center justify-center relative">

          {/* text */}
          <div className="flex flex-col font-thin
          xl:text-[65px] xl:w-[80%] 
          lg:text-[40px] lg:w-[50%] 
          md:text-[40px] md:w-[70%]
          text-[23px] w-[90%] 
          mb-[40px]
          pt-[20px]">
            {/* title */}
            {/* pane */}
            <div className="bg-[#B11A3D] w-[50px] h-[5px] xl:w-[70px] xl:h-[5px]"></div>
              Services
          </div>

          {/* Service-Items */}
          {/* <div className="flex flex-col gap-10"> */}
            <ServicesAccordion  />
          {/* </div> */}


        </div>



      </div>

      {/* Skill Tags */}

      {/* Skill-tag-container */}
      <div className="flex flex-col h-max w-full gap-10 items-center justify-center pb-[60px]">
        <Skills />
      </div>

      {/* Why You Need Us */}
      <div className="flex flex-col h-max w-full gap-10 items-center justify-center pb-[60px]">
        <WhyYouNeedUs />
      </div>

    </div>
  );
}
