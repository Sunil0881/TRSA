import React from "react";

const TeamCard = ({ image, name, designation, socialLinks }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-lg p-6 w-80 text-center">
        <img
          src={image}
          alt={name}
          className="rounded-lg w-52 h-60 mx-auto mb-4 object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 mb-4">{designation}</p>
        <div className="flex justify-center space-x-4">
          {socialLinks.call && (
            <a
              href={`tel:${socialLinks.call}`}
              className="text-gray-600 hover:text-green-500"
              aria-label="Call"
            >
              <i className="fas fa-phone-alt"></i>
            </a>
          )}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-600 hover:text-red-500"
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
