import Image from 'next/image'
import Hero from '@/components/main/Hero'
import Starbackground from '@/components/main/Starbackground'
import StarsCanvas from '@/components/main/Starbackground'
import Navbar from '@/components/main/Navbar'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[1000px] gap-20'>
       <Hero/>
       <StarsCanvas/>
       <Navbar/>
      </div>
    
    </main>
  )
}
