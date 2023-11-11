'use client';

import React, { Children } from 'react'
import HeroContent from '../sub/HeroContent'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion';
import { VerticalLine } from '../sub/VerticalLine';

const Hero = () => {
  return (
    <section
    id='theme'>
    <div className='relative h-full w-full flex flex-col'>
        <motion.div variants={slideInFromRight(2)}>
          <video 
        
        muted 
        loop 
        autoPlay 
        
        className='w-[120%] h-full object-contain absolute top-[200px] rotate-180'>
            <source src="/encryption.webm" type='video/webm'/>
        </video>
        </motion.div>
        <br />
        <br />
        <br />
        <VerticalLine/>
        
      
    </div>
    </section>
  )
}

export default Hero