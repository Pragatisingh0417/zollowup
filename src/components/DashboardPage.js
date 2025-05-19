import React from "react";
import { useAuth } from "../components/AuthContext";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name || "User"} 👋</h2>

      <div className="overflow-x-auto">
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
