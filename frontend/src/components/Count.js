import React, { useState } from 'react';
import './Card.css'; // Import the CSS file for styles

const NewsCard = ({ image, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };

  return (
    <div className="expandable-card" onClick={toggleCard}>
      <div className="card-header">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className={`card-description ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? description : `${description.substring(0, 120)}...`}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
