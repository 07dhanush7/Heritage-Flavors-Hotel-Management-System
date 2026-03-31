import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminManagement.css";

const AdminOrders = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    toast.success("Order deleted successfully");
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    toast.success("Order status updated");
  };

  return (
    <div className="admin-main">
      <div className="admin-sidebar">
        <h2>Heritage Flavors Admin</h2>
        <ul>
          <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/admin/tables")}>Tables</li>
          <li onClick={() => navigate("/admin/orders")} className="active">Orders</li>
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
        <h1>Manage Orders</h1>

        <div className="table-section">
          <h3>Food Orders List</h3>
          {orders.length === 0 ? (
            <p>No orders available</p>
          ) : (
            <table className="management-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User Name</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Order Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.userName || "Guest"}</td>
                    <td>{order.customerName}</td>
                    <td>{order.address}</td>
                    <td>{order.customerPhone}</td>
                    <td>{order.items?.length || 0} items</td>
                    <td>₹{order.total || 0}</td>
                    <td>
                      <select 
                        value={order.status} 
                        onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>
                      <button className="delete-btn" onClick={() => handleDeleteOrder(order.id)}>
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

export default AdminOrders;
