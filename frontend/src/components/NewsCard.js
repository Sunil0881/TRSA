// NewsCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ title, description, image, id }) => {
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          {truncate(description, descriptionLength)}
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={readMore}
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;