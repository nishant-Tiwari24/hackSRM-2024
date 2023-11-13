import React from 'react'
import {
    IconMail,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandLinkedin,
  } from "@tabler/icons-react";


const Footer = () => {
  return (
    <section id='contact'>
    <div className='w-full h-full flex flex-col gap-10'>
      <div className="text-center text-4xl sm:text-5xl sourcecode bg-clip-text text-transparent Welcome-text ">
        Contact Us
      </div>
      <div className='flex flex-row gap-2 items-center justify-center my-3'>
      <IconMail
            className="h-15 w-15  rounded-[30px] bg-gray-600 p-4 text-white sm:h-24 sm:w-24"
            stroke={1.5}
          />
          <div className='text-center text-2xl sm:text-3xl sourcecode bg-clip-text text-transparent text-white cursor-pointer'>
        <a href="mailto:help@hacksrm.tech" >help@hacksrm.tech</a>
        </div>
      </div>
      <div className="flex flex-col font-roboto-mono items-center justify-center space-y-6 pt-8 text-white">
        <h5 className="text-center text-3xl sourcecode Welcome-text text-gray-200">
          In Collaboration With
        </h5>
        <img
          src="https://cdn.discordapp.com/attachments/1024859933524627457/1105512128867213382/ntllogo.png"
          alt="NextTech Logo"
          className="z-10 h-24 rounded-md p-4"
        />
      </div>
    </div>
    </section>
  )
}

export default Footer
