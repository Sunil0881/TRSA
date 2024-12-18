import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import '../Styles/Scroll.css'; // Import your Scroll.css for the loader
import { BACKEND_URL } from '../constants';
const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state
  const [error, setError] = useState(null); // Error state

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

  return (
    <div className="p-4 lg:px-28">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>

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
              <EventCard
                key={event._id}
                id={event._id}
                title={event.title}
                date={event.date}
                image={event.image}
              />
            ))
          ) : (
            <p className="text-center">No events found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventsList;
