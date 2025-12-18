// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// google fonts
import { Geist, Geist_Mono, Montserrat } from "next/font/google";



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


//  data
// const aboutData = [
//   {
//     title: 'skills',
//     info: [
//       {
//         title: 'Web Development',
//         icons: [
//           <FaHtml5 />,
//           <FaCss3 />,
//           <FaJs />,
//           <FaReact />,
//           <SiNextdotjs />,
//           <SiFramer />,
//           <FaWordpress />,
//         ],
//       },
//       {
//         title: 'UI/UX Design',
//         icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
//       },
//     ],
//   },
//   {
//     title: 'awards',
//     info: [
//       {
//         title: 'Webby Awards - Honoree',
//         stage: '2011 - 2012',
//       },
//       {
//         title: 'Adobe Design Achievement Awards - Finalist',
//         stage: '2009 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'experience',
//     info: [
//       {
//         title: 'UX/UI Designer - XYZ Company',
//         stage: '2012 - 2023',
//       },
//       {
//         title: 'Web Developer - ABC Agency',
//         stage: '2010 - 2012',
//       },
//       {
//         title: 'Intern - DEF Corporation',
//         stage: '2008 - 2010',
//       },
//     ],
//   },
//   {
//     title: 'credentials',
//     info: [
//       {
//         title: 'Web Development - ABC University, LA, CA',
//         stage: '2011',
//       },
//       {
//         title: 'Computer Science Diploma - AV Technical Institute',
//         stage: '2009',
//       },
//       {
//         title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
//         stage: '2006',
//       },
//     ],
//   },
// ];

const About = () => {
  return (
          <div className="flex flex-col h-max relative items-center justify-center top-0">

                    {/* <div>We’re a digital solutions agency built for brands that want more than just an online presence—they want impact. 🚀

                          At [Your Agency Name], we blend creativity, strategy, and technology to turn ideas into powerful digital experiences. From eye-catching branding and scroll-stopping content to high-performing websites, apps, and marketing campaigns, we create solutions that don’t just look good—they work.

                          We believe great digital products are born from collaboration, adaptability, and a deep understanding of business goals. That’s why we partner closely with our clients, stay flexible in a fast-moving digital world, and focus on results that drive real growth.
                    </div> */}


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
                                About Us
                            </div>
                            {/* <div className='flex gap-3 w-max bg-[#2D2D30] py-[15px] px-[30px] rounded-[3em]'>
                                <Image className='cursor-pointer' src="/time.png" alt="time" width={30} height={30} />
                                <div className='text-[#ffffff90]'>Last Updated on September 24, 2025</div>
                            </div> */}
                        </motion.div>

                        {/* Privacy terms Content */}
                        <div className='w-[80%] z-3 h-max gap-[20px] mt-[-70px]'>
                                <div className='flex flex-col gap-3 my-[30px] bg-[#2D2D30] h-max rounded-[3em] px-[50px] py-[50px]'>
                                    {/* <div className='text-white font-semibold text-[20px]'>{refund.title}</div> */}
                                    <div className='text-white font-light text-[16px]'>
                                        We’re a digital solutions agency built for brands that want more than just an online presence but want impact.
                                        At Kobisoft Digitals, we believe great digital products are born from collaboration, adaptability, and a deep understanding of business goals. That’s why we partner closely with our clients, stay flexible in a fast-moving digital world, and focus on results that drive real growth.               
                                    </div>
                                </div>
                        </div>

                        {/* Misson Statement */}

                        <div className='flex flex-row w-[80%] z-3 gap-[30px] mt-[-20px] h-[310px] relative mb-[100px]'>
                              <div className="flex flex-col flex-1 bg-[#B11A3D] px-[30px] py-[50px] gap-[18px]">
                                <div className="">
                                  <Image src={'/binoculars.png'} width={40} height={80} />
                                </div>
                                <div className="flex flex-col gap-[7px]">
                                  <div className='text-white font-semibold text-[15px]'>Future Vision.</div>
                                  {/* pane */}
                                  <div className="bg-[#ffffff] w-[20px] h-[5px] xl:w-[35px] xl:h-[5px]"></div>
                                </div>
                                <div className='text-white font-light text-[14px]'>
                                  Your vision is the destination, we build the digital roadmap. From strategy to execution, we help businesses embrace innovation, optimize processes, and 
                                  scale for the future. Let’s turn your big picture into a reality.
                                </div>

                              </div>
                              <div className="flex flex-col flex-1 bg-[#2D2D30] px-[30px] py-[50px] gap-[18px]">
                                <div className="">
                                  <Image src={'/shuttle.png'} width={40} height={80} />
                                </div>
                                <div className="flex flex-col gap-[7px]">
                                  <div className='text-white font-semibold text-[15px]'>The Big Ideas.</div>
                                  {/* pane */}
                                  <div className="bg-[#B11A3D] w-[20px] h-[5px] xl:w-[35px] xl:h-[5px]"></div>
                                </div>
                                <div className='text-white font-light text-[14px]'>
                                  From concept to creation, we turn your ideas into sleek, user-focused product 
                                  designs that your customers will love. Innovation starts here.
                                </div>
                              </div>
                              <div className="flex flex-col flex-1 bg-[#2D2D30] px-[30px] py-[50px] gap-[18px]">
                                <div className="">
                                  <Image src={'/eco.png'} width={40} height={80} />
                                </div>
                                <div className="flex flex-col gap-[7px]">
                                  <div className='text-white font-semibold text-[15px]'>Innovative Solutions.</div>
                                  {/* pane */}
                                  <div className="bg-[#B11A3D] w-[20px] h-[5px] xl:w-[35px] xl:h-[5px]"></div>
                                </div>
                                <div className='text-white font-light text-[14px]'>
                                  Innovation isn’t just a buzzword—it’s a blueprint. We craft cutting-edge 
                                  digital solutions that help your business stay ahead of the curve.
                                </div>
                              </div>
                              <div className='absolute w-[371px] h-[66px] bg-[#B11A3D] z-[-1] bottom-[-28px] right-[-2%] translate-x-[-0%] flex items-center justify-center'>

                              </div>
                        </div>


                    </div>
              
          </div>
  );
};

export default About;
