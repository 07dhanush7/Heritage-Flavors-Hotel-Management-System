import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminManagement.css";

const AdminHotelBookings = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [hotelBookings, setHotelBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("hotelBookings")) || [];
    setHotelBookings(storedBookings);
  }, []);

  const handleDeleteBooking = (id) => {
    const updatedBookings = hotelBookings.filter(booking => booking.id !== id);
    setHotelBookings(updatedBookings);
    localStorage.setItem("hotelBookings", JSON.stringify(updatedBookings));
    toast.success("Hotel booking deleted successfully");
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updatedBookings = hotelBookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setHotelBookings(updatedBookings);
    localStorage.setItem("hotelBookings", JSON.stringify(updatedBookings));
    toast.success("Hotel booking status updated");
  };

  return (
    <div className="admin-main">
      <div className="admin-sidebar">
        <h2>Heritage Flavors Admin</h2>
        <ul>
          <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/admin/reservations")}>Reservations</li>
          <li onClick={() => navigate("/admin/hotel-bookings")} className="active">Hotel</li>
          <li onClick={() => navigate("/admin/resort-bookings")}>Resort</li>
          <li onClick={() => navigate("/admin/tables")}>Tables</li>
          <li onClick={() => navigate("/admin/orders")}>Orders</li>
          <li onClick={() => navigate("/admin/users")}>Users</li>
        </ul>
        <button className="logout-btn" onClick={() => {
          localStorage.removeItem("isAdmin");
          setIsAdmin(false);
          toast.success("Logged out");
          navigate("/admin/login", { replace: true });
        }}>
          Logout
        </button>
      </div>

      <div className="admin-content">
        <h1>Hotel Bookings</h1>

        <div className="table-section">
          <h3>User Hotel Bookings List</h3>
          {hotelBookings.length === 0 ? (
            <p>No hotel bookings available</p>
          ) : (
            <table className="management-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>User Name</th>
                  <th>Guest Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Check-In Date</th>
                  <th>Guests</th>
                  <th>View Type</th>
                  <th>Status</th>
                  <th>Booking Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {hotelBookings.map(booking => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.userName || "Guest"}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.date}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.view}</td>
                    <td>
                      <select 
                        value={booking.status} 
                        onChange={(e) => handleUpdateStatus(booking.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                        <option value="Checked-In">Checked-In</option>
                        <option value="Checked-Out">Checked-Out</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                    <td>
                      <button className="delete-btn" onClick={() => handleDeleteBooking(booking.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHotelBookings;
