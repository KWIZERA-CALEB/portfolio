import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div className="bg-slate-800 p-[10px] rounded-[6px] flex flex-row items-center space-x-[30px]">
        <div className='text-[25px] cursor-pointer'><FaLinkedin /></div>
        <div className='text-[25px] cursor-pointer'><FaGithub /></div>
        <div className='text-[25px] cursor-pointer'><BsTwitterX /></div>
        <div className='text-[25px] cursor-pointer'><FaInstagram /></div>
    </div>
  )
}

export default SocialMediaLinks
