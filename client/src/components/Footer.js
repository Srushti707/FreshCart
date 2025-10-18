import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>🥦 FreshCart</h3>
          <p>Your one-stop shop for the freshest produce, delivered directly from local farms in Punjab to your doorstep.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Shop</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Mumbai, Maharashtra, India</p>
          <p>Email: support@freshcart.example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 FreshCart. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;