import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://trsabackend.vercel.app/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-4 lg:px-28">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {events.map((event) => (
          <EventCard
            key={event._id}
            id={event._id}  
            title={event.title}
            date={event.date}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsList;
