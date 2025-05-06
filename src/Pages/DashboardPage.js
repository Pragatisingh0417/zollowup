import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const DashboardPage = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
        setError("Failed to load bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    const filtered = bookings.filter((b) =>
      statusFilter === "all" ? true : b.status === statusFilter
    );
    setFilteredBookings(filtered);
    setCurrentPage(1); // Reset page on filter change
  }, [bookings, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const currentBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-x-hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur shadow-md sticky top-0 z-30">
        <h2 className="text-2xl font-bold text-gray-800">My Account</h2>
        <button
          onClick={() => setSliderOpen(true)}
          aria-label="Open account menu"
          className="text-3xl text-gray-600 hover:text-gray-900 transition-transform transform hover:scale-110"
        >
          <FaUserCircle />
        </button>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Welcome back, {user?.name || "Guest"} 👋
          </h1>
          <p className="text-gray-600">Manage your bookings and profile with ease.</p>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-lg font-medium text-gray-700">Total Bookings</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">{bookings.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-lg font-medium text-gray-700">Upcoming</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {bookings.filter((b) => new Date(b.date) > new Date()).length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-lg font-medium text-gray-700">Support Tickets</h2>
            <p className="text-3xl font-bold text-yellow-600 mt-2">0</p>
          </div>
        </div>

        {/* Bookings Filter */}
        <div className="flex items-center gap-4 mb-4">
          <label htmlFor="status" className="font-medium text-gray-700">
            Filter:
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded border shadow text-sm"
          >
            <option value="all">All</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Booking Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">My Bookings</h2>

          {error && (
            <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
          )}

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
                {loading ? (
                  <tr>
                    <td colSpan="3" className="py-8 text-center">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                      </div>
                      <p className="text-gray-500 text-sm mt-2">Loading bookings...</p>
                    </td>
                  </tr>
                ) : currentBookings.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center py-6 text-gray-500">
                      No bookings found for selected filter.
                    </td>
                  </tr>
                ) : (
                  currentBookings.map((booking) => (
                    <tr key={booking._id} className="border-b hover:bg-gray-50">
                      <td className="py-3 pr-4">{booking.service?.name || "N/A"}</td>
                      <td className="py-3 pr-4">
                        {new Date(booking.date).toLocaleDateString(undefined, {
                          dateStyle: "medium",
                        })}
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
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === idx + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  } text-sm`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Right Slider */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg rounded-l-lg transition-transform duration-500 ease-in-out z-50 ${
          isSliderOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold">Account</h3>
          <button
            onClick={() => setSliderOpen(false)}
            aria-label="Close account menu"
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
          <Link to="/dashboard/profile" className="block text-blue-500 hover:text-blue-700">
            Edit Profile
          </Link>
          <Link to="/dashboard/help" className="block text-blue-500 hover:text-blue-700">
            Help Center
          </Link>
          <button
            onClick={handleLogout}
            className="block text-left text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </div>
      </div>

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
