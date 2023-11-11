'use client';

import Image from 'next/image'
import Hero from '@/components/main/Hero'
import Starbackground from '@/components/main/Starbackground'
import StarsCanvas from '@/components/main/Starbackground'
import Navbar from '@/components/main/Navbar'
import Skills from '@/components/main/Skills'
import {VerticalLine} from '@/components/sub/VerticalLine'
import Theme from '@/components/main/Theme'
import Prize from '@/components/sub/Prize';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[1000px] gap-20'>
       <Navbar/>
       <Hero/>
       <StarsCanvas/>
       <Skills/>
       <Theme/>
       <Prize/>
       
      </div>
    
    </main>
  )
}
