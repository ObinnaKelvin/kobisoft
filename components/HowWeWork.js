import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { GlowButton, GlowCircle } from './Buttons';

function HowWeWork() {

        const workStepData = [
            {
                id: 1,
                caption: 'Kickoff Meeting',
                icon: <Image src={'/line.png'} width={60} height={60} />,
                description: `Every great project begins here. We collaborate closely with you to understand your goals, challenges, and vision.It’s the spark that lights the journey, turning visions into an exciting digital adventure.`,
            },
            {
                id: 2,
                caption: 'Brainstorming',
                icon: <Image src={'/idea.png'} width={60} height={60} />,
                description: 'Here creativity meets strategy. After understanding your goals, we brainstorm, explore innovative concepts, and develop strategic ideas tailored to your brand.',
            },
            {
                id: 3,
                caption: 'Feedback',
                icon: <Image src={'/settings.png'} width={60} height={60} />,
                description: 'Here creativity meets strategy. After understanding your goals, we brainstorm, explore innovative concepts, and develop strategic ideas tailored to your brand.',
            },
            {
                id: 4,
                caption: 'Launch',
                icon: <Image src={'/shuttle.png'} width={60} height={60} />,
                description: `The moment we push the big red button and watch your digital solution take flight. It’s where months of ideas, tweaks, and teamwork blast off into the world, ready to wow audiences and deliver results.`,
            },
    ]

    const ref = useRef(null);
    const secondRef = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
        
  return (

    <div className='flex flex-row gap-[20px] w-full min-h-[100px] h-max items-center justify-center '>

        <div className="xl:w-[80%] w-full
        flex flex-col items-center justify-center relative 
            gap-[20px] "
            ref={ref}>

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
                <div className="bg-[#B11A3D] w-[40px] h-[5px] xl:w-[70px] xl:h-[5px]" ></div>
                How We Work ?
            </div>

            {/* Work Step Items */}

            {/* Vertical Scroll Line */}
            <motion.div 
            style={{
                scaleY: scrollYProgress
            }}
            className='hidden 
            xl:block lg:block
            xl:absolute lg:absolute 
            xl:right-[18%]
            w-[4px] 
            h-[70%] 
            bg-[#B11A3D] origin-top z-[1]'/>

            {
                workStepData.map((step, index) => (

                    <div key={step.id} 
                        className='flex flex-row gap-[20px] w-full xl:w-[80%] lg:w-[80%] 
                        px-[15px] xl:px-[0px] lg:px-[0px]
                        '>

                        <div className='flex flex-col relative
                        px-[30px] lg:px-[50px] xl:px-[50px]
                        py-[40px] lg:py-[40px] xl:py-[40px]
                        w-full xl:w-[80%] lg:w-[80%]
                        gap-[20px]
                        bg-[#2D2D30]
                        rounded-[3em]
                        '>
                            <div className='font-bold border-b border-[#FFFFFF50] py-[20px] text-[25px]'>{step.caption}</div>
                            <div className='font-thin'>
                                {step.description}
                            </div>
                            <div className='bg-[#1E1E1E] absolute w-[40px] h-[40px] 
                            right-5  xl:right-12  lg:right-12 
                            rounded-[50%] flex items-center justify-center border-r-[#ffffff] '>{step.id}</div>
                          

                        </div>
                        <div ref={secondRef} className='hidden xl:flex lg:flex flex-col 
                        w-[20%] 
                        justify-center 
                        items-center  z-1'>
                                <div className='bg-[#2D2D30] flex flex-col py-[30px] px-[30px] rounded-[50%] z-1'>
                                    {step.icon}
                                </div>
                                {/* <div className='bg-[#B11A3D] absolute py-[30px] px-[30px] rounded-[50%] border-[5px] border-[#B11A3D]'>
                                    {step.icon}
                                </div> */}
                                {/* <GlowButton reference={ref} /> */}
                                <GlowCircle reference={ref} />
                        </div>
                    </div>

                ))
            }


        </div>

    </div>
  )
}

export default HowWeWork