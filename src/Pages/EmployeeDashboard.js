// src/pages/EmployeeDashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const [employeeName, setEmployeeName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("employeeToken");
    if (!token) {
      navigate("/employee/login");
    } else {
      // Replace this with real fetch in production
      setEmployeeName("John Doe");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("employeeToken");
    navigate("/employee/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Dashboard</h1>
        <div className="flex items-center gap-4">
          <p className="text-gray-600">Welcome, {employeeName}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Today's Attendance</h2>
          <p className="text-green-600 font-bold">Present</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Pending Tasks</h2>
          <p className="text-yellow-600 font-bold">3 Tasks</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">New Messages</h2>
          <p className="text-blue-600 font-bold">2 Messages</p>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="p-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Announcements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>HR Meeting scheduled at 3 PM today</li>
            <li>Submit your weekly report by Friday</li>
            <li>Workplace wellness webinar next Monday</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
