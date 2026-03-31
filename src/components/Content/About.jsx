import React from "react";
import "./About.css";
import contentbg from "../../assets/contentbg.WebP";
const Content = () => {
  return (
    <section className="about-lite">
      <div className="about-bg">
        <img
          src={contentbg}
          alt="About Background"
          className="about-bg-image"
        />
      </div>

      {/* Overlay Content */}
      <div className="about-overlay">
        <div className="about-container">

          <h2>About Heritage Flavors</h2>

          <p className="about-intro">
            Established with a passion for excellence, Heritage Flavors blends
            timeless hospitality with modern sophistication to create
            unforgettable experiences.
          </p>

          <div className="about-features">

            <div className="about-item">
              <h4>Luxury Accommodation</h4>
              <p>
                Elegantly designed rooms and suites crafted for comfort,
                privacy, and refined living.
              </p>
            </div>
            <div className="about-item">
              <h4>Exclusive Table Reservation</h4>
              <p>
                Secure your preferred dining time with ease and enjoy priority
                access to our finest culinary experiences.
              </p>
            </div>
            <div className="about-item">
              <h4>Exquisite Dining</h4>
              <p>
                Authentic global cuisine prepared by master chefs using
                premium ingredients.
              </p>
            </div>

            <div className="about-item">
              <h4>Resort & Leisure</h4>
              <p>
                Relax and rejuvenate with serene spaces, wellness facilities,
                and exceptional service.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Content;