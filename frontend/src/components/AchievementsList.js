import React, { useState, useEffect } from 'react';
import AchievementsCard from '../components/AchievementCard';
import Updates from './Updates';
import  "../Styles/Scroll.css";

const AchievementsList = () => {
    const [achievements, setAchievements] = useState([]);
    const [filteredAchievements, setFilteredAchievements] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    // Generate an array of years from 1995 to 2024
    const yearRange = Array.from({ length: 2024 - 1995 + 1 }, (_, i) => 1995 + i);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/achievements');
                const data = await response.json();
                console.log('Fetched Achievements:', data);
                setAchievements(data);
                setFilteredAchievements(data); // Initialize filteredAchievements
            } catch (error) {
                console.error('Error fetching achievements:', error);
            }
        };

        fetchAchievements();
    }, []);

    useEffect(() => {
        let filtered = achievements;

        if (selectedYear) {
            filtered = filtered.filter((achievement) => achievement.year.toLowerCase() === selectedYear.toLowerCase());
        }

        if (selectedLevels.length > 0) {
            filtered = filtered.filter((achievement) => selectedLevels.includes(achievement.level.toLowerCase()));
        }

        setFilteredAchievements(filtered);
    }, [selectedYear, selectedLevels, achievements]);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleLevelChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSelectedLevels(prevLevels => 
            prevLevels.includes(value) 
                ? prevLevels.filter(level => level !== value) 
                : [...prevLevels, value]
        );
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="container mx-auto lg:px-5 lg:pl-32">
            {/* Filter Button */}
            <div className="flex justify-end mb-4 lg:mr-20">
                <button
                    onClick={toggleFilters}
                    className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
            </div>

            {/* Filters Section */}
            {showFilters && (
                <div className="flex flex-col sm:flex-row gap-6 mb-6 lg:ml-24">
                    <div className="w-full sm:w-1/2">
                        <label htmlFor="year" className="block text-base font-medium text-gray-800 mb-2">Year</label>
                        <select
                            id="year"
                            value={selectedYear}
                            onChange={handleYearChange}
                            className="w-full max-w-xs border border-gray-300 rounded-lg p-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        >
                            <option value="">Select Year</option>
                            {yearRange.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    {/* Level Checkboxes */}
                    <div className="w-full sm:w-1/2">
                        <p className="block text-base font-medium text-gray-800 mb-2">Level</p>
                        <div className="flex flex-col space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value="state"
                                    checked={selectedLevels.includes('state')}
                                    onChange={handleLevelChange}
                                    className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-800">State</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value="national"
                                    checked={selectedLevels.includes('national')}
                                    onChange={handleLevelChange}
                                    className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-gray-800">National</span>
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content: Achievements and Updates */}
            <div className="flex flex-col lg:flex-row gap-2">
                {/* Achievements List (2/3 of the screen) */}
                <div className="w-full lg:w-2/3 lg:max-h-screen lg:overflow-y-auto lg:pr-4 custom-scrollbar">
                    {filteredAchievements.length > 0 ? filteredAchievements.map((achievement) => (
                        <AchievementsCard
                            key={achievement._id}
                            id={achievement._id}
                            image={achievement.image}
                            title={achievement.title}
                            description={achievement.description}
                            year={achievement.year}
                            level={achievement.level}
                        />
                    )) : <p>No achievements found</p>}
                </div>

                {/* Updates (1/3 of the screen), moved further to the right */}
                <div className="w-full lg:w-1/3 lg:ml-8 flex justify-center lg:block">
                    <Updates />
                </div>
            </div>
           
        </div>
    );
};

export default AchievementsList;
