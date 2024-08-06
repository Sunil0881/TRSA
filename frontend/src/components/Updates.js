// src/components/LatestUpdates.js
import React from 'react';
import '../Styles/Updates.css'; // Import custom CSS

const updates = [
  "World Figure Skating Championships trials",
  "World Figure Skating Championships trials",
  "World Figure Skating Championships trials",
  "World Figure Skating Championships trials",
  "World Figure Skating Championships trials",
];

const Updates = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
      <h2 className="text-xl font-semibold mb-4">Latest Updates</h2>
      <ul>
        {updates.map((update, index) => (
          <li key={index} className="update-item bg-white p-2 mb-2 flex items-center justify-between rounded-md shadow-sm relative overflow-hidden">
            <span className="z-10 relative">{update}</span>
            <div className="hover-bg bg-blue-800 absolute top-0 right-0 bottom-0 w-full h-full transition-all duration-300 ease-in-out"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Updates;
