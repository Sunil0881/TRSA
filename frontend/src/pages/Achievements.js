import React from 'react'
import Banner from '../components/Banner'
import AchievementsList from '../components/AchievementsList'
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'

const Achievements = () => {
  return (
    <div>
      <Navbar />
       <Banner 
        mainText="Our Achievements"
        subTexts="Exceptional milestones, transformative projects, and outstanding contributions! Proudly showcasing our remarkable successes and advancements!"
      />

      <div className=" min-h-screen  p-6">
            <AchievementsList />

      </div>
      <Footer />
       

     
    </div>
  )
}

export default Achievements