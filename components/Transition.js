import React from 'react'

//framer motion
import { animate, motion } from 'framer-motion';

//variants
const transitionVariants = {
    initial: { 
        x: '100%',
        width: '100%'
    },
    animate: {
        x: '0%',
        width: '0%'
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%']
    },
}

function Transition() {
  return (
    <>
        <motion.div 
            className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#B11A3D]' 
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay:0.2, duration: 0.6, ease: 'easeInOut' }}
        >
        
        </motion.div>
        <motion.div 
            className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#b11a3db9]' 
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay:0.4, duration: 0.6, ease: 'easeInOut' }}
        >
        
        </motion.div>
        <motion.div 
            className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#b11a3d9a]' 
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay:0.6, duration: 0.6, ease: 'easeInOut' }}
        >
        
        </motion.div>
    
    </>
  )
}

export default Transition