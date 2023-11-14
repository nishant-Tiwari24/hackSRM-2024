'use client';

import Image from 'next/image'
import Hero from '@/components/main/Hero'
import Starbackground from '@/components/main/Starbackground'
import StarsCanvas from '@/components/main/Starbackground'
import Navbar from '@/components/main/Navbar'
import Skills from '@/components/main/Skills'
import {VerticalLine} from '@/components/sub/VerticalLine'
import Theme from '@/components/main/Theme'
import Prize from '@/components/main/Prize';
import { Questions } from '@/components/main/Questions';
import Footer from '@/components/sub/Footer';
import Loading from '@/app/Loading';
import { Preload } from '@react-three/drei';
import { Suspense } from 'react';
import Contact  from '@/components/main/Contact'

export default function Home() {
  return (
    
    <main className='h-full w-full'>
      <div className='flex flex-col h-[1000px] gap-20'>
      <Suspense fallback={<Loading/>}>
        <Navbar/>
        <Hero/>
        <StarsCanvas/>
        <Theme/>
        <Skills/>
        <Prize/>
        <Questions/>
        <Contact/>
       </Suspense>
       
      </div>
    
    </main>
  )
}
