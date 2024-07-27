import React from 'react'
import Navigation from '../_components/atoms/Navigation'
import Footer from '../_components/atoms/Footer'
import AnimatedCursor from "react-animated-cursor"
import About from '../_components/molecules/About'

const AboutPage = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navigation />
      <About />
      <Footer />
      <AnimatedCursor />
    </div>
  )
}

export default AboutPage
