import React, { useState, useEffect } from 'react';
import Gallery from "../assets/gallery.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion'; // Import necessary components from Framer Motion
import "../Styles/AchievementDetail.css"; // Ensure this file includes the loader and modal styles
import { BACKEND_URL } from '../constants';

const Gallary = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/gallery`);
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

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
        <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Our Cherishable Moments
        </h2>

        {loading ? (
          <div className="loading flex justify-center items-center h-96">
            <div className="spinner border-4 border-t-4 border-blue-600 border-opacity-50 w-12 h-12 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(image.url)} // Open modal with clicked image
              >
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
            onClick={closeModal} // Close modal when clicking outside the image
            initial={{ opacity: 0 }} // Initial state of the modal
            animate={{ opacity: 1 }} // Animation when the modal appears
            exit={{ opacity: 0 }} // Animation when the modal disappears
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.5 }} // Initial state of the image (scaled down)
              animate={{ scale: 1 }} // Animation when the image pops up
              exit={{ scale: 0.5 }} // Animation when the image closes
              transition={{ duration: 0.3 }} // Duration of the animation
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-screen object-contain"
              />
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                onClick={closeModal} // Close modal when clicking the close button
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallary;
