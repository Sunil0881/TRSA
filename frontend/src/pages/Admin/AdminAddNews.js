import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/AdminNavbar';

// Constants
const API_BASE_URL = 'https://trsabackend.vercel.app/api';

const AdminBreakingNews = () => {
  // State Management
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Existing Breaking News
  useEffect(() => {
    const fetchCurrentNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/breaking-news`);
        
        if (response.data) {
          setContent(response.data.content || '');
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('No existing breaking news found');
      }
    };

    fetchCurrentNews();
  }, []);

  // Update Breaking News
  const handleUpdateNews = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('Content cannot be empty');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // This will either create or update the breaking news
      await axios.post(`${API_BASE_URL}/breaking-news`, { content });

      alert('Breaking News updated successfully!');
      setLoading(false);
    } catch (error) {
      console.error('Error updating breaking news:', error.response?.data || error.message);
      setError('Failed to update breaking news');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
    <AdminNavbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-20 ">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* News Content Form */}
          <form onSubmit={handleUpdateNews} className="space-y-4">
            <div>
              <label htmlFor="breaking-news" className="block text-sm font-medium text-gray-700 mb-2">
                Breaking News Content
              </label>
              <textarea
                id="breaking-news"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter breaking news content"
                disabled={loading}
                required
              />
            </div>

            {/* Action Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium 
                  bg-blue-600 hover:bg-blue-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Updating...' : 'Update Breaking News'}
              </button>
            </div>
          </form>

          {/* Informational Text */}
          <div className="mt-4 text-sm text-gray-500 text-center">
            <p>
              * Updating will replace the existing breaking news with new content
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Breaking News Management
        </p>
      </footer>
    </div>
  );
};

export default AdminBreakingNews;