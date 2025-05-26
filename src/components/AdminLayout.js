import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <AdminTopbar />

        {/* Page Content */}
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet /> {/* Nested admin routes render here */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
