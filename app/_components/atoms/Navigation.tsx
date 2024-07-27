"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const currentPath = usePathname()
  console.log(currentPath)

  const links = [
    {label: 'Home', href:'/'},
    {label: 'About', href:'/about'},
    {label: 'Skills', href:'/skills'},
    {label: 'Projects', href:'/projects'},
  ]

  const renderedLinks = links.map((link, index)=> (
      <div key={index} className={link.href === currentPath ? `custom font-bold cursor-pointer text-sky-500` : `custom font-bold cursor-pointer transition delay-150 ease-in-out hover:text-sky-800`} ><Link href={link.href}>{link.label}</Link></div>
  ))
  
  return (
    <div className="w-full h-[90px] flex flex-row space-x-[60px] items-center justify-center">
      {renderedLinks}
    </div>
  )
}

export default Navigation
