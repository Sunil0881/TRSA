import React, { useState, useEffect } from 'react';
import AchievementsCard from '../components/AchievementCard';
import Updates from './Updates';
import "../Styles/Scroll.css";
import { BACKEND_URL } from '../constants';
const AchievementsState = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/achievements`);
                
                if (!response.ok) {
                    const errorDetails = await response.text();
                    throw new Error(`HTTP error! Status: ${response.status}. Details: ${errorDetails}`);
                }
                
                const data = await response.json();
                
                if (Array.isArray(data)) {
                    // Filter only state level achievements
                    const stateAchievements = data.filter(achievement => 
                        achievement.level.toLowerCase() === 'state'
                    );
                    setAchievements(stateAchievements);
                } else {
                    throw new Error('Unexpected data format');
                }
            } catch (error) {
                console.error('Error fetching achievements:', error.message);
                setError(`Failed to load achievements. Error: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
    
        fetchAchievements();
    }, []);

    return (
        <div className="container mx-auto lg:px-5 lg:pl-28">
            {/* Main Content: Achievements and Updates */}
            <div className="flex flex-col lg:flex-row gap-2">
                {/* Achievements List (2/3 of the screen) */}
                <div className="w-full lg:w-2/3 lg:max-h-screen lg:overflow-y-auto lg:pr-4 custom-scrollbar">
                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : error ? (
                        <p className="text-red-500 text-center">{error}</p>
                    ) : achievements.length > 0 ? (
                        achievements.map((achievement) => (
                            <AchievementsCard
                                key={achievement._id}
                                id={achievement._id}
                                image={achievement.image}
                                title={achievement.title}
                                description={achievement.description}
                                year={achievement.year}
                                level={achievement.level}
                            />
                        ))
                    ) : (
                        <p>No state level achievements found</p>
                    )}
                </div>

                {/* Updates (1/3 of the screen) */}
                <div className="w-full lg:w-1/3 lg:ml-8 flex justify-center lg:block">
                    <Updates />
                </div>
            </div>
        </div>
    );
};

export default AchievementsState;