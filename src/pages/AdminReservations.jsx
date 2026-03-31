import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminManagement.css";

const AdminReservations = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  const handleDeleteReservation = (id) => {
    const updatedReservations = reservations.filter(res => res.id !== id);
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    toast.success("Reservation deleted successfully");
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updatedReservations = reservations.map(res =>
      res.id === id ? { ...res, status: newStatus } : res
    );
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    toast.success("Reservation status updated");
  };

  return (
    <div className="admin-main">
      <div className="admin-sidebar">
        <h2>Heritage Flavors Admin</h2>
        <ul>
          <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/admin/reservations")} className="active">Reservations</li>
          <li onClick={() => navigate("/admin/tables")}>Tables</li>
          <li onClick={() => navigate("/admin/orders")}>Orders</li>
          <li onClick={() => navigate("/admin/rooms")}>Rooms</li>
          <li onClick={() => navigate("/admin/resorts")}>Resorts</li>
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
        <h1>Table Reservations</h1>

        <div className="table-section">
          <h3>User Reservations List</h3>
          {reservations.length === 0 ? (
            <p>No reservations available</p>
          ) : (
            <table className="management-table">
              <thead>
                <tr>
                  <th>Reservation ID</th>
                  <th>User Name</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                  <th>Seating</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map(res => (
                  <tr key={res.id}>
                    <td>{res.id}</td>
                    <td>{res.userName || "Guest"}</td>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td>{res.phone}</td>
                    <td>{res.date}</td>
                    <td>{res.time}</td>
                    <td>{res.guests}</td>
                    <td>{res.seating}</td>
                    <td>
                      <select 
                        value={res.status} 
                        onChange={(e) => handleUpdateStatus(res.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <button className="delete-btn" onClick={() => handleDeleteReservation(res.id)}>
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

export default AdminReservations;
