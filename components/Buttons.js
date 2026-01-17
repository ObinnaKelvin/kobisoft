import React from 'react'
import style from "@/styles/buttons.module.css";
import Image from 'next/image'
import {motion, useScroll} from 'framer-motion'


export const GlowCircle = ({ reference, cx = '75', cy = '50', r = '17' }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });

  return (
    <motion.svg
      viewBox="0 0 150 100"
      style={{
        position: 'absolute',
        filter: 'drop-shadow(0 0 10px #B11A3D)',
      }}
    >
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill="#B11A3D"
        stroke="#B11A3D"
        strokeWidth="2"
        style={{
          pathLength: scrollYProgress,
        }}
      />
    </motion.svg>
  )
}


