import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import DeleteAchi from './DeleteAchi'; // Assume this is your delete component

const AchievementsPost = () => {
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [level, setLevel] = useState('');
  const maxDescriptionLength = 1500;
  const maxTitleLength = 45;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload2 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage2(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveAchievement = async () => {
    const achievement = {
      title,
      description,
      year,
      level,
      image,
      image2,
    };

    const urlvar = 'https://trsabackend.vercel.app';

    try {
      const response = await fetch(`${urlvar}/api/achievementspost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(achievement),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log('Achievement saved successfully:', data);
        alert('Achievement successfully posted!!!');
      } else {
        alert('Failed to save the achievement. Please try again.');
      }
    } catch (error) {
      console.error('Error saving the achievement:', error);
      alert('Error saving the achievement. Please try again.');
    }
  };

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="px-4 md:px-6 lg:px-72 pt-20 relative">
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
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
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

        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-10 text-blue-800">
          {toggle ? "Delete Achievement" : "Post Your Achievement"}
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-500">
          {!toggle ? (
            // Achievement Post Form
            <div>
              <div className="flex justify-center pt-3 pb-3">
                <input
                  className="text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Achievement Title"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value.slice(0, maxTitleLength))
                  }
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    padding: "10px",
                  }}
                  maxLength={maxTitleLength}
                />
                <p className="text-sm text-gray-500 text-right">
                  {title.length}/{maxTitleLength} characters
                </p>
              </div>
              <div className="px-3 pb-3 lg:px-7">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "block", marginBottom: "10px" }}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload2}
                  style={{ display: "block", marginBottom: "10px" }}
                />
              </div>
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{ maxWidth: "100%", marginBottom: "10px" }}
                />
              )}
              <div className="px-3 lg:px-7">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Description"
                  value={description}
                  onChange={(e) =>
                    setDescription(
                      e.target.value.slice(0, maxDescriptionLength)
                    )
                  }
                  rows={4}
                  style={{ marginBottom: "10px" }}
                  maxLength={maxDescriptionLength}
                />
                <p className="text-sm text-gray-500 text-right">
                  {description.length}/{maxDescriptionLength} characters
                </p>
              </div>
              <div className="flex justify-center space-x-3 px-3 lg:px-7">
                <input
                  className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  style={{ marginBottom: "10px" }}
                />
                <select
                  className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  style={{ marginBottom: "10px" }}
                >
                  <option value="" disabled>
                    Select Level
                  </option>
                  <option value="International">Interational</option>
                  <option value="National">National</option>
                  <option value="State">State</option>
                  <option value="District">District</option>
                </select>
              </div>
              <div className="flex justify-center pt-10 pb-5">
                <button
                  className="bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  onClick={handleSaveAchievement}
                  style={{ marginTop: "10px", padding: "10px" }}
                >
                  Save Achievement
                </button>
              </div>
            </div>
          ) : (
            // Delete Achievement Component
            <DeleteAchi />
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPost;
