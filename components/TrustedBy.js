import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';


const clientsData = [
    {
       id: 1,
       name: 'Jet Hires',
       icon: <Image src={'/jethires.png'} width={120} height={70} alt= 'Jet Hires Logo' />
    },
    {
       id: 2,
       name: 'Dropeni',
       icon: <Image src={'/dropeni.png'}width={120} height={70} alt= 'Dropeni Logo'/>
    },
    {
       id: 3,
       name: 'Angela',
       icon: <Image src={'/angela.png'} width={120} height={70} alt= 'Angela Logo'/>
    },
    {
       id: 4,
       name: 'Telacore',
       icon: <Image src={'/telacore.png'} width={120} height={70} alt= 'Telacore Logo'/>
    },
    {
       id: 5,
       name: 'Greyscopes Urology',
       icon: <Image src={'/greyscopes.png'} width={120} height={70} alt= 'Greyscopes Urology Logo'/>
    },
    {
       id: 6,
       name: 'Dropeni',
       icon: <Image src={'/dropeni.png'}width={120} height={70} alt= 'Dropeni Logo' />
    },
    {
       id: 7,
       name: 'Angela',
       icon: <Image src={'/angela.png'} width={120} height={70} alt='Angela Logo' />
    }
];

function TrustedBy() {
  return (
    <div className='flex flex-row gap-[20px] w-full h-[100px] md:h-[150px] lg:h-[200px] items-center justify-center '>
        <Marquee pauseOnHover={true} gradient={false} speed={90}>
        {
            clientsData.map((client) => (
                <div key={client.id} 
                  className='border-1 
                  py-[10px] px-[30px] md:py-[20px] md:px-[50px] lg:py-[20px] lg:px-[50px]
                  rounded-[3em] 
                  opacity-[60%] 
                  mx-[10px] md:mx-[20px] lg:mx-[20px]'
               >
                   {client.icon}
                </div>
            ))
        }

        </Marquee>
        
    </div>
  )
}

export default TrustedBy