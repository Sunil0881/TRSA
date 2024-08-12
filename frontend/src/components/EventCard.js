import React from 'react';

const EventCard = ({ title, date, image }) => {
  // Convert the date to the desired format
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden pb-40 mt-10" style={{ width: '300px', height: '350px' }}>
      <img src={image} alt="Event Banner" className="w-full h-2/3 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
        <p className="text-center text-gray-600 mb-4">{formattedDate}</p>
        <div className="text-right mb-2">
          <button className="text-blue-600 hover:text-blue-800 font-semibold">More</button>
        </div>
      </div>
     
      <div className="w-full flex justify-center mb-2">
        <button className="bg-blue-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
