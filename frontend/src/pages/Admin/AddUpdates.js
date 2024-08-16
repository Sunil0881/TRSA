import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import DeleteUpdate from './DeleteUpdate'; // Assume this is your delete component

const AddUpdates = () => {
  const [toggle, setToggle] = useState(false); // Added toggle state
  const [updateText, setUpdateText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const maxUpdateLength = 50;

  const handleAddUpdate = async () => {
    if (!updateText.trim()) {
      setError('Update text cannot be empty.');
      return;
    }

    const update = {
      text: updateText,
    };

    const urlvar = 'https://trsabackend.vercel.app';

    try {
      const response = await fetch(`${urlvar}/api/updates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Update added successfully!');
        setUpdateText('');
        setError('');
      } else {
        setError('Failed to add the update. Please try again.');
      }
    } catch (error) {
      setError('Error adding the update. Please try again.');
    }
  };

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="px-4 md:px-6 lg:px-72 pt-20 relative">
        {/* Toggle Button */}
        <div className="absolute top-0 right-0 mt-5 mr-5">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={toggle}
              onChange={handleToggleChange}
            />
            <div className="relative">
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform transform ${
                  toggle ? 'translate-x-full bg-red-500' : 'bg-green-500'
                }`}
              >
                {toggle ? (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </label>
        </div>

        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-10 text-blue-800">
          {toggle ? 'Delete Update' : 'Add New Update'}
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-500">
          {!toggle ? (
            // Add Update Form
            <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto ">
              <h2 className="text-blue-800 text-2xl font-semibold mb-2">Add New Update</h2>
              <div className="mb-4">
                <textarea
                  placeholder="Enter update text"
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value.slice(0, maxUpdateLength))}
                  rows={4}
                  maxLength={maxUpdateLength}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-gray-500 text-sm mt-2">{updateText.length}/{maxUpdateLength} characters</p>
              </div>
              <div className="mb-4">
                <button
                  onClick={handleAddUpdate}
                  className="w-full bg-blue-800 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Update
                </button>
              </div>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
            </div>
          ) : (
            // Delete Update Component
            <DeleteUpdate />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddUpdates;
