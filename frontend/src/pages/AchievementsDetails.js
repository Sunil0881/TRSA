// src/components/FullAchievementDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AchievementsDetails = () => {
    const { id } = useParams();
    const [achievement, setAchievement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAchievementData = async () => {
            try {
                // Check if the URL is correct
                const response = await fetch(`http://localhost:5000/api/achievements/${id}`);
                
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                
                // Log data to check its structure
                console.log('Fetched achievement data:', data);

                setAchievement(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching achievement data:', error);
                setError('Failed to load achievement details.');
                setLoading(false);
            }
        };

        fetchAchievementData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flex justify-center p-6">
            <div className="max-w-7xl w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                <div className="relative w-full">
                    <img
                        className="w-full h-48 object-cover rounded-t-lg"
                        src={achievement.image}
                        alt={achievement.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20 rounded-t-lg"></div>
                </div>
                <div className="p-6">
                    <h2 className="text-3xl font-semibold text-blue-800">{achievement.title}</h2>
                    <p className="text-gray-600 mt-4 text-lg">{achievement.description}</p>
                    <div className="mt-4 text-gray-700">
                        <div className="text-xl font-semibold">
                            Year: <span className="font-normal">{achievement.year}</span>
                        </div>
                        <div className="text-xl font-semibold">
                            Level: <span className="font-normal">{achievement.level}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsDetails;
