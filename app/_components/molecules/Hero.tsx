"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import SocialMediaLinks from '../atoms/Links'

const Hero = () => {

    const handleType = (count: number) => {
        const
    }
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

  return (
    <div className='w-full flex flex-col pt-[60px] pb-[60px] justify-center items-center'>
      <div className="mb-[25px]">
        <img src="/images/yoo.jpg" className='w-[300px] h-[300px] rounded-[50%] object-cover object-center outline outline-offset-8 outline-sky-500 cursor-pointer image' alt="Image of Owner" />
      </div>
      <div className="mb-[25px]">
        <h3 className="custom font-bold text-slate-300 select-none text-center text-[30px]">Hi</h3>
        <h3 className="custom font-bold text-slate-300 select-none text-center text-[30px]">Am</h3>
        <h3 className="custom font-bold text-slate-300 select-none text-center text-[30px]">Caleb Kwizera</h3>
        <h3 className="custom font-bold select-none text-center text-[32px] bg-gradient bg-clip-text text-transparent">
            <Typewriter words={['A Full Stack Developer', 'UI Designer', 'A 3D Artist']} loop={Infinity} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} onLoopDone={handleDone} onType={handleType} />
        </h3>
      </div>
      <div>
            <SocialMediaLinks />
      </div>
    </div>
  )
}

export default Hero

