import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://trsabackend.vercel.app/events/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEvent(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching event data:', error);
                setError('Failed to load event details.');
                setLoading(false);
            }
        };

        fetchEventData();
    }, [id]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner"></div>
                </div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <div className="px-2 md:px-12 lg:px-40 bg-white pt-4 md:pt-10 border-2">
                    <p className='text-blue-800 text-center text-2xl pb-4'>Be Part of the Event - Register Here!</p>
                   
                    <div className="w-full  h-full items-center">
                        <img className="rounded-lg shadow-md object-cover w-full h-60 md:h-80 max-w-4xl " src={event.image} alt="Event" />
                        <h2 className="text-xl md:text-3xl mt-2 md:mt-4 font-semibold text-gray-800 text-center">{event.title}</h2>
                    </div>
                    <div className="my-8 px-4">
                        <p className="text-gray-700 text-base md:text-xl">{event.description}</p>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default EventDetails;
