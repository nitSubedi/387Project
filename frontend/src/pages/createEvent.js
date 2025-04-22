import React, { useState } from 'react';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    location: '',
    date: '',
    time: '',
    status: '',
    userID: localStorage.getItem('user.username'), // Replace with actual user ID logic if needed
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://turing2.cs.olemiss.edu:8121/event/create_event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Event created successfully!');
      } else {
        setMessage(data.error || 'Error creating event.');
      }

    } catch (error) {
      console.error('Fetch error:', error);
      setMessage('Network or server error.');
    }
  };

  return (
    <div className="create-event-form">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventName" placeholder="Event Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <select name="status" onChange={handleChange} required>
          <option value="">Select Status</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>
        <input type="text" name="userID" placeholder="Organizer ID" onChange={handleChange} required />

        <button type="submit">Create Event</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateEvent;
