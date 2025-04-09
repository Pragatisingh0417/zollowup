import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // Make sure this path is correct
import { FaUserCircle } from "react-icons/fa";

const DashboardPage = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const bookings = [
    { id: 1, service: "Maid", date: "2025-04-10", status: "Confirmed" },
    { id: 2, service: "Plumber", date: "2025-04-12", status: "Pending" },
    { id: 3, service: "Cook", date: "2025-04-15", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-x-hidden">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h2 className="text-2xl font-bold">My Account</h2>
        <button onClick={() => setSliderOpen(true)} className="text-3xl text-gray-700 hover:text-black">
          <FaUserCircle />
        </button>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Welcome back, {user?.name || "Guest"} 👋
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold">Total Bookings</h2>
            <p className="text-3xl font-bold mt-2">{bookings.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold">Upcoming Services</h2>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold">Support Tickets</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
        </div>

        {/* Booking Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">My Bookings</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Service</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="py-2">{booking.service}</td>
                  <td className="py-2">{booking.date}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        booking.status === "Confirmed"
                          ? "bg-green-200 text-green-800"
                          : booking.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Right Slider Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 z-50 ${
          isSliderOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold">Account</h3>
          <button onClick={() => setSliderOpen(false)} className="text-2xl">&times;</button>
        </div>
        <div className="p-6 space-y-4">
          <p><strong>{user?.name || "Guest"}</strong></p>
          <p className="text-sm text-gray-600">{user?.email || "Not logged in"}</p>
          <hr />
          <Link to="/dashboard/profile" className="block text-blue-600 hover:underline">Edit Profile</Link>
          <Link to="/dashboard/help" className="block text-blue-600 hover:underline">Help Center</Link>
          <button onClick={handleLogout} className="block text-red-500 hover:underline">Logout</button>
        </div>
      </div>

      {/* Background overlay */}
      {isSliderOpen && (
        <div
          onClick={() => setSliderOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        ></div>
      )}
    </div>
  );
};

export default DashboardPage;
