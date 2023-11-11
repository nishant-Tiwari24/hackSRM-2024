import React from 'react'
import { motion } from "framer-motion";

const Prize = () => {
  return (
        <section 
        id='prize'>
        <div className='min-h-screen w-full  px-0 py-16 md:px-10 mt-[200px]'>
          <motion.div
        className='cursive text-[20px] text-gray-200 mb-40 mt-[15px] text-center'
        >Make amazing projects to win
        </motion.div>

        <motion.div 
        className="text-center text-4xl sm:text-5xl sourcecode bg-clip-text text-transparent Welcome-text ">
         Prizes worth more than 40 lakh
        </motion.div>
        </div>
        </section>
  )
}

export default Prize
