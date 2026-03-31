import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminManagement.css";

const AdminUsers = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("User deleted successfully");
  };

  return (
    <div className="admin-main">
      <div className="admin-sidebar">
        <h2>Heritage Flavors Admin</h2>
        <ul>
          <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/admin/tables")}>Tables</li>
          <li onClick={() => navigate("/admin/orders")}>Orders</li>
          <li onClick={() => navigate("/admin/rooms")}>Rooms</li>
          <li onClick={() => navigate("/admin/resorts")}>Resorts</li>
          <li onClick={() => navigate("/admin/users")} className="active">Users</li>
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
        <h1>Manage Users</h1>

        <div className="table-section">
          <h3>Users List</h3>
          {users.length === 0 ? (
            <p>No users registered yet</p>
          ) : (
            <table className="management-table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Joined Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>
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

export default AdminUsers;
