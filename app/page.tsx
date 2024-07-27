import React from 'react'
import Navigation from './_components/atoms/Navigation'
import Hero from './_components/molecules/Hero'
import Footer from './_components/atoms/Footer'
import AnimatedCursor from "react-animated-cursor"


const HomePage = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navigation />
      <Hero />
      <Footer />
      <AnimatedCursor />
    </div>
  )
}

export default HomePage
