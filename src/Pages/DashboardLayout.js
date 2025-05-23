// DashboardLayout.jsx
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { FaBox, FaMapMarkerAlt, FaPhone, FaSignOutAlt, FaUser, FaComments } from 'react-icons/fa';

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">My Account</h2>
        </div>
        <nav className="p-4 space-y-4 text-gray-700 text-sm">
          <Link to="/dashboard" className="flex items-center hover:text-blue-600"><FaUser className="mr-2" /> Dashboard</Link>
          <Link to="/dashboard/orders" className="flex items-center hover:text-blue-600"><FaBox className="mr-2" /> Order history</Link>
          <Link to="/dashboard/addresses" className="flex items-center hover:text-blue-600"><FaMapMarkerAlt className="mr-2" /> Addresses</Link>
          <Link to="/dashboard/my-reviews" className="flex items-center hover:text-blue-600">
            📝 My Reviews
          </Link>
                    <Link to="/dashboard/chat" className="flex items-center hover:text-blue-600"><FaComments className="mr-2" /> Chat with us</Link>

          <Link to="/dashboard/contact" className="flex items-center hover:text-blue-600"><FaPhone className="mr-2" /> Contact Us</Link>

          <button onClick={handleLogout} className="flex items-center text-red-600 hover:text-red-800"><FaSignOutAlt className="mr-2" /> Logout</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
