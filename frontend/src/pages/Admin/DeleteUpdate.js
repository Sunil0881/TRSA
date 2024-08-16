import React, { useState, useEffect } from 'react';
import "../../Styles/Scroll.css";

const DeleteUpdate = () => {
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                const response = await fetch('https://trsabackend.vercel.app/api/updates');
                const data = await response.json();
                setUpdates(data);
            } catch (error) {
                console.error('Error fetching updates:', error);
            }
        };

        fetchUpdates();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://trsabackend.vercel.app/api/updates/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Remove the deleted update from the state
                setUpdates(updates.filter(update => update._id !== id));
                alert('Update deleted successfully!');
            } else {
                alert('Failed to delete the update. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting the update:', error);
            alert('Error deleting the update. Please try again.');
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <div className="">
                <ul className="space-y-2">
                    {updates.length > 0 ? updates.map((update) => (
                        <li key={update._id} className="update-item bg-white p-4 mb-2 flex items-center justify-between rounded-lg shadow-md hover:shadow-lg relative">
                            <span className="text-gray-700">{update.text}</span>
                            <button
                                onClick={() => handleDelete(update._id)}
                                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 z-10"
                            >
                                Delete
                            </button>
                        </li>
                    )) : <p>No updates found</p>}
                </ul>
            </div>
        </div>
    );
};

export default DeleteUpdate;
