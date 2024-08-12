import React from 'react'
import Banner from '../components/Banner'
import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div>
      <Navbar />
        <Banner 
        mainText="Our About"
        subTexts="Exceptional milestones, transformative projects, and outstanding contributions! Proudly showcasing our remarkable successes and advancements!"
      />
    </div>
  )
}

export default About