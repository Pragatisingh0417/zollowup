import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // adjust if needed

const AdminDashboard = () => {
  const { user } = useAuth();

  if (!user?.isAdmin) {
    console.log("👤 user = ", user);
console.log("✅ isAdmin = ", user?.isAdmin);

    return <p>Loading user...</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/admin/add-maid"
            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
          >
            ➕ Add Maid
          </Link>
        </li>
        <li>
          <Link
            to="/admin/add-nurse"
            className="block bg-green-600 text-white text-center py-2 rounded hover:bg-green-700"
          >
            ➕ Add Nurse
          </Link>
        </li>
        <li>
          <Link
            to="/admin/bookings"
            className="block bg-purple-600 text-white text-center py-2 rounded hover:bg-purple-700"
          >
            📋 View Bookings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
