import React, { useState, useEffect } from 'react';
import { FaSearch, FaTrash } from 'react-icons/fa';
import { BACKEND_URL } from '../../constants';
const DeleteSkater = () => {
  const [skaters, setSkaters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkaters, setFilteredSkaters] = useState([]);

  useEffect(() => {
    const fetchSkaters = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/skaterprofiles`);
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

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this skater?')) {
      try {
        const response = await fetch(`https://trsabackend.vercel.app/api/skaterprofiles/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Update the list after deletion
          setSkaters(skaters.filter(skater => skater._id !== id));
          setFilteredSkaters(filteredSkaters.filter(skater => skater._id !== id));
          alert('Skater deleted successfully!');
        } else {
          alert('Failed to delete the skater. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting the skater:', error);
        alert('Error deleting the skater. Please try again.');
      }
    }
  };

  return (
    <div>
    
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
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Age</th>
                <th className="py-3 px-6 text-left">Gender</th>
                <th className="py-3 px-6 text-left">Level</th>
                <th className="py-3 px-6 text-left">Actions</th> {/* Added Actions column */}
              </tr>
            </thead>
            <tbody>
              {filteredSkaters.map((skater, index) => (
                <tr key={skater._id} className="bg-white border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{skater.name}</td>
                  <td className="py-3 px-6">{skater.age}</td>
                  <td className="py-3 px-6">{skater.gender}</td>
                  <td className="py-3 px-6">{skater.level}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => handleDelete(skater._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
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

export default DeleteSkater;
