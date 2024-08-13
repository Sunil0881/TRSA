import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AchievementsDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [achievement, setAchievement] = useState(null);
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchAchievementData = async () => {
            try {
                // Fetch the specific achievement by ID
                const response = await fetch(`http://localhost:5000/api/achievements/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAchievement(data);

                // Fetch all achievements
                const allAchievementsResponse = await fetch('http://localhost:5000/api/achievements');
                const allAchievementsData = await allAchievementsResponse.json();
                setAchievements(allAchievementsData);

                // Randomly select two achievements for suggestions
                const filteredAchievements = allAchievementsData.filter(item => item._id !== id);
                const randomSuggestions = filteredAchievements.sort(() => 0.5 - Math.random()).slice(0, 2);
                setSuggestions(randomSuggestions);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching achievement data:', error);
                setError('Failed to load achievement details.');
                setLoading(false);
            }
        };

        fetchAchievementData();
    }, [id]);

    const handleSuggestionClick = (suggestionId) => {
        navigate(`/achievement/${suggestionId}`);
    };

    return (
        <div>
            <Navbar />
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner"></div>
                </div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <div className="achievement-container">
                    <div className="achievement-header text-center my-8">
                        <p className="achievement-level text-gray-600">Achievement / <span className="font-bold">{achievement.level}</span></p>
                        <h2 className="text-3xl font-bold mt-4">{achievement.title}</h2>
                    </div>
                    <div className="achievement-content flex flex-col items-center">
                        <div className="achievement-images flex space-x-4">
                            <img className="rounded-lg shadow-md w-1/2" src={achievement.image} alt="Achievement 1" />
                            <img className="rounded-lg shadow-md w-1/2" src={achievement.image2} alt="Achievement 2" />
                        </div>
                        <p className="achievement-caption text-lg font-semibold mt-6">{achievement.title}</p>
                    </div>
                    <div className="achievement-description my-8 px-4">
                        <p className="text-gray-700">{achievement.description}</p>
                    </div>

                    {/* Suggestions Section */}
                    <div className="suggestions bg-gray-100 p-6 rounded-lg shadow-lg mt-12">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Related Achievements</h3>
                        <div className="suggestions-list grid grid-cols-1 md:grid-cols-2 gap-6">
                            {suggestions.map((suggestion) => (
                                <div
                                    key={suggestion._id}
                                    onClick={() => handleSuggestionClick(suggestion._id)}
                                    className="suggestion-item p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                >
                                    <p className="font-semibold text-gray-700">{suggestion.title}</p>
                                    <p className="text-gray-600">Year: {suggestion.year}</p>
                                    <p className="text-gray-600">Level: {suggestion.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default AchievementsDetails;
