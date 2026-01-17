import React, { useState, useEffect } from 'react'
import style from "@/styles/buttons.module.css";
import Image from 'next/image'
import {motion, useScroll} from 'framer-motion'

// export const GlowButton = ({reference}) => {

//     const {scrollYProgress} = useScroll(
//         {
//             target: reference,
//             offset: ["center end", "center center"]
//         }
//     );

//   return (
//         // <motion.div className={` ${style.glowButton}`}
//         //     style={{
//         //         pathLength: scrollYProgress
//         //     }}
//         // >
//         //     <Image src='/shuttle.png' width={60} height={60}  />
//         // </motion.div>


//         // <motion.circle className={` ${style.glowButton}`} 
//         <motion.circle cx='75' cy='50' r='20' className={` stroke-[5px] fill-white`}
//             style={{
//                 pathLength: scrollYProgress
//             }}
//         >
//             <Image src='/shuttle.png' width={60} height={60}  />
//         </motion.circle>       
//   )
// }


// export const GlowCircle = ({ reference, cx = '75', cy = '50', r = '17' }) => {
//   const { scrollYProgress } = useScroll({
//     target: reference,
//     offset: ["center end", "center center"]
//   });

//   return (
//     <motion.svg
//       viewBox="0 0 150 100"
//       style={{
//         position: 'absolute',
//         filter: 'drop-shadow(0 0 10px #B11A3D)',
//       }}
//     >
//       <motion.circle
//         cx={cx}
//         cy={cy}
//         r={r}
//         fill="#B11A3D"
//         stroke="#B11A3D"
//         strokeWidth="2"
//         style={{
//           pathLength: scrollYProgress,
//         }}
//       />
//     </motion.svg>
//   )
// }



export const GlowCircle = ({ reference, cx = '50%', cy = '50%', r = '40%' }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });

  const [screenSize, setScreenSize] = useState('lg');
  const [size, setSize] = useState('100%');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        setScreenSize('sm');
        setSize('80px');
      } else if (width < 1024) {
        setScreenSize('md');
        setSize('120px');
      } else {
        setScreenSize('lg');
        setSize('150px');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        style={{
          filter: 'drop-shadow(0 0 15px #B11A3D)',
        }}
      >
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="#B11A3D"
          stroke="#B11A3D"
          strokeWidth="5"
          style={{
            pathLength: scrollYProgress,
          }}
        />
      </svg>
    </motion.div>
  )
}



