import React from 'react'
import Banner from '../components/Banner'
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'
import AchievementsState from '../components/AchievementsState'

const State = () => {
  return (
    <div>
      <Navbar />
       <Banner 
        mainText="Our Achievements"
        subTexts="Exceptional milestones, transformative projects, and outstanding contributions! Proudly showcasing our remarkable successes and advancements!"
      />

      <div className=" min-h-screen  p-6">
             <AchievementsState/> 
          

      </div>
      <Footer />
       

     
    </div>
  )
}

export default State