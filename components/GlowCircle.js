import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

export default function GlowCircle({ reference, cx = '50%', cy = '50%', r = '40%' }) {
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
          fill="white"
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
