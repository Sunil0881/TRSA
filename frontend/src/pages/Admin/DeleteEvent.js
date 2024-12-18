import React, { useState, useEffect } from 'react';
import '../../Styles/Scroll.css'; // Import your Scroll.css for the loader
import { BACKEND_URL } from '../../constants';
const DeleteEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(''); // Success state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/events`);
        
        // Check if the response status is OK
        if (!response.ok) {
          const errorDetails = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}. Details: ${errorDetails}`);
        }
        
        const data = await response.json();
        
        // Verify if the data is an array
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (error) {
        console.error('Error fetching events:', error.message);
        setError(`Failed to load events. Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await fetch(`https://trsabackend.vercel.app/api/events/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setEvents(events.filter((event) => event._id !== id));
          setSuccess('Event deleted successfully!');
        } else {
          const errorDetails = await response.text();
          throw new Error(`Failed to delete event. Status: ${response.status}. Details: ${errorDetails}`);
        }
      } catch (error) {
        console.error('Error deleting event:', error.message);
        setError(`Failed to delete event. Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="p-4 lg:px-28">
     

      {/* Loader or Content */}
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"> <div className="spinner"></div></div> {/* Loader style from Scroll.css */}
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-sm">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                {event.image && <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-4" />}
                <button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center">No events found</p>
          )}
        </div>
      )}

      {success && <p className="text-green-600 text-center mt-4">{success}</p>}
    </div>
  );
};

export default DeleteEvent;
