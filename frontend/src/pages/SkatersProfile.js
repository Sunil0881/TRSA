import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaSearch, FaUser, FaVenusMars, FaSkating, FaBuilding } from 'react-icons/fa';

const SkaterProfile = () => {
  const [skaters, setSkaters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkaters, setFilteredSkaters] = useState([]);

  useEffect(() => {
    const fetchSkaters = async () => {
      try {
        const response = await fetch('https://trsabackend.vercel.app/api/skaterprofiles');
        const data = await response.json();
        setSkaters(data);
        setFilteredSkaters(data);
      } catch (error) {
        console.error('Error fetching skaters:', error);
      }
    };

    fetchSkaters();
  }, []);

  useEffect(() => {
    const results = skaters.filter((skater) =>
      Object.keys(skater).some((key) =>
        ['name', 'gender', 'eventCategory', 'representativeClub'].includes(key)
          ? skater[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
          : false
      )
    );
    setFilteredSkaters(results);
  }, [searchTerm, skaters]);
  

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          All {skaters.length} Rider Profiles from Thiruvallur
        </h1>
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Profiles"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
            <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Mobile view: Cards */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {filteredSkaters.map((skater, index) => (
            <div key={skater._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={skater.skaterPhoto}
                    alt={skater.name}
                    className="h-16 w-16 object-cover rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{skater.name}</h2>
                    <p className="text-sm text-gray-600">#{index + 1}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <FaVenusMars className="mr-2 text-blue-500" />
                    <span>{skater.gender}</span>
                  </div>
                  <div className="flex items-center">
                    <FaSkating className="mr-2 text-green-500" />
                    <span>{skater.eventCategory}</span>
                  </div>
                  <div className="flex items-center col-span-2">
                    <FaBuilding className="mr-2 text-purple-500" />
                    <span>{skater.representativeClub}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view: Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">S.no</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Profile</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Name</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Gender</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Event Category</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase">Representative Club</th>
              </tr>
            </thead>
            <tbody>
              {filteredSkaters.map((skater, index) => (
                <tr key={skater._id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-150">
                  <td className="py-4 px-6 text-gray-800">{index + 1}</td>
                  <td className="py-4 px-6">
                    <img
                      src={skater.skaterPhoto}
                      alt={skater.name}
                      className="h-12 w-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="py-4 px-6 text-gray-800 font-medium">{skater.name}</td>
                  <td className="py-4 px-6 text-gray-600">
                    <div className="flex items-center">
                      <FaVenusMars className="mr-2 text-blue-500" />
                      <span>{skater.gender}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">
                    <div className="flex items-center">
                      <FaSkating className="mr-2 text-green-500" />
                      <span>{skater.eventCategory}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">
                    <div className="flex items-center">
                      <FaBuilding className="mr-2 text-purple-500" />
                      <span>{skater.representativeClub}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkaterProfile;

