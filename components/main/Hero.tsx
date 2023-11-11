'use client';

import React, { Children } from 'react'
import HeroContent from '../sub/HeroContent'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion';
import Navbar from './Navbar';
import Skills from './Skills';

const Hero = () => {
  return (
    <div className='relative h-full w-full flex flex-col'>
        <motion.div variants={slideInFromRight(2)}>
          <video 
        
        muted 
        loop 
        autoPlay 
        
        className='w-full h-full object-cover absolute top-[-450px] rotate-180 opacity-50'>
            <source src="/blackhole.webm" type='video/webm'/>
        </video>
        </motion.div>
        <HeroContent/>
        
      
    </div>
  )
}

export default Hero
