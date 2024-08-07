import React, { useState, useEffect } from 'react';

const AddUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');

  useEffect(() => {
    // Fetch updates from the backend
    fetch('/api/updates')
      .then(response => response.json())
      .then(data => setUpdates(data))
      .catch(error => console.error('Error fetching updates from :', error));
  }, []);

  const addUpdate = () => {
    fetch('/api/updates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newUpdate }),
    })
      .then(response => response.json())
      .then(data => {
        setUpdates([...updates, data]);
        console.log('updates');
        setNewUpdate('');
      })
      .catch(error => console.error('Error adding update:', error));
  };

  const deleteUpdate = (id) => {
    fetch(`/api/updates/${id}`, {
      method: 'DELETE',
    })
      .then(() => setUpdates(updates.filter(update => update._id !== id)))
      .catch(error => console.error('Error deleting update:', error));
  };

  return (
    <div>
      <h2>Admin Updates</h2>
      <input
        type="text"
        value={newUpdate}
        onChange={(e) => setNewUpdate(e.target.value)}
        placeholder="Add a new update"
      />
      <button onClick={addUpdate}>Add Update</button>

      <ul>
        {updates.map(update => (
          <li key={update._id}>
            {update.text}
            <button onClick={() => deleteUpdate(update._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddUpdates;
