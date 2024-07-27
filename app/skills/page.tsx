import React from 'react'
import Navigation from '../_components/atoms/Navigation'
import Footer from '../_components/atoms/Footer'
import AnimatedCursor from "react-animated-cursor"
import Skills from '../_components/molecules/Skills'

const SkillsPage = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navigation />
      <Skills />
      <Footer />
      <AnimatedCursor />
    </div>
  )
}

export default SkillsPage
