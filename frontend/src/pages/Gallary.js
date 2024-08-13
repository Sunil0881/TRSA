import React, { useState, useEffect } from 'react';
import Gallery from "../assets/gallery.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/AchievementDetail.css"; // Ensure this file includes the loader styles

const Gallary = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gallery');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data);
        setFilteredImages(data); // Initialize with all images
      } catch (error) {
        console.error('Error fetching images:', error);
        alert('Failed to load images. Please check the console for details.');
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-28 md:h-44 lg:w-full lg:h-full">
        <img src={Gallery} alt="Gallery Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <p className="absolute inset-0 flex items-center justify-left pl-10 text-white text-2xl md:text-4xl font-bold">
          Gallery
        </p>
      </div>

      <div className="p-4">
        {/* New Heading */}
        <h2 className=" text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Our Cherishable Moments
        </h2>

        {loading ? (
          <div className="loading flex justify-center items-center h-96">
            <div className="spinner border-4 border-t-4 border-blue-600 border-opacity-50 w-12 h-12 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image.url}
                  alt={`Gallery image ${index}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallary;
