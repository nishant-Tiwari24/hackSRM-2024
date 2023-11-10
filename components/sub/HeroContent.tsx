import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { AiOutlineCoffee } from "react-icons/ai";

const HeroContent = () => {
  return (
    <motion.div initial='hidden' animate='visible' className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
      <div className='h-full w-full flex flex-col gap-5 m-auto text-start'>
        <motion.div 
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'>
        <AiOutlineCoffee className='text-[#b49bff] mr-[10px] h-5 w-10'/>
        <h1 className='Welcome-text text-[13px] mr-[10px] sourcecode'>A 24 Hour Hackathon</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-3 mt-6 text-6xl text-bold-900 text-white max-w-[600px] w-auto h-auto sourcecodebold'
        >Why you need to
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-#7944E6-500 to-green-500 bg-gradient-to-r from-fuchsia-500 to-cyan-500'>participate in</span>
        in HackSRM?
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-2.5lg text-gray-400 my-5 max-w-[600px] sourcecode'>
            Hack SRM is a 24-hour hackathon where you can build your dream project with your friends and win exciting prizes. It is a great opportunity to learn new skills, meet new people, and have fun.
        </motion.p>
        <br />
        {/* <motion.div className='flex items-center justify-between left-[200px]'> */}
        <motion.a
        variants={slideInFromLeft(1)}
        className='text-lg text-gray-400 my-5-w-[500px] sourcecode'>
            {/* Register Now */}
        </motion.a>

        <motion.button
        variants={slideInFromTop}
        className='button-primary py-[8px] px-[4px] border border-[#002df58b] w-60'>
        {/* <AiOutlineCoffee className='text-white mr-[10px] h- w-10'/> */}
        <h1 className='Welcome-text text-[15px] mr-[10px] sourcecode'>Join Discord</h1>
        </motion.button>
        {/* </motion.div> */}
      </div>
      <div>
        <motion.div 
        variants={slideInFromRight(1.2)}
        className='w-[800px] h-full object-cover'>
            <img src="10001 (2).png" alt="" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroContent
