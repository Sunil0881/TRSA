import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';

const AddSkaters = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [level, setLevel] = useState('');
  const [error, setError] = useState('');

  const handleSaveSkater = async () => {
    // Basic form validation
    if (!name || !age || !gender || !level) {
      setError('Please fill out all fields.');
      return;
    }

    // Additional validation can be added here (e.g., age should be a number)

    const skaterProfile = {
      name,
      age: Number(age), // Ensure age is a number
      gender,
      level,
    };

    const urlvar = 'https://trsabackend.vercel.app';

    try {
      const response = await fetch(`${urlvar}/api/skaterprofiles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(skaterProfile),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log('Skater profile saved successfully:', data);
        alert('Skater profile successfully added!');
        // Reset the form
        setName('');
        setAge('');
        setGender('');
        setLevel('');
        setError('');
      } else {
        alert('Failed to save the skater profile. Please try again.');
      }
    } catch (error) {
      console.error('Error saving the skater profile:', error);
      alert('Error saving the skater profile. Please try again.');
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="px-4 md:px-6 lg:px-72 pt-20">
        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-10 text-blue-800">
          Add New Skater
        </h1>
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-500 p-8">
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter skater's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Age
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="Enter skater's age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="0"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Gender
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Level
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="" disabled>
                Select Level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              onClick={handleSaveSkater}
            >
              Save Skater
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkaters;
