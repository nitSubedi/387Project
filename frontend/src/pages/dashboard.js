import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

function Dashboard() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {currentUser.username}</h2>
      <p className="user-role"> Role: {currentUser.role === 1 ? "Admin" : "User"}</p>

      {currentUser.role === 1 ? (
        <div className="admin-panel">
          <h3>Admin Tools</h3>
          <ul>
            <li><Link to="/admin/pending-events">Approve Events</Link></li>
            <li><Link to="/admin/manage-volunteers">Assign Volunteers</Link></li>
            <li><Link to="/admin/stats">View Analytics</Link></li>
          </ul>
        </div>
      ) : (
        <div className="user-panel">
          <h3>Your Events</h3>
          <ul>
            <li><Link to="/events/create">Create New Event</Link></li>
            <li><Link to="/events/registered">View Registered Events</Link></li>
            <li><Link to="/events/invites">Manage Invitations</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
