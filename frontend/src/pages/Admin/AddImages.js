import React, { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar"; 
import { BACKEND_URL } from "../../constants";
import DeleteImage from "./DeleteImage";

const AddImages = () => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imageUrls).then((results) => setImages(results));
  };

  const handleSaveImages = async () => {
    const galleryImages = {
      images,
    };

    const urlvar = `${BACKEND_URL}`;

    try {
      const response = await fetch(`${urlvar}/api/gallery`, {
        // Adjusted endpoint for gallery
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(galleryImages),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log("Images saved successfully:", data);
        alert("Images successfully posted!!!");
      } else {
        alert("Failed to save the images. Please try again.");
      }
    } catch (error) {
      console.error("Error saving the images:", error);
      alert("Error saving the images. Please try again.");
    }
  };

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="relative px-4 pt-20 md:px-6 lg:px-72">
        {/* Toggle Button */}
        <div className="absolute top-0 right-0 mt-5 mr-5">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={toggle}
              onChange={handleToggleChange}
            />
            <div className="relative">
              <div className="block h-8 bg-gray-600 rounded-full w-14"></div>
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform transform ${
                  toggle ? "translate-x-full bg-red-500" : "bg-green-500"
                }`}
              >
                {toggle ? (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </label>
        </div>

        <h1 className="pb-10 text-2xl font-semibold text-center text-blue-800 md:text-4xl">
          {toggle ? "Delete Image" : "Add New Image"}
        </h1>

        <div className="bg-white shadow-2xl rounded-3xl shadow-slate-500">
          {!toggle ? (
            // Add Update Form
            <div className="max-w-md p-6 mx-auto">
              <h2 className="mb-2 text-2xl font-semibold text-blue-800">
                Add Images to Gallery
              </h2>
              <div className="bg-white shadow-2xl rounded-3xl shadow-slate-500">
                <div className="px-3 pt-5 pb-3 lg:px-7">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    style={{ display: "block", marginBottom: "10px" }}
                  />
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Uploaded ${index}`}
                      style={{ maxWidth: "100%", marginBottom: "10px" }}
                    />
                  ))}
                </div>
                <div className="flex justify-center pt-10 pb-5">
                  <button
                    className="py-2 text-white transition duration-300 bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleSaveImages}
                    style={{ marginTop: "10px", padding: "10px" }}
                  >
                    Save Images
                  </button>
                </div>
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              {success && (
                <p className="mt-2 text-sm text-green-600">{success}</p>
              )}
            </div>
          ) : (
            // Delete Update Component
            <DeleteImage />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddImages;
