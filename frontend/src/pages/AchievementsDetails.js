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
                const response = await fetch(`https://trsabackend.vercel.app/api/achievements/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAchievement(data);

                const allAchievementsResponse = await fetch('https://trsabackend.vercel.app/api/achievements');
                const allAchievementsData = await allAchievementsResponse.json();
                setAchievements(allAchievementsData);

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
        window.scrollTo(0, 0); // Scroll to top of the page
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner"></div>
                </div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <div className=" px-2 md:px-12 lg:px-40 bg-white pt-4 md:pt-10 border-2">
                    <div className=" my-8  ">
                        <p className="text-2xl md:text-3xl  text-black font-bold ">Achievement / <span className="font-bold text-gray-600">{achievement.level}</span></p>
                        <h2 className="text-xl md:text-3xl mt-2 md:mt-4 font-semibold text-gray-800">{achievement.title}</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-wrap gap-4 justify-center w-full">
                            <img className="rounded-lg shadow-md object-cover w-full sm:w-1/2 lg:w-2/5 h-60 md:h-80" src={achievement.image} alt="Achievement 1" />
                            <img className="rounded-lg shadow-md object-cover w-full sm:w-1/2 lg:w-2/5 h-60 md:h-80" src={achievement.image2} alt="Achievement 2" />
                        </div>
                        <p className=" text-lg font-semibold text-center bg-blue-900 text-white p-2 rounded w-full">{achievement.title}</p>
                    </div>
                    <div className="my-8 px-4">
                        <p className="text-gray-700 text-base md:text-xl">{achievement.description}</p>
                    </div>

                    {/* Suggestions Section */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-40 mb-10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Related Achievements</h3>
                        <div className="grid grid-cols-1  md:grid-cols-2 md:gap-12 lg:gap-16 lg:px-40">
                            {suggestions.map((suggestion) => (
                                <div
                                    key={suggestion._id}
                                    onClick={() => handleSuggestionClick(suggestion._id)}
                                    className="p-4 mt-5 bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer"
                                >
                                    <img 
                                        className="rounded-lg shadow-md object-cover w-full h-40 mb-4"
                                        src={suggestion.image} 
                                        alt={suggestion.title}
                                    />
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
