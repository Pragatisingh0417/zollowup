import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 min-h-screen">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
          📊 Dashboard
        </NavLink>

        <NavLink
          to="/admin/chat"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
          💬 Chat Panel
        </NavLink>

        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
          📋 Bookings
        </NavLink>

        <NavLink
          to="/admin/maids"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
          🧹 Maids
        </NavLink>

        <NavLink
          to="/admin/nurse-bookings"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
        🧑‍⚕️ Nurses
        </NavLink>

        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
          }
        >
          🛠 Services
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;
