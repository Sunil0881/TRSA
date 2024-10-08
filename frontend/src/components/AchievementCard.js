// src/components/AchievementsCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AchievementsCard = ({ id, image, title, description, year, level }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const toggleReadMore = () => {
        window.scrollTo(0, 0);
        navigate(`/achievement/${id}`);
        
    };

    const truncateText = (text, limit) => {
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    };

    const descriptionLimit = 125; // Adjust this limit as needed

    return (
        <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row max-w-7xl w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden h-auto sm:h-80 mb-8 transition-transform transform hover:scale-90 hover:shadow-xl">
                <div className="relative w-full sm:w-2/5">
                    <img
                        className="w-full h-48 sm:h-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
                        src={image}
                        alt={title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"></div>
                </div>
                <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                    <div className="flex flex-col h-full">
                        <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-blue-800">{title}</h2>
                        <p className="text-gray-600 mt-4 text-base md:text-lg flex-grow">
                            {truncateText(description, descriptionLimit)}
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={toggleReadMore}
                                className="mt-2 px-3 py-2 bg-blue-800 text-white text-sm rounded-lg focus:outline-none transition-transform transform hover:scale-105"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-gray-700">
                        <div className="text-sm md:text-xl font-semibold">
                            Year: <span className="font-normal">{year}</span>
                        </div>
                        <div className="text-sm md:text-xl font-semibold">
                            Level: <span className="font-normal">{level}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsCard;
