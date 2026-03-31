import React from "react";
import "./FineDining.css";
import contentbg from "../../assets/contentbg.WebP";
import bannerbg from "../../assets/bannerbg.WebP";

const FineDining = () => {
  return (
    <div className="fine-wrapper">
      <section
        className="fine-hero"
        style={{ backgroundImage: `url(${contentbg})` }}
      >
        <div className="hero-overlay">
          <h1>Heritage Fine Dining</h1>
          <p>An unforgettable culinary experience</p>
        </div>
      </section>
      <section className="hotel-view">
        <div className="hotel-text">
          <h2>Experience Luxury Ambience</h2>
          <p>
            Enjoy candlelit evenings, curated menus, and a serene
            atmosphere designed to elevate your dining experience.
          </p>
        </div>

        <div className="hotel-image">
          <img src={bannerbg} alt="Hotel View" />
        </div>
      </section>
      <section className="fine-card">
        <h2>👨‍🍳 Chef’s Special</h2>

        <ul className="fine-list">
          <li>
            <span>🟢 Truffle Mushroom Risotto</span>
            <span className="price">₹850</span>
          </li>

          <li>
            <span>🔴 Royal Butter Chicken</span>
            <span className="price">₹950</span>
          </li>

          <li>
            <span>🔴 Grilled Lobster Thermidor</span>
            <span className="price">₹1850</span>
          </li>
        </ul>
      </section>
      <section className="fine-card">
        <h2>🍽️ 5-Course Tasting Menu</h2>

        <ul className="tasting-list">
          <li>🥂 Welcome Drink</li>
          <li>🥗 Starter</li>
          <li>🍲 Soup</li>
          <li>🍛 Main Course</li>
          <li>🍰 Dessert</li>
        </ul>

        <div className="tasting-price">
          ₹1,999 per person
        </div>
      </section>
      <section className="booking-section">
        <h2>Reserve Your Table</h2>
        <p>Secure your exclusive fine dining experience today.</p>

        <button
          className="booking-btn"
          onClick={() => window.location.href = "/reservation"}
        >
          Book a Table
        </button>
      </section>

    </div>
  );
};

export default FineDining;