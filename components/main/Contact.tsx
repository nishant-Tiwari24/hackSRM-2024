
import React, { Children } from 'react'
import HeroContent from '../sub/HeroContent'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion';
import Navbar from './Navbar';
import Skills from './Skills';
import Footer from '../sub/Footer';

const Contact = () => {
  return (
    <section
    id='about-me'>
    <div className='relative h-full w-full'>
        <motion.div variants={slideInFromRight(2)}>
          <video 
        muted 
        loop 
        autoPlay 
        
        className='w-full h-full object-cover absolute opacity-40 -z-40'>
            <source src="/blackhole.webm" type='video/webm'/>
        </video>
        </motion.div>
        <Footer/>
    </div>
    </section>
  )
}

export default Contact