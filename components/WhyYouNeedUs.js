import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup';
import { motion } from 'framer-motion'

function WhyYouNeedUs() {

    const needUsData = [
        {
            id: 1,
            title: 'Customer Satisfaction',
            icon: <Image src={'/happy.png'} width={60} height={60} />,
            description: 'Customer satisfaction is at the heart of our strategy. It fuels our reputation, drives repeat business, and shapes the services we deliver.',
            stat: '100',
            measure: '%',
            statLabel: 'satisfaction'
        },
        {
            id: 2,
            title: 'Industry Experience',
            icon: <Image src={'/experience.png'} width={60} height={60} />,
            description: 'Our rich industry experience equips us with the insight and proven strategies to craft tailored, high-impact digital solutions.',
            stat: '25',
            measure: '+',
            statLabel: 'years'
        },
        {
            id: 3,
            title: 'Boost ROI',
            icon: <Image src={'/promotion.png'} width={60} height={60} />,
            description: 'Businesses that invest in digital marketing experience a 5x return on ad spend (ROAS) on average (Google Economic Impact Report). By turning every project into a growth opportunity, we make boosting ROI central to our reputation as a leading digital solution agency.',
            stat: '5',
            measure: 'x',
            statLabel: 'returns'
        },
        {
            id: 4,
            title: 'Flexibility and Adaptability',
            icon: <Image src={'/provision.png'} width={60} height={60} />,
            description: 'Our flexibility and adaptability drive measurable impact—over 85% of our clients report faster project delivery when we pivot to meet their changing needs.',
            stat: '85',
            measure: '%',
            statLabel: 'clients'
        },
        {
            id: 5,
            title: 'Visibility',
            icon: <Image src={'/seo.png'} width={60} height={60} />,
            description: 'Most online experiences begin with a simple search. Companies investing in SEO see 14.6% conversion rates. We make sure that you stand tall above the crowd.',
            stat: '14.6',
            measure: '%',
            statLabel: 'conversion rate'
        },
        {
            id: 6,
            title: 'Mobile Optimization',
            icon: <Image src={'/mobilephone.png'} width={60} height={60} />,
            description: '70% of all web traffic comes from mobile devices (Statista). By prioritizing seamless mobile experiences, we position brands to capture audiences wherever they are, proving our value as a forward-thinking digital solution agency.',
            stat: '70',
            measure: '%',
            statLabel: 'web traffic'
        },
    ]


  return (
    <div className='bg-[#B11A3D] flex flex-col h-max w-full gap-10 items-center justify-center pb-[60px] pt-[60px]'>

        <div className="xl:w-[80%] flex flex-col items-center justify-center relative 
            gap-[20px]">

            {/* Title Wrapper */}
            <div className=' flex flex-col text-white
            font-thin
            xl:text-[65px] xl:w-[80%] 
            lg:text-[40px] lg:w-[50%] 
            md:text-[40px] md:w-[70%]
            text-[23px] w-[90%] 
            mb-[40px]
            pt-[20px]
            '>
                <div className="bg-[#ffffff] w-[50px] h-[5px] xl:w-[70px] xl:h-[5px]"></div>
                Why You Need Us ?
            </div>

            {/* Info Items */}

            {
                needUsData.map((item) => (
                        <motion.div 
                            key={item.id} 
                            className='flex flex-row xl:flex-row md:flex-col sm:flex-col justify-center items-center w-[80%] border-2 px-[50px] py-[40px] rounded-[3em]'
                            initial={{ y: 50 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.7, type: "spring",  bounce: 0.25}}
                            viewport={{once: true}}
                            >
                            <div className='flex flex-col gap-2.5'>
                                {item.icon}
                                <div className='text-[20px] font-semibold'>{item.title}</div>
                                <div className='w-[60%]'>
                                   {item.description}
                                </div>
                            </div>
                            <div className='flex flex-col gap-[-70px] w-[150px]'>
                                <div className='text-[80px] font-bold'><CountUp end={item.stat} enableScrollSpy={true} duration={2}/><span className='text-[35px]'>{item.measure}</span></div>
                                <div className='text-[20px] mt-[-25px]'>{item.statLabel}</div>
                            </div>
                        </motion.div>

                ))
            }
            


        </div>
        

    </div>
  )
}

export default WhyYouNeedUs