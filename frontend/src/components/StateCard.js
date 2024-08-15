import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const StateCard = ({ logo, stateName, clubName }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the detailed club page. 
    // You might want to pass a dynamic path depending on your routing setup.
    navigate(`/clubs/${stateName}`);
  };

  return (
    <div 
      className="flex flex-col md:flex-row items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
        <img src={logo} alt={`${clubName} Logo`} className="w-16 h-16 object-cover rounded-full" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold text-blue-800">{stateName}</h2>
        <p className="text-sm text-gray-600">{clubName}</p>
      </div>
    </div>
  );
};

StateCard.propTypes = {
  logo: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  clubName: PropTypes.string.isRequired,
};

export default StateCard;
