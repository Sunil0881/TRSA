import React, { useState } from 'react';
import './Card.css'; // Import the CSS file for styles
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ image, title, description, id }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const navigate = useNavigate();
  const descriptionLength = 120;

  const readMore = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate(`/news/${id}`);
  };

  const truncate = (text, maxLength) => {
    if (!text || typeof text !== 'string') {
      return '';
    }
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className="card-container" onClick={openPopup}>
      <div className="card">
        <div className="card-image">
          <img src={image} alt={title} className="card-img" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{truncate(description, descriptionLength)}</p>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="popup-title">{title}</h3>
            <p className="popup-description">{description}</p>
            <button className="popup-close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
