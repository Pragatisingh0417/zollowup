// src/components/AdminBookings.jsx
import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("/bookings"); // assumes this returns all
        setBookings(res.data);
      } catch (err) {
        console.error("Failed to load bookings", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-5xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
      <table className="w-full table-auto border-collapse border border-gray-200 text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">User</th>
            <th className="p-2 border">Service</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id} className="hover:bg-gray-50">
              <td className="p-2 border">{b.name || "Anonymous"}</td>
              <td className="p-2 border capitalize">{b.serviceType}</td>
              <td className="p-2 border">{b.date}</td>
              <td className="p-2 border">
                <span
                  className={`px-2 py-1 rounded-full text-white text-xs ${
                    b.status === "pending"
                      ? "bg-yellow-500"
                      : b.status === "confirmed"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {b.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBookings;
