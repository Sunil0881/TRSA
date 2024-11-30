import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaSearch } from 'react-icons/fa';

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
        setFilteredSkaters(data); // Initialize with all skaters
      } catch (error) {
        console.error('Error fetching skaters:', error);
      }
    };

    fetchSkaters();
  }, []);

  useEffect(() => {
    const results = skaters.filter(skater =>
      skater.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSkaters(results);
  }, [searchTerm, skaters]);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">All {skaters.length} Rider Profiles from Thiruvallur</h1>
        <div className="flex justify-center mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Profiles"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 bg-gray-100"
            />
            <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-black">
                <th className="py-3 px-6 text-left">S.no</th>
                <th className="py-3 px-6 text-left">Photo</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Date of Birth</th>
                <th className="py-3 px-6 text-left">Event Category</th>
                <th className="py-3 px-6 text-left">Representative Club</th>
                <th className="py-3 px-6 text-left">Coach Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredSkaters.map((skater, index) => (
                <tr key={skater._id} className="bg-white border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">
                    <img
                      src={skater.skaterPhoto}
                      alt={skater.name}
                      className="h-16 w-16 object-cover rounded-full"
                    />
                  </td>
                  <td className="py-3 px-6">{skater.name}</td>
                  <td className="py-3 px-6">{new Date(skater.dob).toLocaleDateString()}</td>
                  <td className="py-3 px-6">{skater.eventCategory}</td>
                  <td className="py-3 px-6">{skater.representativeClub}</td>
                  <td className="py-3 px-6">{skater.coachName}</td>
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
