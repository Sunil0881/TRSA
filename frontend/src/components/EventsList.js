import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center lg:px-28">
      {events.map((event) => (
        <EventCard
          key={event._id}
          title={event.title}
          date={event.date}
          image={event.image}
        />
      ))}
    </div>
  );
};

export default EventsList;
