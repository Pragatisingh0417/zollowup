import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance"; 

const AdminNurseBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("/bookings/nurse/admin");
        setBookings(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-green-600">Admin - Nurse Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Shift</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Address</th>
                <th className="p-3 border">Notes</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={i} className="border-t text-sm">
                  <td className="p-2 border">{b.nurseType}</td>
                  <td className="p-2 border">{b.shift}</td>
                  <td className="p-2 border">{new Date(b.date).toLocaleString()}</td>
                  <td className="p-2 border">{b.phone}</td>
                  <td className="p-2 border">{b.email}</td>
                  <td className="p-2 border">{b.address}</td>
                  <td className="p-2 border">{b.notes || "-"}</td>
                  <td className="p-2 border capitalize">{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminNurseBookings;
