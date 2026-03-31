import React from "react";
import "./Contact.css";
import contactbg from "../../assets/contactbg.WebP"; 

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-bg">
        <img src={contactbg} alt="Contact Background" />
      </div>
      <div className="contact-overlay">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Heritage Flavors</h2>
            <p>
              We are here to assist you with reservations, event bookings,
              or any inquiries about your stay.
            </p>
            <div className="contact-details">
              <p><strong> Address:</strong> 123 Luxury Avenue, Grand City</p>
              <p><strong> Phone:</strong> +91 98765 43210</p>
              <p><strong> Email:</strong> reservations@heritageflavors.com</p>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;