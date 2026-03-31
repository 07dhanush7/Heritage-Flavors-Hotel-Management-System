import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminManagement.css";

const AdminResortBookings = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [resortBookings, setResortBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("resortBookings")) || [];
    setResortBookings(storedBookings);
  }, []);

  const handleDeleteBooking = (id) => {
    const updatedBookings = resortBookings.filter(booking => booking.id !== id);
    setResortBookings(updatedBookings);
    localStorage.setItem("resortBookings", JSON.stringify(updatedBookings));
    toast.success("Resort booking deleted successfully");
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updatedBookings = resortBookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setResortBookings(updatedBookings);
    localStorage.setItem("resortBookings", JSON.stringify(updatedBookings));
    toast.success("Resort booking status updated");
  };

  return (
    <div className="admin-main">
      <div className="admin-sidebar">
        <h2>Heritage Flavors Admin</h2>
        <ul>
          <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/admin/reservations")}>Reservations</li>
          <li onClick={() => navigate("/admin/hotel-bookings")}>Hotel</li>
          <li onClick={() => navigate("/admin/resort-bookings")} className="active">Resort</li>
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
        <h1>Resort Bookings</h1>

        <div className="table-section">
          <h3>User Resort Bookings List</h3>
          {resortBookings.length === 0 ? (
            <p>No resort bookings available</p>
          ) : (
            <table className="management-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>User Name</th>
                  <th>Guest Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Check-In</th>
                  <th>Check-Out</th>
                  <th>Guests</th>
                  <th>Status</th>
                  <th>Booking Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {resortBookings.map(booking => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.userName || "Guest"}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.date}</td>
                    <td>{booking.timeTo}</td>
                    <td>{booking.guests}</td>
                    <td>
                      <select 
                        value={booking.status} 
                        onChange={(e) => handleUpdateStatus(booking.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
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

export default AdminResortBookings;
