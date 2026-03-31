import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">🏛️ Heritage Flavors</h2>
          <p className="footer-description">
            Experience luxury, comfort, and fine dining all in one destination.
            Your perfect stay and unforgettable flavors await.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/restaurant">Restaurant</Link></li>
            <li><Link to="/resort">Resort</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Rooms</h3>
          <ul>
            <li>Deluxe Room</li>
            <li>Executive Suite</li>
            <li>Presidential Suite</li>
            <li>Family Villa</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p> 123 Luxury Street, Bangalore City</p>
          <p> +91 98765 43210</p>
          <p> info@heritageflavors.com</p>

          <div className="social-icons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Heritage Flavors. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;