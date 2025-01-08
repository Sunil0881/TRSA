import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../constants";

const DeleteImage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusMessage, setStatusMessage] = useState({
    show: false,
    message: "",
    isError: false,
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/gallery`);
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      setError("Failed to load images. Please try again later.");
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) {
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/gallery/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      setImages((prevImages) => prevImages.filter((image) => image._id !== id));
      showStatusMessage("Image deleted successfully", false);
    } catch (error) {
      console.error("Error deleting image:", error);
      showStatusMessage("Failed to delete image. Please try again.", true);
    }
  };

  const showStatusMessage = (message, isError) => {
    setStatusMessage({
      show: true,
      message,
      isError,
    });

    setTimeout(() => {
      setStatusMessage({
        show: false,
        message: "",
        isError: false,
      });
    }, 3000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="w-16 h-16 border-4 rounded-full border-t-blue-500 border-b-blue-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
        {error}
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="p-8 text-center rounded-lg bg-gray-50">
        <p className="text-gray-600">No images available to delete.</p>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-2xl font-bold text-center">Gallery Images</h1>

      {statusMessage.show && (
        <div
          className={`mb-6 px-4 py-3 rounded relative ${
            statusMessage.isError
              ? "bg-red-100 border border-red-400 text-red-700"
              : "bg-green-100 border border-green-400 text-green-700"
          }`}
        >
          {statusMessage.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div
            key={image._id}
            className="relative overflow-hidden bg-white rounded-lg shadow-md group"
          >
            <div className="relative pt-[75%]">
              <img
                src={image.url} // Remove BACKEND_URL concatenation if URLs are complete
                alt={`Gallery image`}
                className="absolute top-0 left-0 object-cover w-full h-full"
                onError={(e) => {
                  e.target.src = "/api/placeholder/400/300";
                  e.target.alt = "Image failed to load";
                }}
              />
            </div>
            <button
              onClick={() => handleDelete(image._id)}
              className="absolute flex items-center justify-center w-8 h-8 text-white transition-opacity duration-200 bg-red-500 rounded-full opacity-0 top-2 right-2 group-hover:opacity-100 hover:bg-red-600"
              title="Delete image"
            >
              <span className="text-xl leading-none">&times;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteImage;