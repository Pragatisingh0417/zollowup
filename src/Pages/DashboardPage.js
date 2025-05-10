import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { format, isValid, } from "date-fns";
// import AccountDetails from "../components/AccountDetails";

const DashboardPage = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const colorClasses = {
    blue: "text-blue-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
  };

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    let isMounted = true;
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings", {
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        if (isMounted) {
          const sorted = data
            .filter((b) => b.date && isValid(new Date(b.date)))
            .sort((a, b) => new Date(a.date) - new Date(b.date));
          setBookings(sorted);
        }
      } catch (err) {
        if (isMounted)
          setError("Failed to load bookings. Check your server or CORS settings.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchBookings();
    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    const filtered = bookings.filter((b) =>
      statusFilter === "all" ? true : b.status === statusFilter
    );
    setFilteredBookings(filtered);
    setCurrentPage(1);
  }, [bookings, statusFilter]);

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
          className="text-3xl text-gray-600 hover:text-gray-900"
        >
          <FaUserCircle />
        </button>
      </div>

      <main className="p-6">
        {/* Welcome Section */}
        <section className="bg-white p-6 rounded-lg shadow mb-6">
  <h1 className="text-2xl font-bold text-gray-800 mb-1">
    {user?.name || "Guest"} 👋
  </h1>
  <p className="text-gray-600">Welcome back! Your email is {user?.email || "not provided"}</p>
</section>


        {/* Stats Section */}
        <div className="flex sm:grid sm:grid-cols-3 gap-6 overflow-x-auto mb-8">
          {[
            { label: "Total Bookings", count: bookings.length, color: "blue" },
            {
              label: "Upcoming",
              count: bookings.filter((b) => new Date(b.date) > new Date()).length,
              color: "green",
            },
            { label: "Support Tickets", count: 0, color: "yellow" },
          ].map(({ label, count, color }) => (
            <div
              key={label}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <h2 className="text-lg font-medium text-gray-700">{label}</h2>
              <p className={`text-3xl font-bold mt-2 ${colorClasses[color]}`}>{count}</p>
            </div>
          ))}
        </div>

        {/* Filter */}
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
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="text-left border-b text-gray-700">
                  <th className="py-3 pr-4">Service</th>
                  <th className="py-3 pr-4">Date</th>
                  <th className="py-3 pr-4">Status</th>
                  <th className="py-3 pr-4">Review</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
                      <p className="text-gray-500 mt-2">Loading bookings...</p>
                    </td>
                  </tr>
                ) : currentBookings.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-gray-500">
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  currentBookings.map((booking) => (
                    <tr key={booking._id} className="border-b hover:bg-gray-50">
                      <td className="py-3 pr-4">{booking.service?.name || "N/A"}</td>
                      <td className="py-3 pr-4">
                        {isValid(new Date(booking.date))
                          ? format(new Date(booking.date), "PPP")
                          : "Invalid date"}
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${booking.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-200 text-gray-700"
                            }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        {booking.status === "confirmed" && (
                          <Link
                            to={`/review/${booking._id}`}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            Write Review
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-3 py-1 rounded text-sm ${currentPage === idx + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Account Slider */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg rounded-l-lg transition-transform duration-500 ease-in-out z-50 ${isSliderOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold">Your Profile</h3>
          <button
            onClick={() => setSliderOpen(false)}
            className="text-2xl hover:text-red-500"
          >
            &times;
          </button>
        </div>
        <div className="p-6 space-y-4">
  <p className="text-lg font-semibold text-gray-800">
    {user?.name || "Guest"}
  </p>
  <p className="text-sm text-gray-600">{user?.email || "Not logged in"}</p>
  <hr />
  <Link to="/dashboard/account-details" className="block text-blue-500 hover:text-blue-700">
    Account Details
  </Link>
  <Link to="/dashboard/address" className="block text-blue-500 hover:text-blue-700">
    Your Address
  </Link>
  <Link to="/dashboard/help" className="block text-blue-500 hover:text-blue-700">
    Help & Support
  </Link>
  <button
    onClick={handleLogout}
    className="block text-red-600 hover:text-red-700"
  >
    Logout
  </button>
</div>

      </div>
    </div>
  );
};

export default DashboardPage;
