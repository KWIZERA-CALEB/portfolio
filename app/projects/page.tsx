import React from 'react'
import Navigation from '../_components/atoms/Navigation'
import Footer from '../_components/atoms/Footer'
import AnimatedCursor from "react-animated-cursor"
import Projects from '../_components/molecules/Projects'

const ProjectsPage = () => {
  return (
    <div className="w-full h-[100vh]">
      <Navigation />
      <Projects />
      <Footer />
      <AnimatedCursor />
    </div>
  )
}

export default ProjectsPage
