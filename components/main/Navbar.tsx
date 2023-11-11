import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 items-center flex flex-row m-auto px-[10px] self-center left-[640px] z-[1]'>
    <div className='w-[500px] h-[55px] flex flex-row items-center justify-between md:mr-20'>
        <div className='flex flex-row items-center justify-between border border-[#7042f861] mr-[15px] px-[20px] py-[10px] rounded-full text-green-200 gap-[100px]'>
            <a href="#about-me" className='cursour-pointer sourcecode'>About</a>
            <a href="#skills" className='cursour-pointer sourcecode'>Skills</a>
            <a href="#projects" className='cursour-pointer sourcecode'>About</a>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar
