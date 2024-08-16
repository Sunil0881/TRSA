import React, { useState, useEffect } from 'react';
import Navbar from '../../components/AdminNavbar';

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);
  const [events, setEvents] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [ageRange, setAgeRange] = useState([0, 100]); // Default range
  const [showFilters, setShowFilters] = useState(false); // State to control filter visibility

  // Fetch registrations and events
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('https://trsabackend.vercel.app/api/registrations');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setRegistrations(data);
        setFilteredRegistrations(data); // Initialize with all registrations
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await fetch('https://trsabackend.vercel.app/api/events');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchRegistrations();
    fetchEvents();
  }, []);

  // Get event name from ID
  const getEventName = (eventId) => {
    const event = events.find(event => event._id === eventId);
    return event ? event.title : 'Unknown Event';
  };

  // Filter registrations based on selected filters
  useEffect(() => {
    let filtered = registrations;

    if (selectedEvent) {
      filtered = filtered.filter(registration => registration.eventId === selectedEvent);
    }

    filtered = filtered.filter(registration => registration.age >= ageRange[0] && registration.age <= ageRange[1]);

    setFilteredRegistrations(filtered);
  }, [selectedEvent, ageRange, registrations]);

  // Handle event change
  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  // Handle age range change
  const handleAgeChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setAgeRange([min, max]);
  };

  // Handle delete registration
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this registration?')) {
      try {
        const response = await fetch(`https://trsabackend.vercel.app/api/registrations/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Update the list after deletion
          setRegistrations(registrations.filter(registration => registration._id !== id));
          setFilteredRegistrations(filteredRegistrations.filter(registration => registration._id !== id));
          alert('Registration deleted successfully!');
        } else {
          alert('Failed to delete the registration. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting the registration:', error);
        alert('Error deleting the registration. Please try again.');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">All Registration Data</h1>

        {/* Show Filters Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowFilters(prev => !prev)}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            {/* Event Dropdown */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label htmlFor="event" className="block text-base font-medium text-gray-800 mb-2">Event</label>
              <select
                id="event"
                value={selectedEvent}
                onChange={handleEventChange}
                className="w-full border border-gray-300 rounded-lg p-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="">Select Event</option>
                {events.map(event => (
                  <option key={event._id} value={event._id}>{event.title}</option>
                ))}
              </select>
            </div>

            {/* Age Range */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label htmlFor="age" className="block text-base font-medium text-gray-800 mb-2">Age Range</label>
              <select
                id="age"
                onChange={handleAgeChange}
                className="w-full border border-gray-300 rounded-lg p-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                <option value="0-100">All Ages</option>
                <option value="0-18">0-18</option>
                <option value="19-30">19-30</option>
                <option value="31-50">31-50</option>
                <option value="51-100">51-100</option>
              </select>
            </div>
          </div>
        )}

        {/* Registrations Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-black">
                <th className="py-3 px-6 text-left">S.no</th>
                <th className="py-3 px-6 text-left">Event Name</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Age</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Actions</th> {/* Added Actions column */}
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.length > 0 ? (
                filteredRegistrations.map((registration, index) => (
                  <tr key={registration._id} className="bg-white border-b hover:bg-gray-100">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{getEventName(registration.eventId)}</td>
                    <td className="py-3 px-6">{registration.name}</td>
                    <td className="py-3 px-6">{registration.age}</td>
                    <td className="py-3 px-6">{registration.email}</td>
                    <td className="py-3 px-6">{registration.phone}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleDelete(registration._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-3 px-6 text-center">No registrations found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegistrationList;
