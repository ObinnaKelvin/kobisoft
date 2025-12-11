import React from 'react'
import Image from 'next/image'

function HowWeWork() {

        const workStepData = [
            {
                id: 1,
                caption: 'Kickoff Meeting',
                icon: <Image src={'/line.png'} width={60} height={60} />,
                description: `Every great project begins here. We collaborate closely with you to understand your goals, challenges, and vision. It’s the spark that lights the journey, turning visions into an exciting digital adventure.`,
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
                description: 'The moment we push the big red button and watch your digital solution take flight. It’s where months of ideas, tweaks, and teamwork blast off into the world, ready to wow audiences and deliver results.',
            }
        ]
  return (
    <div className='flex flex-row gap-[20px] w-full min-h-[100px] h-max items-center justify-center '>

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
                <div className="bg-[#B11A3D] w-[50px] h-[5px] xl:w-[70px] xl:h-[5px]"></div>
                How We Work ?
            </div>

            {/* Work Step Items */}

            {
                workStepData.map((step, index) => (

                    <div key={step.id} className='flex flex-row gap-[20px] w-[80%]'>
                        <div className='flex flex-col relative 
                        py-[40px] px-[50px]
                        w-[80%] xl:w-[80%]
                        gap-[20px]
                        bg-[#2D2D30]
                        rounded-[3em]
                        '>
                            <div className='font-bold border-b border-[#FFFFFF50] py-[20px] text-[25px]'>{step.caption}</div>
                            <div className='font-thin'>
                                {step.description}
                            </div>
                            <div className='bg-[#1E1E1E] absolute w-[40px] h-[40px] right-12 rounded-[50%] flex items-center justify-center border-r-[#ffffff] '>{step.id}</div>

                        </div>
                        <div className='flex flex-col w-[20%] justify-center items-center'>
                                <div className='bg-[#2D2D30] flex flex-col py-[30px] px-[30px] rounded-[50%]'>
                                    {step.icon}
                                </div>
                        </div>
                    </div>

                ))
            }


        </div>

    </div>
  )
}

export default HowWeWork