import React from 'react';

const AchievementsCard = ({ image, title, description, year, level }) => {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col sm:flex-row max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden h-auto sm:h-80 mb-8">
                <img
                    className="w-full sm:w-2/5 h-48 sm:h-full object-cover"
                    src={image}
                    alt={title}
                />
                <div className="w-full sm:w-3/5 p-4 flex flex-col justify-between">
                    <div className="flex flex-col h-full">
                        <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-blue-800">{title}</h2>
                        <p className="text-gray-600 mt-2 text-base md:text-lg flex-grow">{description}</p>
                    </div>
                    <div className="mt-4 flex justify-between text-gray-700">
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
