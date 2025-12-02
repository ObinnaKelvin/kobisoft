import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';


const clientsData = [
    {
       id: 1,
       name: 'Jet Hires',
       icon: <Image src={'/jethires.png'} width={150} height={70} />
    },
    {
       id: 2,
       name: 'Dropeni',
       icon: <Image src={'/dropeni.png'}width={150} height={70} />
    },
    {
       id: 3,
       name: 'Angela',
       icon: <Image src={'/angela.png'} width={150} height={70} />
    },
    {
       id: 4,
       name: 'Telacore',
       icon: <Image src={'/telacore.png'} width={150} height={70} />
    },
    {
       id: 5,
       name: 'Greyscopes Urology',
       icon: <Image src={'/greyscopes.png'} width={150} height={70} />
    },
    {
       id: 6,
       name: 'Dropeni',
       icon: <Image src={'/dropeni.png'}width={150} height={70} />
    },
    {
       id: 7,
       name: 'Angela',
       icon: <Image src={'/angela.png'} width={150} height={70} />
    }
];

function TrustedBy() {
  return (
    <div className='flex flex-row gap-[20px] w-full h-[200px] items-center justify-center'>
        <Marquee pauseOnHover={true} gradient={false} speed={50}>
        {
            clientsData.map((client) => (
                <div key={client.id} className='border-1 py-[20px] px-[50px] rounded-[3em] opacity-[60%] mx-[20px]'>
                   {client.icon}
                </div>
            ))
        }

        </Marquee>
        
    </div>
  )
}

export default TrustedBy