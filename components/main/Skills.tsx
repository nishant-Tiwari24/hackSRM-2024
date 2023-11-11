import { transform } from 'next/dist/build/swc'
import React from 'react'
import { Frontend_skill, Backend_skill , Full_stack ,Other_skill , Other1_skill} from '../constants'
import SkillDataProvider from '../sub/SkillDataProvider'
import Skilltext from '../sub/Skilltext'

const Skills = () => {
  return (
    <div>
      <section
      id='skills'
      className='flex flex-col gap-3 h-full relative overflow-hidden py-2 '
      style={{transform:'scale(0.9)'}}
      >
        <Skilltext/>
        <div className='flex flex-row justify-center flex-wrap mt-4 gap-5 items-center'>
          {Frontend_skill.map((image,index) => (
              <SkillDataProvider
              key={index}
              width={image.width}
              height={image.height}
              src={image.Image}
              index={index}
              />
          ))}
          </div>
          <div className='flex flex-row justify-center flex-wrap mt-4 gap-5 items-center'>
          {Backend_skill.map((image,index) => (
              <SkillDataProvider
              key={index}
              width={image.width}
              height={image.height}
              src={image.Image}
              index={index}
              />
          ))}
          </div>
           <div className='flex flex-row justify-center flex-wrap mt-4 gap-5 items-center'>
          {Full_stack.map((image,index) => (
              <SkillDataProvider
              key={index}
              width={image.width}
              height={image.height}
              src={image.Image}
              index={index}
              />
          ))}
          </div>
          <div className='flex flex-row justify-center flex-wrap mt-4 gap-5 items-center'>
          {Other_skill.map((image,index) => (
              <SkillDataProvider
              key={index}
              width={image.width}
              height={image.height}
              src={image.Image}
              index={index}
              />
          ))}
        </div>
        <div className='flex flex-row justify-center flex-wrap mt-4 gap-5 items-center'>
          {Other1_skill.map((image,index) => (
              <SkillDataProvider
              key={index}
              width={image.width}
              height={image.height}
              src={image.Image}
              index={index}
              />
          ))}
          <div className='h-full w-full absolute'>
        
        <div
        className='w-full h-full opacity-30 -z-30 flex items-center justify-center bg-cover'>
          <video
          loop
          autoPlay
          playsInline
          muted
          className='h-full w-full mb-[800px]'
          preload='false'
          src="/cards-video.webm"></video>

        </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
