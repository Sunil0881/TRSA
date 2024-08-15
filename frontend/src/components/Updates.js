import React, { useState, useEffect } from 'react';
import "../Styles/Updates.css"

const Updates = () => {
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                const response = await fetch('https://trsabackend.vercel.app/api/updates');
                const data = await response.json();
                setUpdates(data);
            } catch (error) {
                console.error('Error fetching updates:', error);
            }
        };

        fetchUpdates();
    }, []);

    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
      <h2 className="text-xl font-semibold mb-4 text-blue-800">Latest Updates</h2>
      <ul className="space-y-2">
          {updates.length > 0 ? updates.map((update, index) => (
              <li key={index} className="update-item bg-white p-4 mb-2 flex items-center justify-between rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-gray-700 relative">{update.text}</span>
              </li>
          )) : <p>No updates found</p>}
      </ul>
  </div>
    );
};

export default Updates;
