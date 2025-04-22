// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import '../styles/home.css'

function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>EventEase</h1>
          <h2>Plan, Organize, and Attend Events with Ease</h2>
          <p>
            Your all-in-one platform for managing university events, tracking RSVPs, 
            and creating unforgettable experiences.
          </p>
          <div className="hero-buttons">
            {currentUser ? (
              <>
                <Link to="/events/create" className="btn btn-primary">Create Event</Link>
                <Link to="/events" className="btn btn-secondary">Browse Events</Link>
              </>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary">Get Started</Link>
                <Link to="/events" className="btn btn-secondary">Browse Events</Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Everything You Need for Successful Events</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Simple Event Planning</h3>
            <p>Create and manage events with just a few clicks. Set dates, times, and locations with ease.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>RSVP Management</h3>
            <p>Track who's attending your events and manage your guest list effortlessly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Countdown Timers</h3>
            <p>Build anticipation with event countdown timers that keep everyone excited.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How EventEase Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create an Account</h3>
            <p>Sign up for free and set up your profile in minutes.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Create or Join Events</h3>
            <p>Start planning your own events or RSVP to others.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Manage Everything</h3>
            <p>Track RSVPs, send updates, and keep your events organized.</p>
          </div>
        </div>
        <div className="cta-container">
          {!currentUser && (
            <Link to="/register" className="btn btn-large">Start Planning Today</Link>
          )}
        </div>
      </section>

      {/* Testimonials/Coming Soon */}
      <section className="coming-soon">
        <h2>Coming Soon to EventEase</h2>
        <div className="future-features">
          <div className="feature">
            <h3>Event Budget Calculator</h3>
            <p>Plan your event finances with precision.</p>
          </div>
          <div className="feature">
            <h3>Seating Arrangement Planner</h3>
            <p>Organize your attendees with visual seating charts.</p>
          </div>
          <div className="feature">
            <h3>Guest Feedback System</h3>
            <p>Collect valuable insights to improve future events.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;