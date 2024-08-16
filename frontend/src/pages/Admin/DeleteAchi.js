import React, { useState, useEffect } from 'react';
import AchievementsCard from '../../components/AchievementCard';
import "../../Styles/Scroll.css";

const DeleteAchi = () => {
    const [achievements, setAchievements] = useState([]);
    const [filteredAchievements, setFilteredAchievements] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Error state

    // Generate an array of years from 1995 to 2024
    const yearRange = Array.from({ length: 2024 - 1995 + 1 }, (_, i) => 1995 + i);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await fetch('https://trsabackend.vercel.app/api/achievements');
                
                // Check if the response status is OK
                if (!response.ok) {
                    const errorDetails = await response.text();
                    throw new Error(`HTTP error! Status: ${response.status}. Details: ${errorDetails}`);
                }
                
                const data = await response.json();
                
                // Verify if the data is an array
                if (Array.isArray(data)) {
                    setAchievements(data);
                    setFilteredAchievements(data);
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
    

    useEffect(() => {
        // Filter achievements based on selected year and levels
        const filterAchievements = () => {
            let filtered = achievements;

            if (selectedYear) {
                filtered = filtered.filter(achievement => achievement.year.toString() === selectedYear);
            }

            if (selectedLevels.length > 0) {
                filtered = filtered.filter(achievement => selectedLevels.includes(achievement.level.toLowerCase()));
            }

            setFilteredAchievements(filtered);
        };

        filterAchievements();
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
        setShowFilters(prevShowFilters => !prevShowFilters);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://trsabackend.vercel.app/api/achievements/${id}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}. Details: ${errorDetails}`);
            }

            // Remove the deleted achievement from the state
            setAchievements(prevAchievements => prevAchievements.filter(achievement => achievement._id !== id));
            setFilteredAchievements(prevFilteredAchievements => prevFilteredAchievements.filter(achievement => achievement._id !== id));
        } catch (error) {
            console.error('Error deleting achievement:', error.message);
            setError(`Failed to delete achievement. Error: ${error.message}`);
        }
    };

    return (
        <div className="container mx-auto lg:px-5 lg:pl-10">
            {/* Filter Button */}
            <div className="flex justify-end mb-4 pt-10 lg:mr-20">
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

            {/* Main Content: Achievements List */}
            <div className="w-full lg:max-h-screen lg:overflow-y-auto lg:pr-4 custom-scrollbar">
                {loading ? (
                    <div className="loading">
                        <div className="spinner"></div>
                    </div>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : filteredAchievements.length > 0 ? (
                    filteredAchievements.map((achievement) => (
                        <div key={achievement._id} className="relative mb-4">
                            <AchievementsCard
                                id={achievement._id}
                                image={achievement.image}
                                title={achievement.title}
                                description={achievement.description}
                                year={achievement.year}
                                level={achievement.level}
                            />
                            <button
                                onClick={() => handleDelete(achievement._id)}
                                className="absolute top-0 right-0 mt-2 mr-2 px-3 py-1 bg-red-600 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No achievements found</p>
                )}
            </div>
        </div>
    );
};

export default DeleteAchi;
