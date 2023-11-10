'use client';

import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative h-full w-full flex flex-col'>
        <video 
        muted 
        loop 
        autoPlay 
        className='w-full h-full object-cover absolute rotate-180 top-[-420px] left-0 z-[1]'>
            <source src="/blackhole.webm" type='video/webm'/>
        </video>
        <HeroContent/>
      
    </div>
  )
}

export default Hero
