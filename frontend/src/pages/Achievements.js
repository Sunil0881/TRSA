import React from 'react'
import Banner from '../components/Banner'
import AchievementsList from '../components/AchievementsList'

const Achievements = () => {
  return (
    <div>
       <Banner 
  mainText="One Achievements"
  subTexts="Exceptional milestones, transformative projects, and outstanding contributions! Proudly showcasing our remarkable successes and advancements!"
/>

<div className="flex flex-col items-center justify-center min-h-screen  p-6">
            <AchievementsList />

            </div>
       

     
    </div>
  )
}

export default Achievements