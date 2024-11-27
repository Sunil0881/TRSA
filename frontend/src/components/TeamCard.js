import React from 'react';

const TeamCard = ({ image, name, designation, socialLinks }) => {
  return (
    <div className="flex justify-center items-center animate-fade-in">
      <div className="rounded-lg p-6 w-80 text-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={image}
          alt={name}
          className="rounded-lg w-72 h-80 mx-auto mb-4 object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-500 mb-4">{designation}</p>
        <div className="flex justify-center space-x-4">
          {socialLinks.call && (
            <a
              href={`tel:${socialLinks.call}`}
              className="text-gray-600 hover:text-green-500 transition-colors duration-300"
              aria-label="Call"
            >
              <i className="fas fa-phone-alt"></i>
            </a>
          )}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-600 hover:text-red-500 transition-colors duration-300"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;