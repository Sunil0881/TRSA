import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import DeleteUpdate from './DeleteUpdate'; // Assume this is your delete component
import { BACKEND_URL } from '../../constants';
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

    const urlvar =`${BACKEND_URL}`;

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
      <div className="relative px-4 pt-20 md:px-6 lg:px-72">
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
              <div className="block h-8 bg-gray-600 rounded-full w-14"></div>
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

        <h1 className="pb-10 text-2xl font-semibold text-center text-blue-800 md:text-4xl">
          {toggle ? 'Delete Update' : 'Add New Update'}
        </h1>

        <div className="bg-white shadow-2xl rounded-3xl shadow-slate-500">
          {!toggle ? (
            // Add Update Form
            <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg ">
              <h2 className="mb-2 text-2xl font-semibold text-blue-800">Add New Update</h2>
              <div className="mb-4">
                <textarea
                  placeholder="Enter update text"
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value.slice(0, maxUpdateLength))}
                  rows={4}
                  maxLength={maxUpdateLength}
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-2 text-sm text-gray-500">{updateText.length}/{maxUpdateLength} characters</p>
              </div>
              <div className="mb-4">
                <button
                  onClick={handleAddUpdate}
                  className="w-full p-2 text-white bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Update
                </button>
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              {success && <p className="mt-2 text-sm text-green-600">{success}</p>}
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
