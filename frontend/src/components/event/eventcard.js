import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/dateFormatter';
import '../../styles/eventCard.css'; // Import the style

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card-body">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-date">{formatDate(event.date)}</p>
        <p className="event-location">{event.location}</p>
        <p className="event-description">
          {event.description.substring(0, 100)}...
        </p>
      </div>
      <div className="event-card-footer">
        <span className="event-attendees">
          {event.attendees?.length || 0} RSVPs
        </span>
        <Link to={`/events/${event.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
