import React from 'react'// next image
import Image from "next/image";

//icons
// import { PiCaretRightBold } from "react-icons/pi";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const faqData = [
    {
       id: 1,
       question: 'How long does a typical projects take?',
       answer: `Great things take time—but not too much! Depending on the scope, our projects typically run from a few weeks for quick-turn solutions to a few months for larger builds. We balance speed and quality so every launch feels spectacular without the wait.` ,
    },
    {
       id: 2,
       question: 'Who do you typically work with?',
       answer: 'We team up with dreamers, doers, and game-changers. From bold startups ready to make their mark to established brands looking for a fresh digital spark. If you’ve got big ideas and bigger ambitions, we’re the crew that turns your vision into standout digital experiences.' ,
    },
    {
       id: 3,
       question: 'What digital marketing services do you provide?',
       answer: 'We handle SEO, craft scroll-stopping social content, ads that actually convert, email marketing, and analytics. If it lives online, we know how to make it shine.' ,
    },
    {
       id: 4,
       question: 'How do you price your services?',
       answer: 'Pricing depends on the scope and complexity of the project.  We typically ask for a deposit to start, with the remainder due upon project completion. All details will be clearly communicated so there are no surprises!.' ,
    },
    {
       id: 5,
       question: 'Do you provide ongoing support after a project is completed?',
       answer: 'Yes—we offer ongoing maintenance, updates, and support to ensure your digital solutions stay secure, functional, and effective.' ,
    }
];


function AccordionItem({id, question, answer}) {
  const [isOpen, setIsOpen] = React.useState(false); 
  return (
    <div key={id} className={` flex flex-col gap-[25px] border-2 rounded-[2em] px-[40px] pb-[40px] xl:w-[80%] transition-all duration-300 ${isOpen ? 'h-max mb-6' : 'h-[80px] mb-2'}`}>
        <div className='flex justify-between items-start cursor-pointer pt-[20px]' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center gap-2 justify-center font-bold relative'>
                {/* <div>{icon}</div> */}
                <div>{question}</div>
                {/* pane */}
                {/* <div className="bg-[#B11A3D] w-[30px] h-[3px] xl:w-[30px] xl:h-[3px] absolute left-11 bottom-0"></div> */}

            </div>
            <div className={`transition-all duration-300 ${isOpen ? 'rotate-45' : ''} text-[30px] text-[#B11A3D]`}><HiOutlinePlus /></div>
        </div>

        <div className={`pb-5 w-[80%] overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0'}`}>
            <div>{answer}</div>
        </div>

    </div>)
}



function Faq() {
  return (
    <>
        <div className='flex flex-col gap-3 items-center justify-center w-[80%] mb-[80px]'>
            

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
                FAQs
            </div>

            {/* Work Step Items */}


            {faqData.map((enquiry) => (
                <AccordionItem 
                    key={enquiry.id}
                    question={enquiry.question}
                    answer={enquiry.answer}
                />
            ))}  

            {/* View More   */}
            <div className='text-[#FFFFFF] flex gap-2 items-center justify-center cursor-pointer border-2 border-[#B11A3D] px-[40px] py-[10px] rounded-[12px] mt-[10px]'>
                <div>View More</div> <div className='text-[45px]'><HiOutlineArrowLongRight /></div> 
            </div>
        </div>
    </>
  )
}

export default Faq