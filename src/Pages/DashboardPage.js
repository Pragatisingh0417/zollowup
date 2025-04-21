import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const DashboardPage = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings"); 
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-x-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur shadow-md sticky top-0 z-30">
        <h2 className="text-2xl font-bold text-gray-800">My Account</h2>
        <button
          onClick={() => setSliderOpen(true)}
          className="text-3xl text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110"
        >
          <FaUserCircle />
        </button>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <section className="bg-gradient-to-r from-white to-gray-100 p-6 rounded-lg shadow mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Welcome back, {user?.name || "Guest"} 👋
          </h1>
          <p className="text-gray-600">Here’s your latest account activity at a glance.</p>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Total Bookings", value: bookings.length },
            {
              label: "Upcoming Services",
              value: bookings.filter(b => new Date(b.date) > new Date()).length,
            },
            { label: "Support Tickets", value: 0 },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <h2 className="text-lg font-medium text-gray-700">{stat.label}</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Booking Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">My Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="text-left border-b text-gray-700">
                  <th className="py-3 pr-4">Service</th>
                  <th className="py-3 pr-4">Date</th>
                  <th className="py-3 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="py-4 text-center text-gray-500">
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking._id} className="border-b hover:bg-gray-50">
                      <td className="py-3 pr-4">{booking.service?.name || "N/A"}</td>
                      <td className="py-3 pr-4">
                        {new Date(booking.date).toLocaleDateString()}
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold inline-block ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Right Slider Panel */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg rounded-l-lg transition-transform duration-500 z-50 ${
          isSliderOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold">Account</h3>
          <button
            onClick={() => setSliderOpen(false)}
            className="text-2xl hover:text-red-500 transition"
          >
            &times;
          </button>
        </div>
        <div className="p-6 space-y-4">
          <p>
            <strong className="text-lg text-gray-800">{user?.name || "Guest"}</strong>
          </p>
          <p className="text-sm text-gray-600">{user?.email || "Not logged in"}</p>
          <hr />
          <Link to="/dashboard/profile" className="block text-blue-500 hover:text-blue-700 transition">
            Edit Profile
          </Link>
          <Link to="/dashboard/help" className="block text-blue-500 hover:text-blue-700 transition">
            Help Center
          </Link>
          <button
            onClick={handleLogout}
            className="block text-left text-red-500 hover:text-red-700 transition"
          >
            Logout
          </button>
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
