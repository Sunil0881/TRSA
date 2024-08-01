import React from 'react'
import Banner from '../components/Banner'
import AchievementsCard from '../components/AchievementCard'
import race from "../assets/race.png"
import gridimage from "../assets/gridimg.png"

const Achievements = () => {
  return (
    <div>
       <Banner 
  mainText="One Achievements"
  subTexts="Exceptional milestones, transformative projects, and outstanding contributions! Proudly showcasing our remarkable successes and advancements!"
/>

<div className="flex flex-col items-center justify-center min-h-screen  p-6">
            <AchievementsCard
                image={race}
                title="Achievement Title"
                description="This is a brief description of the achievement. It provides context and details about the accomplishment. brief description of the achievement. It provides context and details about the  brief description of the achievement. It provides context and details about the  It provides context and details about the It the  It provides context and details about the It the  "
                year="2024"
                level="Gold"
            />
            <AchievementsCard
                image={gridimage}
                title="Achievement Title"
                description="Thovides context and details about  provides context and details about the It ption of the achievement. It provides context and details about the accomplishmentption of the achievement. It provides context and details about the accomplishmentption of the achievement. It provides context and details about the accomplishment ption of the achievement. It provides context and details about the accomplishmentption of the achievement. It provides context and details about the    "
                year="2024"
                level="Gold"
            />

            </div>
       

     
    </div>
  )
}

export default Achievements