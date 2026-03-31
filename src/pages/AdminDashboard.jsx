import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminDashboard.css";

const AdminDashboard = ({ setIsAdmin }) => {
  const navigate = useNavigate();

  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalReservations, setTotalReservations] = useState(0);
  const [totalHotelBookings, setTotalHotelBookings] = useState(0);
  const [totalResortBookings, setTotalResortBookings] = useState(0);
  const [pendingBookings, setPendingBookings] = useState(0);
  const [completedBookings, setCompletedBookings] = useState(0);
  const [cancelledBookings, setCancelledBookings] = useState(0);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
    const hotelBookings = JSON.parse(localStorage.getItem("hotelBookings")) || [];
    const resortBookings = JSON.parse(localStorage.getItem("resortBookings")) || [];

    setTotalOrders(orders.length);
    setTotalUsers(users.length);
    setTotalReservations(reservations.length);
    setTotalHotelBookings(hotelBookings.length);
    setTotalResortBookings(resortBookings.length);

    // Calculate booking status counts
    const allBookings = [...orders, ...reservations, ...hotelBookings, ...resortBookings];
    const pending = allBookings.filter(b => b.status === "Pending").length;
    const completed = allBookings.filter(b => b.status === "Completed" || b.status === "Delivered" || b.status === "Checked-Out").length;
    const cancelled = allBookings.filter(b => b.status === "Cancelled").length;

    setPendingBookings(pending);
    setCompletedBookings(completed);
    setCancelledBookings(cancelled);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);

    toast.success("Admin Logged Out");

    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="admin-main">

      <div className="admin-sidebar">
        <h2>Heritage Flavors Admin</h2>

        <ul>
          <li onClick={() => navigate("/admin/dashboard")} className="active">Dashboard</li>
          <li onClick={() => navigate("/admin/reservations")}>Reservations</li>
          <li onClick={() => navigate("/admin/orders")}>Orders</li>
          <li onClick={() => navigate("/admin/rooms")}>Hotel Bookings</li>
          <li onClick={() => navigate("/admin/resorts")}>Resort Bookings</li>
          <li onClick={() => navigate("/admin/users")}>Users</li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="admin-content">
        <h1>Admin Dashboard</h1>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Reservations</h3>
            <p>{totalReservations}</p>
          </div>

          <div className="card">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </div>

          <div className="card">
            <h3>Hotel Bookings</h3>
            <p>{totalHotelBookings}</p>
          </div>

          <div className="card">
            <h3>Resort Bookings</h3>
            <p>{totalResortBookings}</p>
          </div>

          <div className="card pending-card">
            <h3>Pending Bookings</h3>
            <p>{pendingBookings}</p>
          </div>

          <div className="card completed-card">
            <h3>Completed Bookings</h3>
            <p>{completedBookings}</p>
          </div>

          <div className="card cancelled-card">
            <h3>Cancelled Bookings</h3>
            <p>{cancelledBookings}</p>
          </div>

          <div className="card">
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
