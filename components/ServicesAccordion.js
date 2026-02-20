import React from 'react'
import { motion } from "framer-motion";

// next image
import Image from "next/image";

//icons
import { HiOutlinePlus } from "react-icons/hi";


const servicesData = [
    {
       id: 1,
       title: 'Digital Marketing',
       icon: <Image src={'/aim.png'} width={35} height={35} />,
       description: 'We don’t just do digital marketing, we champion it. From SEO to social, content to conversions, our expertise drives your brand forward on every front.' ,
       tags: ['SEO', 'Market Trends', 'Facebook Ads', 'Google Ads', 'Blog Marketing', 'Email Marketing', 'Content Strategy']
    },
    {
       id: 2,
       title: 'Web & App Development',
       icon: <Image src={'/developer.png'} width={35} height={35} />,
       description: 'From stunning websites to powerful mobile apps, we handle it all—design, development, and deployment. Your digital vision, fully built.' ,
       tags: ['Wireframe', 'Research', 'UX/UI Design', 'Corporate Website', 'E-commerce Platform', 'Mobile App Development', 'Cross-Platform Apps', 'Maintenance & Support', 'Performance Optimization']
    },
    {
       id: 3,
       title: 'Branding & Creative Design',
       icon: <Image src={'/creativity.png'} width={35} height={35} />,
       description: 'Your brand isn’t just a logo—it’s an experience. We craft bold identities and creative designs that make your business unforgettable.' ,
       tags: ['Logo Design', 'Rebranding', 'Visual Identity', 'Corporate Branding', 'E-commerce Platform', 'User Experience Design', 'Smart Branding', 'Design For Business', 'Packaging Design']
    },
    {
       id: 4,
       title: 'Media Production',
       icon: <Image src={'/videoplayer.png'} width={35} height={35} />,
       description: 'Content that connects. Media that moves. We create stories that bring your brand to life across every platform.' ,
       tags: ['Studio Photography', 'Voice Over', 'Videography', 'Brand Storytelling', 'Commercial Photography', 'Promotional Videos', 'Corporate Video']
    },
    {
       id: 5,
       title: 'Data & Analytics',
       icon: <Image src={'/barchart.png'} width={35} height={35} />,
       description: 'We turn data into decisions. From analytics to insights, we help you understand your numbers and drive smarter growth.' ,
       tags: ['Consumer Insights', 'Market Intelligence', 'Data Visualization', 'Growth Analytics', 'Business Analytics', 'Data Solutions', 'Business Insights']
    },
    {
       id: 6,
       title: 'Consulting & Strategy',
       icon: <Image src={'/chess.png'} width={35} height={35} />,
       description: 'Great businesses don’t just need ideas—they need direction. Our consulting and strategy services help you plan, pivot, and scale with confidence.' ,
       tags: ['Business Strategy', 'Digital Transformation', 'Market Research', 'Growth Planning', 'Operational Efficiency', 'Strategic Consulting', 'Business Development' ]   
    }
];

function AccordionItem({id, title, icon, description, tags}) {
  const [isOpen, setIsOpen] = React.useState(true); 
  return (
    <motion.div 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.3, ease:"easeInOut"}}}
        viewport={{once: true}} 
        key={id} className={` flex flex-col gap-[25px] 
        bg-[#2D2D30] rounded-[3em] px-[15px] lg:px-[40px] xl:px-[40px] pb-[40px] 
        xl:w-[80%]  w-full
        transition-all duration-300 ${isOpen ? 'h-max mb-6' : 'h-[150px] lg:h-[80px] xl:h-[80px] mb-2'}`}>
        <div className='flex justify-between items-start cursor-pointer py-[20px] lg:pt-[20px] xl:pt-[20px] ' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex flex-col lg:flex-row xl:flex-row 
            items-left lg:items-center xl:items-center
            gap-2 justify-center lg:justify-center xl:justify-center
            font-bold 
            xl:text-[35px]
            lg:text-[35px]
            md:text-[25px]
            text-[15px]
            relative '>
                <div>{icon}</div>
                <div>{title}</div>
                {/* pane */}
                <div className="bg-[#B11A3D] w-[30px] h-[3px] xl:w-[30px] xl:h-[3px] 
                absolute left-0 lg:left-11 xl:left-11
                -bottom-1 lg:bottom-0 xl:bottom-0"></div>

            </div>
            <div className={`transition-all duration-300 ${isOpen ? 'rotate-45' : ''} text-[40px] text-[#B11A3D]`}><HiOutlinePlus /></div>
        </div>

        <div className={`pb-5 
            w-full xl:w-[400px] lg:w-[400px] 
            overflow-hidden 
            xl:text-[17px]
            lg:text-[17px]
            md:text-[15px]
            text-[13px]
            transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0'}`}>
            <div>{description}</div>
        </div>

        {/* Tag Holder */}
        <div className=' flex flex-wrap gap-2 
        w-full xl:w-[400px] lg:w-[400px]
        text-sm  overflow-hidden'>
            {tags.map((tag, idx) => (
                <div key={`${tag}-${idx}`} className='bg-[#D9D9D950] rounded-[10px] w-max px-[10px] py-[4px]'>{tag}</div>
            ))}
        </div>
    </motion.div>)
}

function ServicesAccordion() {


  return (
    <>
        <div className='flex flex-col gap-3 items-center justify-center w-full xl:h-max py-[30px] xl:py-[50px] px-[20px] '>
            {servicesData.map((service) => (
                <AccordionItem 
                    key={service.id}
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                    tags={service.tags}
                />
            ))}    
        </div>

    </>
  )
}

export default ServicesAccordion