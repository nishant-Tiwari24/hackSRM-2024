'use client';

import React from 'react'
import HeroContent from '../sub/HeroContent'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion';

const Hero = () => {
  return (
    <div className='relative h-full w-full flex flex-col'>
        <motion.div variants={slideInFromRight(2)}>
          <video 
        
        muted 
        loop 
        autoPlay 
        
        className='w-full h-full object-cover absolute left-[370px] rotate-90 z-[1]'>
            <source src="/encryption.webm" type='video/webm'/>
        </video>
        </motion.div>
      
        <HeroContent/>
      
    </div>
  )
}

export default Hero
