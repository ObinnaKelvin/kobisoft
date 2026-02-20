import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';

const tagsData = [
    {
       id: 1,
       name: 'Video & Motion Design',
       icon: <Image src={'/video.png'} width={30} height={70} />
    },
    {
       id: 2,
       name: 'Branding & Identity',
       icon: <Image src={'/branding.png'} width={30} height={70} />
    },
    {
       id: 3,
       name: 'Logo Design',
       icon: <Image src={'/logod.png'} width={30} height={70} />
    },
    {
       id: 4,
       name: 'UI/UX Design',
       icon: <Image src={'/ux.png'} width={30} height={70} />
    },
    {
       id: 5,
       name: 'Web Development',
       icon: <Image src={'/code.png'} width={30} height={70} />
    },
    {
       id: 6,
       name: 'Mobile Apps (iOS / Android)',
       icon: <Image src={'/mobile.png'} width={30} height={70} />
    },
    {
       id: 7,
       name: 'Cross‑Platform Apps',
       icon: <Image src={'/cross.png'} width={30} height={70} />
    },
    {
       id: 8,
       name: 'SEO (Technical & On‑Page)',
       icon: <Image src={'/search.png'} width={30} height={70} />
    },
    {
       id: 9,
       name: 'Social Media',
       icon: <Image src={'/broadcast.png'} width={30} height={70} />
    },
    {
       id: 10,
       name: 'Email Marketing & Automation',
       icon: <Image src={'/emailmark.png'} width={30} height={70} />
    },
    {
       id: 11,
       name: 'Performance Optimization',
       icon: <Image src={'/thunder.png'} width={30} height={70} />
    },
    {
       id: 12,
       name: 'DevOps & CI/CD',
       icon: <Image src={'/devops.png'} width={30} height={70} />
    },
    {
       id: 13,
       name: 'APIs & Integrations',
       icon: <Image src={'/cloud.png'} width={30} height={70} />
    },
    {
       id: 14,
       name: 'Data Visualization and Analytics',
       icon: <Image src={'/analytics.png'} width={30} height={70} />
    },
    {
       id: 15,
       name: 'Chatbots',
       icon: <Image src={'/bot.png'} width={30} height={70} />
    }
];

function Skills() {
  return (
    <div className='flex flex-col gap-[0px] w-full h-max'>
        <div className='flex flex-row gap-[20px] w-full h-[130px] items-center justify-center'>
            <Marquee pauseOnHover={true} gradient={false} speed={70} direction='right'>
                {
                    tagsData.map((tag) => (
                        <div key={tag.id} className='flex flex-row items-center gap-[10px] border-1 
                        py-[10px] px-[30px] md:py-[20px] md:px-[50px] lg:py-[20px] lg:px-[50px] 
                        rounded-[3em] opacity-[60%] mx-[20px]'>
                        {tag.icon} {tag.name}
                        </div>
                    ))
                }
            </Marquee>
        </div>
        <div className='flex flex-row gap-[20px] w-full h-[130px] items-center justify-center'>
            <Marquee pauseOnHover={true} gradient={false} speed={70} direction='left'>
                {
                    tagsData.map((tag) => (
                        <div key={tag.id} className='flex flex-row items-center gap-[10px] border-1 
                        py-[10px] px-[30px] md:py-[20px] md:px-[50px] lg:py-[20px] lg:px-[50px] 
                        rounded-[3em] opacity-[60%] mx-[20px]'>
                        {tag.icon} {tag.name}
                        </div>
                    ))
                }
            </Marquee>
        </div>

    </div>
  )
}

export default Skills