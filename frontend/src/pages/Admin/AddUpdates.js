import React, { useState } from 'react';

const AddUpdates = () => {
  const [updateText, setUpdateText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const maxUpdateLength = 40;

  const handleAddUpdate = async () => {
    if (!updateText.trim()) {
      setError('Update text cannot be empty.');
      return;
    }

    const update = {
      text: updateText,
    };

    const urlvar = 'http://localhost:5000';

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

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-24">
      <h2 className="text-blue-800 text-2xl font-semibold mb-4">Add New Update</h2>
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
  );
};

export default AddUpdates;
