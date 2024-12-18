import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { BACKEND_URL } from '../../constants';
const AddImages = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imageUrls).then(results => setImages(results));
  };

  const handleSaveImages = async () => {
    const galleryImages = {
      images
    };

    const urlvar = `${BACKEND_URL}`;

    try {
      const response = await fetch(`${urlvar}/api/gallery`, {  // Adjusted endpoint for gallery
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(galleryImages),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log('Images saved successfully:', data);
        alert('Images successfully posted!!!');
      } else {
        alert('Failed to save the images. Please try again.');
      }
    } catch (error) {
      console.error('Error saving the images:', error);
      alert('Error saving the images. Please try again.');
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="px-4 md:px-6 lg:px-72 pt-20">
        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-10 text-blue-800">
          Add Images to Gallery
        </h1>
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-500">
          <div className="px-3 pb-3 pt-5 lg:px-7">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: 'block', marginBottom: '10px' }}
            />
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Uploaded ${index}`}
                style={{ maxWidth: '100%', marginBottom: '10px' }}
              />
            ))}
          </div>
          <div className="flex justify-center pt-10 pb-5">
            <button
              className="bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              onClick={handleSaveImages}
              style={{ marginTop: '10px', padding: '10px' }}
            >
              Save Images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImages;
