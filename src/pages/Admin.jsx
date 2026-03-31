import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Admin.css";
//import SLbg from "../assets/SLbg.svg";

const Admin = ({ setIsAdmin }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields ");
      return;
    }

    if (
      formData.email === adminEmail &&
      formData.password === adminPassword
    ) {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", JSON.stringify(true));

      toast.success("Admin Login Successful ");
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid Admin Credentials ");
    }
  };

  return (
    <div
      className="auth-page"
    >
      <div className="auth-container">
        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Admin Password"
          onChange={handleChange}
        />

        <button className="auth-btn" onClick={handleLogin}>
          Login as Admin
        </button>
      </div>
    </div>
  );
};

export default Admin;
