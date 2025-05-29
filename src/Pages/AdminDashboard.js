import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <Link
            to="/admin/bookings"
            className="block text-center bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            📋 View All Bookings
          </Link>
        </li>

        <li>
          <Link
            to="/admin/chat"
            className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            💬 Live Chat with Users
          </Link>
        </li>

        <li>
          <Link
            to="/admin/add-maids"
            className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            ➕ Add New Maid
          </Link>
        </li>

        <li>
          <Link
            to="/admin/nurse-bookings"
            className="block text-center bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
          >
            ➕ Add New Nurse
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
