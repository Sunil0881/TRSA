import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ id, title, date, image }) => {
  const navigate = useNavigate();

  // Convert the date to the desired format
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Handle the button click to navigate to the event details page
  const handleRegisterClick = () => {
    navigate(`/events/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-xl border-2 overflow-hidden pb-40 m-12 transition-transform transform hover:scale-105"
      style={{ width: '300px', height: '350px' }}
    >
      <img src={image} alt="Event Banner" className="w-full h-2/3 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
        <p className="text-center text-gray-600 mb-4">{formattedDate}</p>
      </div>
      <div className="w-full flex justify-center mb-2">
        <button
          className="bg-blue-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700"
          onClick={handleRegisterClick}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
