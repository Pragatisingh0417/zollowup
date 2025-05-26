import React from "react";
import { useAuth } from "./AuthContext"; // Adjust path if needed

const AdminTopbar = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-lg font-semibold">Welcome to Admin Dashboard</h1>
      <div className="text-sm text-gray-600">
        Logged in as: <span className="font-medium">{user?.name || "Admin"}</span>
      </div>
    </header>
  );
};

export default AdminTopbar;
