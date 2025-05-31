import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { io } from "socket.io-client";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchBookings = async () => {
    try {
      const res = await axios.get("/bookings");
      setBookings(res.data);
    } catch (err) {
      console.error("Failed to load bookings", err);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`/bookings/${id}/status`, { status: newStatus });
      fetchBookings();
    } catch (err) {
      console.error("Status update failed", err);
    }
  };

  const exportToExcel = () => {
    const data = bookings.map((b) => ({
      User: b.user?.name || "Guest",
      Phone: b.phone,
      Address: b.address,
      ServiceType: b.serviceType,
      MaidName: b.maidId?.name || "-",
      NurseType: b.nurseType || "-",
      Date: b.date,
      PaymentStatus: b.payment?.verified ? "Paid" : "Unpaid",
      Status: b.status,
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, "Bookings.xlsx");
  };

  useEffect(() => {
    fetchBookings();

    const socket = io("http://localhost:5000");
    socket.on("booking_update", (newBooking) => {
      setBookings((prev) => [newBooking, ...prev]);
    });

    return () => socket.disconnect();
  }, []);

  const filteredBookings = bookings.filter((b) => {
    const matchesFilter = filter === "all" || b.serviceType === filter;
    const matchesSearch =
      b.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
      b.phone?.includes(search);
    const matchesDate = (!startDate || new Date(b.date) >= new Date(startDate)) &&
                        (!endDate || new Date(b.date) <= new Date(endDate));
    return matchesFilter && matchesSearch && matchesDate;
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-6xl mx-auto mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">All Bookings</h2>
        <button
          onClick={exportToExcel}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
        >
          Export to Excel
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Services</option>
          <option value="maid">Maid</option>
          <option value="nurse">Nurse</option>
        </select>

        <input
          type="text"
          placeholder="Search by name or phone"
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <table className="w-full table-auto border-collapse border border-gray-200 text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">User</th>
            <th className="p-2 border">Service</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Payment</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((b) => (
            <tr key={b._id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedBooking(b)}>
              <td className="p-2 border">{b.user?.name || "Guest"}</td>
              <td className="p-2 border flex items-center gap-2">
                {b.serviceType === "maid" && b.maidId?.image && (
                  <img
                    src={b.maidId.image}
                    alt={b.maidId.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <span>
                  {b.serviceType === "maid" && b.maidId?.name
                    ? `Maid: ${b.maidId.name}`
                    : b.serviceType === "nurse" && b.nurseType
                    ? `Nurse: ${b.nurseType}`
                    : b.name || b.serviceType}
                </span>
              </td>
              <td className="p-2 border">{b.address || "-"}</td>
              <td className="p-2 border">{b.phone || "-"}</td>
              <td className="p-2 border">{b.date}</td>
              <td className="p-2 border">
                {b.payment?.verified ? (
                  <span className="text-green-600 font-semibold">Paid</span>
                ) : (
                  <span className="text-red-500 font-semibold">Unpaid</span>
                )}
              </td>
              <td className="p-2 border">
                <select
                  value={b.status}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => updateStatus(b._id, e.target.value)}
                  className="text-sm border rounded p-1"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <button
              onClick={() => setSelectedBooking(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Booking Details</h3>
            <p><strong>User:</strong> {selectedBooking.user?.name || "Guest"}</p>
            <p><strong>Phone:</strong> {selectedBooking.phone}</p>
            <p><strong>Address:</strong> {selectedBooking.address}</p>
            <p><strong>Service Type:</strong> {selectedBooking.serviceType}</p>
            {selectedBooking.serviceType === "maid" && (
              <p><strong>Maid Name:</strong> {selectedBooking.maidId?.name || "-"}</p>
            )}
            {selectedBooking.serviceType === "nurse" && (
              <p><strong>Nurse Type:</strong> {selectedBooking.nurseType || "-"}</p>
            )}
            <p><strong>Date:</strong> {selectedBooking.date}</p>
            <p><strong>Status:</strong> {selectedBooking.status}</p>
            <p><strong>Payment Status:</strong> {selectedBooking.payment?.verified ? "Paid" : "Unpaid"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;
