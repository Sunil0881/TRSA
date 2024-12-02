import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     age: '',
    //     email: '',
    //     phone: '',
    // });
    // const [formError, setFormError] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://trsabackend.vercel.app/api/events/${id}`);
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

    const formattedDate = event ? new Date(event.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) : '';

    //const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevData => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const { name, age, email, phone } = formData;

    //     if (!name || !age || !email || !phone) {
    //         setFormError('All fields are required.');
    //         return;
    //     }

    //     try {
    //         const response = await fetch('https://trsabackend.vercel.app/api/registrations', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ ...formData, eventId: id }),
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log('Registration successful:', data);
    //             setFormData({
    //                 name: '',
    //                 age: '',
    //                 email: '',
    //                 phone: '',
    //             });
    //             setFormError(null);
    //             alert('Registration successful!');
    //         } else {
    //             const errorData = await response.json();
    //             console.error('Failed to register:', errorData);
    //             setFormError('Failed to register. Please try again.');
    //         }
    //     } catch (error) {
    //         console.error('Error registering:', error);
    //         setFormError('Error registering. Please try again.');
    //     }
    // };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner border-t-4 border-blue-800 border-solid rounded-full w-16 h-16 animate-spin"></div>
                </div>
            ) : error ? (
                <div className="text-center text-red-500 py-8">
                    <p>{error}</p>
                </div>
            ) : event ? (
                <div className="px-2 md:px-8 lg:px-52 bg-white pt-4 md:pt-10 border-2 border-gray-200 rounded-lg shadow-lg">
                    <p className='text-blue-800 text-center text-2xl font-semibold mb-4'>Be Part of the Event - Register Here!</p>
                    <div className="w-full h-full flex flex-col items-center">
                        <img className="rounded-lg shadow-md object-cover w-full h-60 md:h-80 max-w-4xl" src={event.image} alt="Event" />
                        <h2 className="text-xl md:text-3xl mt-8 font-semibold text-gray-800 text-center">{event.title}</h2>
                    </div>
                    <div className="my-8 px-4 md:px-6 lg:px-8">
                        <p className="text-gray-700 text-base md:text-xl mb-2 ">
                            <span className="font-semibold">Description:</span> {event.description || 'No description available.'}
                        </p> 
                        <p className="text-gray-700 text-base md:text-xl mb-2 lg:pt-5">
                            <span className="font-semibold">Location:</span> {event.location || 'Location not specified.'}
                        </p>
                        <p className="text-gray-700 text-base md:text-xl lg:pt-5">
                            <span className="font-semibold">Date:</span> {formattedDate}
                        </p>
                    </div>
                    <div className="my-8 px-4 md:px-6 lg:px-72">
                        {/* <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Register for the Event</h3>
                            {formError && (
                                <p className="text-red-500 mb-4">{formError}</p>
                            )}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="age" className="block text-gray-700 font-semibold mb-1">Age</label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    placeholder="Your age"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    placeholder="Your phone number"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700"
                            >
                                Register
                            </button>
                        </form> */}
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-500 py-8">
                    <p>No event details available.</p>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default EventDetails;
