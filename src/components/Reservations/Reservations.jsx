import React, { useState, useEffect } from "react";
import "./Reservation.css";
import { toast } from "react-toastify";

const Reservation = () => {
  const today = new Date().toISOString().split("T")[0];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [isBooked, setIsBooked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    seating: "",
    request: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      toast.error("Phone number must be 10 digits", { theme: "dark" });
      return;
    }

    // Get current user from localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { fullName: "Guest" };

    // Create reservation object with user info
    const newReservation = {
      id: Date.now(),
      userId: currentUser.id || null,
      userName: currentUser.fullName || formData.name,
      ...formData,
      status: "Confirmed",
      reservationDate: new Date().toISOString()
    };

    // Get existing reservations
    const existingReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    existingReservations.push(newReservation);
    localStorage.setItem("reservations", JSON.stringify(existingReservations));

    toast.success("Table Booked Successfully! 🎉", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });

    setIsBooked(true);
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-title">Table Reservation</h1>

      {isBooked ? (
        <div className="confirmation-card">
          <h2> Reservation Confirmed!</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
          <p><strong>Seating:</strong> {formData.seating}</p>

          <p className="thank-you">
            Thank you for choosing our resort!
          </p>

          <button
            onClick={() => {
              setIsBooked(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                guests: "",
                date: "",
                time: "",
                seating: "",
                request: "",
              });
            }}
            className="reservation-btn"
          >
            Book Another Table
          </button>
        </div>
      ) : (
        /* 📝 FORM */
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            name="phone"
            type="tel"
            required
            maxLength="10"
            value={formData.phone}
            onChange={handleChange}
          />

          <div className="form-row">
            <div>
              <label>Date</label>
              <input
                name="date"
                type="date"
                min={today}
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Time</label>
              <input
                name="time"
                type="time"
                required
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <label>Number of Guests</label>
          <input
            name="guests"
            type="number"
            min="1"
            required
            value={formData.guests}
            onChange={handleChange}
          />

          <label>Seating Preference</label>
          <select
            name="seating"
            required
            value={formData.seating}
            onChange={handleChange}
          >
            <option value="">Select Seating</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor Garden">Outdoor Garden</option>
            <option value="Rooftop">Rooftop</option>
            <option value="Poolside">Poolside</option>
          </select>

          <label>Special Requests</label>
          <textarea
            name="request"
            rows="3"
            value={formData.request}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="reservation-btn">
            Reserve Table
          </button>
        </form>
      )}
    </div>
  );
};

export default Reservation;