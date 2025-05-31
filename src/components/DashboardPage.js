import React, { useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import { io } from "socket.io-client";

const DashboardPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate(); // ✅ redirect hook

  // ✅ Prevent guests from seeing dashboard
  useEffect(() => {
    if (!loading && !user) {
      navigate("/user-login");
    }
  }, [loading, user, navigate]);

  // ✅ Setup Socket.IO only once
  useEffect(() => {
    const socket = io("http://localhost:5000", {
      withCredentials: true,
    });

    socket.emit("hello", "Hello from frontend (Dashboard)");

    socket.on("welcome", (msg) => {
      console.log("✅ Message from server:", msg);
    });

    socket.on("booking_update", (data) => {
      console.log("📢 Real-time booking received:", data);
      alert("New booking received!\nService: " + data.serviceType);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // ✅ Show loading first
  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  // ✅ Once loaded and authenticated
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mt-6">
      <h2>{user ? `Welcome ${user.name}` : "Welcome Guest"}</h2>

      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full border border-gray-200">
          <tbody className="divide-y">
            <tr>
              <td className="font-medium p-2 w-1/3">Name</td>
              <td className="p-2">{user?.name || "-"}</td>
            </tr>
            <tr>
              <td className="font-medium p-2">Email</td>
              <td className="p-2">{user?.email || "-"}</td>
            </tr>
            <tr>
              <td className="font-medium p-2">Address</td>
              <td className="p-2">{user?.address || "-"}</td>
            </tr>
            <tr>
              <td className="font-medium p-2">Phone</td>
              <td className="p-2">{user?.phone || "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-right">
        <p className="mb-2 text-gray-600">Want to update your profile?</p>
        <Link
          to="/dashboard/edit-profile"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
