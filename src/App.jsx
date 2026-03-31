import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Orders from "./pages/Orders";
import Dining from "./pages/Dining";
import Hotels from "./pages/Hotels";
import Resort from "./pages/Resort";
import Services from "./components/Serives/Servies";
import Contact from "./components/Contact/Contact";
import About from "./components/Content/About";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminTables from "./pages/AdminTables";
import AdminOrders from "./pages/AdminOrders";
import AdminRooms from "./pages/AdminRooms";
import AdminResorts from "./pages/AdminResorts";
import AdminUsers from "./pages/AdminUsers";
import AdminReservations from "./pages/AdminReservations";
import AdminHotelBookings from "./pages/AdminHotelBookings";
import AdminResortBookings from "./pages/AdminResortBookings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isAuthRoute = location.pathname === "/login" || location.pathname === "/register" || (location.pathname === "/" && !isLoggedIn);

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(user));
    }

    // Check if admin is logged in
    const admin = localStorage.getItem("isAdmin");
    if (admin) {
      setIsAdmin(JSON.parse(admin));
    }
  }, []);

  return (
    <>
      {!isAdminRoute && !isAuthRoute && <Navbar />}

      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/menu" element={isLoggedIn ? <Menu /> : <Navigate to="/login" replace />} />
        <Route path="/reservation" element={isLoggedIn ? <Reservation /> : <Navigate to="/login" replace />} />
        <Route path="/orders" element={isLoggedIn ? <Orders /> : <Navigate to="/login" replace />} />
        <Route path="/dining" element={isLoggedIn ? <Dining /> : <Navigate to="/login" replace />} />
        <Route path="/hotels" element={isLoggedIn ? <Hotels /> : <Navigate to="/login" replace />} />
        <Route path="/resorts" element={isLoggedIn ? <Resort /> : <Navigate to="/login" replace />} />
        <Route path="/services" element={isLoggedIn ? <Services /> : <Navigate to="/login" replace />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" replace />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin/login"
          element={<Admin setIsAdmin={setIsAdmin} />}
        />
        <Route
          path="/admin/dashboard"
          element={
            isAdmin
              ? <AdminDashboard setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
        <Route
          path="/admin/tables"
          element={
            isAdmin
              ? <AdminTables setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
        <Route
          path="/admin/orders"
          element={
            isAdmin
              ? <AdminOrders setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
        <Route
          path="/admin/rooms"
          element={
            isAdmin
              ? <AdminRooms setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
        <Route
          path="/admin/resorts"
          element={
            isAdmin
              ? <AdminResorts setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
        <Route
          path="/admin/users"
          element={
            isAdmin
              ? <AdminUsers setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
        <Route
          path="/admin/reservations"
          element={
            isAdmin
              ? <AdminReservations setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
        <Route
          path="/admin/hotel-bookings"
          element={
            isAdmin
              ? <AdminHotelBookings setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
        <Route
          path="/admin/resort-bookings"
          element={
            isAdmin
              ? <AdminResortBookings setIsAdmin={setIsAdmin} />
              : <Navigate to="/admin/login" replace />
          }
        />
      </Routes>
      {!isAdminRoute && !isAuthRoute && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;