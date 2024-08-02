import React, { useState, useEffect } from 'react';
import AchievementsCard from '../components/AchievementCard';

const AchievementsList = () => {
    const [achievements, setAchievements] = useState([]);
    const [filteredAchievements, setFilteredAchievements] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedLevels, setSelectedLevels] = useState([]);

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

    return (
        <div className="">
            
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
           
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

            {/* Achievements List */}
            <div>
                {filteredAchievements.length > 0 ? filteredAchievements.map((achievement) => (
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
        </div>
    );
};

export default AchievementsList;
