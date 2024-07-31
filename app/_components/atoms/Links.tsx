import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link'

const SocialMediaLinks = () => {
  return (
    <div className="bg-slate-800 p-[10px] w-full rounded-[6px] flex flex-row items-center space-x-[30px]">
        <div className='text-[25px] cursor-pointer'><Link href="https://www.linkedin.com/in/kwizera-caleb-391716292/"><FaLinkedin /></Link></div>
        <div className='text-[25px] cursor-pointer'><Link href="https://github.com/KWIZERA-CALEB"><FaGithub /></Link></div>
        <div className='text-[25px] cursor-pointer'><Link href="https://twitter.com/KwizeraCaleb"><BsTwitterX /></Link></div>
        <div className='text-[25px] cursor-pointer'><Link href="https://www.instagram.com/kwizera_30/"><FaInstagram /></Link></div>
    </div>
  )
}

export default SocialMediaLinks
