import React, { useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';

const AddEvents = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(''); // New state for description
  const [location, setLocation] = useState(''); // New state for location
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const maxTitleLength = 45;
  const maxDescriptionLength = 300; // Added max length for description

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Event title cannot be empty.');
      return;
    }

    const event = {
      title,
      date,
      image,
      description, // Include description
      location, // Include location
    };

    const urlvar = 'https://trsabackend.vercel.app';

    try {
      const response = await fetch(`${urlvar}/api/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Event saved successfully:', data);
        setSuccess('Event added successfully!');
        setTitle('');
        setDate('');
        setImage(null);
        setDescription('');
        setLocation('');
        setError('');
      } else {
        const errorData = await response.json();
        console.error('Failed to save the event:', errorData);
        setError('Failed to save the event. Please try again.');
      }
    } catch (error) {
      console.error('Error saving the event:', error);
      setError('Error saving the event. Please try again.');
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-center items-center py-20 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Add New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Title */}
            <div>
              <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
                maxLength={maxTitleLength}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter event title"
                required
              />
              <p className="text-gray-500 text-sm mt-2">{title.length}/{maxTitleLength} characters</p>
            </div>

            {/* Event Date */}
            <div>
              <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            {/* Event Description */}
            <div>
              <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                Event Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, maxDescriptionLength))}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter event description"
                rows="4"
              />
              <p className="text-gray-500 text-sm mt-2">{description.length}/{maxDescriptionLength} characters</p>
            </div>

            {/* Event Location */}
            <div>
              <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
                Event Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter event location"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                Event Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              {image && <img src={image} alt="Uploaded" className="mt-4 max-h-48 object-contain" />}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
