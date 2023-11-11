import React from 'react'
import {motion} from 'framer-motion'
import { AiOutlineCoffee } from 'react-icons/ai'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const Skilltext = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center gap-4'>
        <motion.div 
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9] '>
        <AiOutlineCoffee className='text-[#b49bff] mr-[10px] h-5 w-10'/>
        <h1 className='text-white text-[14px] mr-[10px] sourcecode '>TECHSTACK ARE YOUR MAGIC TOOLS</h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-white sourcecode text-[1.7rem] ml-3  uppercase mt-[40px] mb-[40px]'>
            Solving Current Problems With Modern Technologies
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[15px] text-center'
        >Never miss a tast,deadline or idea

        </motion.div>

      
    </div>
  )
}

export default Skilltext
