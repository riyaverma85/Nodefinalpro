
// src/pages/About.jsx

import React from 'react';
import './About.css';
import { FaStethoscope, FaUserMd, FaMobileAlt, FaLock } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our Appointment App</h1>
        <p>
          We’re dedicated to making healthcare easier, faster, and more accessible. Our platform connects patients with experienced doctors from the comfort of their homes.
        </p>
      </section>

      <section className="about-features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <FaStethoscope className="about-icon" />
            <h4>Instant Booking</h4>
            <p>Book appointments with just a few taps. No long queues or waiting calls.</p>
          </div>
          <div className="feature-box">
            <FaUserMd className="about-icon" />
            <h4>Qualified Doctors</h4>
            <p>Our doctors are verified, experienced, and dedicated to your well-being.</p>
          </div>
          <div className="feature-box">
            <FaMobileAlt className="about-icon" />
            <h4>Accessible Anywhere</h4>
            <p>Access our platform from mobile or desktop — anytime, anywhere.</p>
          </div>
          <div className="feature-box">
            <FaLock className="about-icon" />
            <h4>Secure & Private</h4>
            <p>Your medical data is protected with top-notch security protocols.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Our Mission</h2>
        <p>
          To bridge the gap between patients and doctors by using smart technology and building trust.
          We believe in a world where healthcare is affordable, accessible, and hassle-free.
        </p>
      </section>
    </div>
  );
};

export default About;
