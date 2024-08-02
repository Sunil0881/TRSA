import React, { useEffect, useState } from 'react';
import AchievementsCard from '../components/AchievementCard';

const AchievementsList = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/achievements');
                const data = await response.json();
                console.log('Fetched Achievements:', data); // Log the data
                setAchievements(data);
            } catch (error) {
                console.error('Error fetching achievements:', error);
            }
        };

        fetchAchievements();
    }, []);

    return (
        <div className="container mx-auto p-4">
            {achievements.length > 0 ? achievements.map((achievement) => (
                <AchievementsCard
                    key={achievement._id}
                    image={achievement.image}
                    title={achievement.title}
                    description={achievement.description}
                    year={achievement.year}
                    level={achievement.level}
                />
            )) : <p>No achievements found</p>}
        </div>
    );
};

export default AchievementsList;
