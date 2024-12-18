import React, { useState, useEffect } from "react";
import AchievementsCard from "../components/AchievementCard";
import Updates from "./Updates";
import "../Styles/Scroll.css";
import { BACKEND_URL } from "../constants";

import GIF from "../assets/trophy.gif"
const AchievementsList = () => {
  const [achievements, setAchievements] = useState([]);
  const [filteredAchievements, setFilteredAchievements] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const yearRange = Array.from({ length: 2024 - 1995 + 1 }, (_, i) => 1995 + i);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/achievements`);
        if (!response.ok)
          throw new Error(`Failed to fetch achievements. Status: ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Unexpected data format");
        setAchievements(data);
        setFilteredAchievements(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  useEffect(() => {
    const filtered = achievements.filter((achievement) => {
      const matchesYear = selectedYear ? achievement.year.toString() === selectedYear : true;
      const matchesLevel = selectedLevels.length > 0 ? selectedLevels.includes(achievement.level.toLowerCase()) : true;
      return matchesYear && matchesLevel;
    });

    setFilteredAchievements(filtered);
  }, [selectedYear, selectedLevels, achievements]);

  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const handleLevelChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSelectedLevels((prev) =>
      prev.includes(value) ? prev.filter((level) => level !== value) : [...prev, value]
    );
  };

  const toggleFilters = () => setShowFilters((prev) => !prev);

  return (
    <div className="container mx-auto px-4 lg:px-28">
      <div className="flex justify-center mb-4 lg:mb-6">
        <button
          onClick={toggleFilters}
          className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-6 mb-6 lg:mb-8 justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <label htmlFor="year" className="block text-base font-medium text-gray-800 mb-2">
              Year
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={handleYearChange}
              className="w-full border border-gray-300 rounded-lg p-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="">Select Year</option>
              {yearRange.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <p className="block text-base font-medium text-gray-800 mb-2">Level</p>
            <div className="flex flex-col space-y-2">
              {["state", "district", "national", "international"].map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="checkbox"
                    value={level}
                    checked={selectedLevels.includes(level)}
                    onChange={handleLevelChange}
                    className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-800 capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-4 justify-center lg:gap-8">
        {/* Main Content - Achievements */}
        <div className="w-full lg:w-2/3 lg:max-h-screen lg:overflow-y-auto bg-white rounded-lg shadow-lg p-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Retry
              </button>
            </div>
          ) : filteredAchievements.length > 0 ? (
            filteredAchievements.map((achievement) => (
              <AchievementsCard key={achievement._id} {...achievement} />
            ))
          ) : (
            <p className="text-center">No achievements found</p>
          )}
        </div>

        {/* Side Content - Add design components */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:ml-8 space-y-8">
          {/* Floating Action Button */}
          <div className="fixed bottom-8 right-8 bg-blue-700 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transform transition duration-300">
            <span className="text-2xl">+</span>
          </div>

          <div>
        <img 
          src={GIF} 
          alt="Roller Skating"
          className="roller-skating-animation"
        />
      </div>

          {/* Sidebar with Decorative Elements */}
          <div className="w-full h-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md p-6 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Our Achievement</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsList;
