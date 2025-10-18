import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Rooted in Freshness</h1>
        <p>Connecting you with the heart of Punjab's farms.</p>
      </div>
      <div className="about-content">
        <h2>Our Story</h2>
        <p>FreshCart was born from a simple idea: everyone deserves access to fresh, locally-sourced food. Founded in Ludhiana in 2025, we saw the incredible bounty of Punjab's farms and wanted to bridge the gap between the dedicated farmers and our community. We believe in supporting local agriculture, promoting healthy living, and delivering unparalleled quality directly to your kitchen.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to revolutionize the grocery experience by providing the freshest produce while fostering a sustainable food ecosystem. We are committed to fair prices for our farming partners, reducing food miles, and ensuring that every product we deliver is at its peak of flavor and nutritional value. From our fields to your family, we are FreshCart.</p>
      </div>
    </div>
  );
};

export default AboutPage;