import React, { useState } from 'react';
import { ArrowRight, Calendar, UserCircle } from 'lucide-react';
import Navbar from './Navbar';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsArticles = [
    {
      id: 1,
      title: 'World Roller Skating Championships Announced',
      author: 'Emma Rodriguez',
      date: 'November 15, 2024',
      category: 'Competition',
      excerpt: 'The most anticipated roller skating competition of the year is set to take place in Barcelona this summer...',
      imageUrl: '/api/placeholder/800/400'
    },
    {
      id: 2,
      title: 'New Urban Skating Trends Taking Over Cities',
      author: 'Alex Chen',
      date: 'October 22, 2024',
      category: 'Urban Skating',
      excerpt: 'Street skating is evolving with innovative techniques and community-driven events across major metropolitan areas...',
      imageUrl: '/api/placeholder/800/400'
    },
    {
      id: 3,
      title: 'Professional Skater Launches Sustainability Initiative',
      author: 'Jordan Thompson',
      date: 'September 5, 2024',
      category: 'Community',
      excerpt: 'Leading professional roller skater launches eco-friendly skating equipment and community recycling program...',
      imageUrl: '/api/placeholder/800/400'
    }
  ];

  const categories = ['All', 'Competition', 'Urban Skating', 'Community', 'Equipment'];

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div>
        <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center ">
         
          
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-8 animate-slide-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300 
                ${selectedCategory === category 
                  ? 'bg-blue-600 text-white scale-105' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden 
                         transform transition-all duration-300 
                         hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{article.date}</span>
                  <UserCircle className="w-4 h-4 ml-4 mr-2" />
                  <span>{article.author}</span>
                </div>

                <h2 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>

                <button className="
                  flex items-center text-blue-600 hover:text-blue-800 
                  font-semibold transition-colors group
                ">
                  Read More 
                  <ArrowRight 
                    className="ml-2 transform transition-transform group-hover:translate-x-1" 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsPage;