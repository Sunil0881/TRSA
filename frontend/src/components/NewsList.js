// NewsList.jsx
import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { BACKEND_URL } from '../constants';
const NewsList = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/news`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setNews(data);
        } else {
          throw new Error('Invalid response format from server');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(`Failed to load news: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading news...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        <h3 className="font-semibold">Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
          
        ))}
      </div>
      
    </div>
  );
};

export default NewsList;