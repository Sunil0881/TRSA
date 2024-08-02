import React, { useState } from 'react';

const AchievementsPost = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [level, setLevel] = useState('');
  const maxDescriptionLength = 325;
  const maxTitleLength = 45;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
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
    };

    const urlvar = 'http://localhost:5000';

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

  return (
    <div className="px-4 md:px-6 lg:px-72 pt-20">
      <h1 className="text-2xl md:text-4xl font-semibold text-center pb-10">
        Post Your Achievement
      </h1>
      <div className="bg-white rounded-3xl shadow-2xl shadow-slate-500">
        <div className="flex justify-center pt-3 pb-3">
          <input
            className="text-center"
            type="text"
            placeholder="Achievement Title"
            value={title}
            onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
            style={{ display: 'block', marginBottom: '10px', padding: '10px' }}
            maxLength={maxTitleLength}
          />
          <p className="text-sm text-gray-500 text-right">{title.length}/{maxTitleLength} characters</p>
        </div>
        <div className="px-3 pb-3 lg:px-7">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </div>
        {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginBottom: '10px' }} />}
        <div className="px-3 lg:px-7">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value.slice(0, maxDescriptionLength))}
            rows={4}
            style={{ marginBottom: '10px' }}
            maxLength={maxDescriptionLength}
          />
          <p className="text-sm text-gray-500 text-right">{description.length}/{maxDescriptionLength} characters</p>
        </div>
        <div className="flex justify-center space-x-3 px-3 lg:px-7">
          <input
            className="w-1/2 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <input
            className="w-1/2 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
        </div>
        <div className="flex justify-center pt-10 pb-5">
          <button
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            onClick={handleSaveAchievement}
            style={{ marginTop: '10px', padding: '10px' }}
          >
            Save Achievement
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPost;
