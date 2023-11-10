import Image from 'next/image'
import Hero from '@/components/main/Hero'
import Starbackground from '@/components/main/Starbackground'
import StarsCanvas from '@/components/main/Starbackground'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
       <Hero/>
       <StarsCanvas/>


      </div>
    
    </main>
  )
}
