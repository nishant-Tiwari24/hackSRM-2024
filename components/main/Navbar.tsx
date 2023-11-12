import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 items-center flex flex-row flex-wrap m-auto px-2 self-center left-[450px] z-[40]'>
    <div className='w-[500px] h-[55px] flex flex-row flex-wrap items-center justify-between md:mr-20'>
        <div className='flex flex-row items-center justify-between border border-[#7042f861] mr-[15px] px-[20px] py-[10px] rounded-full text-green-200 gap-[100px]'>
            <a href="#about-me" className='cursour-pointer sourcecode'>About</a>
            <a href="#skills" className='cursour-pointer sourcecode'>Skills</a>
            <a href="#theme" className='cursour-pointer sourcecode'>Themes</a>
            <a href="#questions" className='cursour-pointer sourcecode'>Questions</a>
            <a href="#prize" className='cursour-pointer sourcecode'>Prize</a>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar
