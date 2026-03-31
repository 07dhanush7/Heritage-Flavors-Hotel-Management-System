import React, { useState, useEffect } from "react";
import "./Resorts.css";
import { toast } from "react-toastify";

const Resorts = () => {
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
        timeTo: "",
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

        // Create resort booking object with user info
        const newResortBooking = {
            id: Date.now(),
            userId: currentUser.id || null,
            userName: currentUser.fullName || formData.name,
            bookingType: "Resort",
            ...formData,
            status: "Confirmed",
            bookingDate: new Date().toISOString()
        };

        // Get existing resort bookings
        const existingResorts = JSON.parse(localStorage.getItem("resortBookings")) || [];
        existingResorts.push(newResortBooking);
        localStorage.setItem("resortBookings", JSON.stringify(existingResorts));

        toast.success("Resort Booking Confirmed! ", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
        });

        setIsBooked(true);
    };

    return (
        <div className="reservation-container">
            <h1 className="reservation-title">Resort Reservation</h1>

            {isBooked ? (
                <div className="confirmation-card">
                    <h2> Resort Confirmed!</h2>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Date From:</strong> {formData.date}</p>
                    <p><strong>Time From:</strong> {formData.time}</p>
                    <p><strong>Date To:</strong> {formData.date}</p>
                    <p><strong>Time To:</strong> {formData.time}</p>
                    <p><strong>Guests:</strong> {formData.guests}</p>


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
                                timeTo: "",
                                request: "",
                            });
                        }}
                        className="reservation-btn"
                    >
                        Book Another Table
                    </button>
                </div>
            ) : (
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
                            <label>DateFrom</label>
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
                            <label>TimeFrom</label>
                            <input
                                name="time"
                                type="time"
                                required
                                value={formData.time}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div>
                            <label>DateTo</label>
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
                            <label>TimeTO</label>
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
                    <label>Special Requests</label>
                    <textarea
                        name="request"
                        rows="3"
                        value={formData.request}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit" className="reservation-btn">
                        Reserve Room
                    </button>
                </form>
            )}
        </div>
    );
};

export default Resorts;