import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <h1>Get In Touch</h1>
      <p className="contact-intro">Have a question or a suggestion? We'd love to hear from you!</p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> 123 Farm Lane, Mumbai, Maharashtra, India</p>
          <p><strong>Phone:</strong> +91 123 456 7890</p>
          <p><strong>Email:</strong> support@freshcart.example.com</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;