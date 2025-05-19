import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import Location from "./Location";
import { useCart } from "./CartContext";
import UserSignup from "./UserSignup";
import EmployeeLogin from "./EmployeeLogin";
import Logo from "../assets/image.png";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa"; // Make sure this is at the top



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserSignup, setShowUserSignup] = useState(false);
  const [showEmployeeLogin, setShowEmployeeLogin] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { cart } = useCart();
  const cartItemCount = cart.length;

  const isMobile = window.innerWidth < 1024;

  const handleDropdown = (menu) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  return (
    <>
      <nav className="bg-white px-4 lg:px-10 py-4 sticky top-0 z-50 shadow-md font-poppins flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 mx-auto">
          <Link to="/" className="text-gray-800 hover:text-yellow-500 transition">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-yellow-500 transition">AboutUs</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-yellow-500 transition">
              Services <ChevronDown size={16} />
            </div>
            <ul className="absolute left-0 mt-2 w-52 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {[
                { to: "/maid", text: "Maid Services" },
                { to: "/nursing", text: "Nursing Care" },
                { to: "/electrician", text: "Electrician" },
                { to: "/plumber", text: "Plumber" },
                { to: "/drivers", text: "Drivers" },
                { to: "/housekeeping", text: "Housekeeping" },
              ].map(({ to, text }) => (
                <li key={to}>
                  <Link to={to} className="block px-4 py-2 hover:bg-gray-100">{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <Link to="/contact" className="text-gray-800 hover:text-yellow-500 transition">ContactUs</Link>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="mr-2">
            <Location />
          </div>

          <Link to="/checkout" className="relative">
            <ShoppingCart size={24} className="text-gray-700 hover:text-yellow-500 transition" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setShowUserSignup(true)}
            className="flex flex-row items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-yellow-100"
          >
            <FaUser className="text-gray-700" />
            <span>User Signup</span>
          </button>

          <button
  onClick={() => setShowEmployeeLogin(true)}
  className="flex flex-row items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-sm text-black font-semibold"
>
  <FaUserTie className="text-black" />
  <span>Employee Login</span>
</button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="w-full mt-4 block lg:hidden">
            <ul className="space-y-2 text-gray-800">
              <li><Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Home</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-100">AboutUs</Link></li>

              {/* Mobile Services Dropdown */}
              <li>
                <div
                  className="flex items-center justify-between px-4 py-2 cursor-pointer"
                  onClick={() => handleDropdown("services")}
                >
                  Services {activeDropdown === "services" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {activeDropdown === "services" && (
                  <ul className="pl-6">
                    {[
                      { to: "/maid", text: "Maid Services" },
                      { to: "/nursing", text: "Nursing Care" },
                      { to: "/electrician", text: "Electrician" },
                      { to: "/plumber", text: "Plumber" },
                      { to: "/drivers", text: "Drivers" },
                      { to: "/housekeeping", text: "Housekeeping" },
                    ].map(({ to, text }) => (
                      <li key={to}>
                        <Link to={to} onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-gray-100">{text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Mobile Contact Dropdown */}
              <Link to="/contact" className="text-gray-800 hover:text-yellow-500 transition">ContactUs</Link>

            </ul>
          </div>
        )}
      </nav>

      {/* Modals */}
      {showUserSignup && <UserSignup onClose={() => setShowUserSignup(false)} />}
      {showEmployeeLogin && <EmployeeLogin onClose={() => setShowEmployeeLogin(false)} />}
    </>
  );
};

export default Navbar;
