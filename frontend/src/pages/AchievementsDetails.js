// src/components/FullAchievementDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const AchievementsDetails = () => {
    const { id } = useParams();
    const [achievement, setAchievement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAchievementData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/achievements/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
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

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center min-h-screen">{error}</div>;

    return (
        <div>
        <div className="flex justify-center p-4 sm:p-6  min-h-screen">
            <div className="max-w-4xl w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img
                        className="w-full h-64 sm:h-80 object-cover rounded-t-lg"
                        src={achievement.image}
                        alt={achievement.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-t-lg"></div>
                    <h1 className="absolute bottom-4 left-4 text-white text-2xl sm:text-4xl font-bold drop-shadow-md">
                        {achievement.title}
                    </h1>
                </div>
                <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-gray-700 mb-6">
                        <div className="text-lg sm:text-xl font-semibold">
                            Year: <span className="font-normal">{achievement.year}</span>
                        </div>
                        <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-0">
                            Level: <span className="font-normal">{achievement.level}</span>
                        </div>
                    </div>
                    <div className="text-gray-800 text-base sm:text-lg leading-relaxed space-y-4">
                        <p>{achievement.description}</p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default AchievementsDetails;
