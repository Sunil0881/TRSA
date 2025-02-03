import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar";
import { BACKEND_URL } from "../../constants";

const AdminBreakingNews = () => {
  // State Management
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Fetch Existing Breaking News
  useEffect(() => {
    const fetchCurrentNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/api/breaking-news`);

        if (response.data) {
          setContent(response.data.content || "");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("No existing breaking news found");
      }
    };

    fetchCurrentNews();
  }, []);

  // Update Breaking News
  const handleUpdateNews = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      setError("Content cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      // This will either create or update the breaking news
      await axios.post(`${BACKEND_URL}/api/breaking-news`, { content });

      setSuccess("Breaking News updated successfully!");
      setLoading(false);
    } catch (error) {
      console.error(
        "Error updating breaking news:",
        error.response?.data || error.message
      );
      setError("Failed to update breaking news. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <AdminNavbar />

      {/* Main Content */}
      <main className="container flex-grow px-4 py-20 mx-auto">
        <div className="max-w-2xl p-6 mx-auto bg-white shadow-lg rounded-xl">
          {/* Error Message */}
          {error && (
            <div
              className="relative px-4 py-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div
              className="relative px-4 py-3 mb-4 text-green-700 bg-green-100 border border-green-400 rounded"
              role="alert"
            >
              <span className="block sm:inline">{success}</span>
            </div>
          )}

          {/* News Content Form */}
          <form onSubmit={handleUpdateNews} className="space-y-4">
            <div>
              <label
                htmlFor="breaking-news"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
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
                  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "Updating..." : "Update Breaking News"}
              </button>
            </div>
          </form>

          {/* Informational Text */}
          <div className="mt-4 text-sm text-center text-gray-500">
            <p>
              * Updating will replace the existing breaking news with new
              content
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center bg-gray-200">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Breaking News Management
        </p>
      </footer>
    </div>
  );
};

export default AdminBreakingNews;
