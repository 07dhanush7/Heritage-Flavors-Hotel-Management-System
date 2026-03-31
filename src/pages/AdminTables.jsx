import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminManagement.css";

const AdminTables = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [tables, setTables] = useState([]);
  const [newTable, setNewTable] = useState({
    tableNumber: "",
    capacity: "",
    location: ""
  });

  useEffect(() => {
    const storedTables = JSON.parse(localStorage.getItem("tables")) || [];
    setTables(storedTables);
  }, []);

  const handleAddTable = () => {
    if (!newTable.tableNumber || !newTable.capacity || !newTable.location) {
      toast.error("Please fill all fields");
      return;
    }

    const table = {
      id: Date.now(),
      ...newTable,
      capacity: parseInt(newTable.capacity)
    };

    const updatedTables = [...tables, table];
    setTables(updatedTables);
    localStorage.setItem("tables", JSON.stringify(updatedTables));
    setNewTable({ tableNumber: "", capacity: "", location: "" });
    toast.success("Table added successfully");
  };

  const handleDeleteTable = (id) => {
    const updatedTables = tables.filter(table => table.id !== id);
    setTables(updatedTables);
    localStorage.setItem("tables", JSON.stringify(updatedTables));
    toast.success("Table deleted successfully");
  };

  return (
    <div className="admin-main">
      <div className="admin-sidebar">
        <h2>Heritage Flavors Admin</h2>
        <ul>
          <li onClick={() => navigate("/admin/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/admin/tables")} className="active">Tables</li>
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
        <h1>Manage Tables</h1>

        <div className="form-section">
          <h3>Add New Table</h3>
          <div className="form-group">
            <input
              type="number"
              placeholder="Table Number"
              value={newTable.tableNumber}
              onChange={(e) => setNewTable({ ...newTable, tableNumber: e.target.value })}
            />
            <input
              type="number"
              placeholder="Capacity"
              value={newTable.capacity}
              onChange={(e) => setNewTable({ ...newTable, capacity: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              value={newTable.location}
              onChange={(e) => setNewTable({ ...newTable, location: e.target.value })}
            />
            <button className="add-btn" onClick={handleAddTable}>Add Table</button>
          </div>
        </div>

        <div className="table-section">
          <h3>Tables List</h3>
          <table className="management-table">
            <thead>
              <tr>
                <th>Table Number</th>
                <th>Capacity</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tables.map(table => (
                <tr key={table.id}>
                  <td>{table.tableNumber}</td>
                  <td>{table.capacity}</td>
                  <td>{table.location}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDeleteTable(table.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTables;
