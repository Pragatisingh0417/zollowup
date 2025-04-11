import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import Logo from "../assets/image.png";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white px-6 py-4 sticky top-0 z-50 shadow-md font-poppins flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-4 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { to: "/", text: "Home" },
            { to: "/about", text: "About" },
            { to: "/faq", text: "FAQ" },
          ].map(({ to, text }) => (
            <li key={to}>
              <Link
                to={to}
                className="block px-5 py-2 text-gray-800 hover:text-yellow-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </Link>
            </li>
          ))}

          {/* Services Dropdown */}
          <li className="relative group">
            <div className="block px-5 py-2 text-gray-800 hover:text-yellow-500 cursor-pointer transition">
              Services
            </div>
            <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {[
                { to: "/maid", text: "Maid Services" },
                { to: "/nursing", text: "Nursing Care" },
                { to: "/drivers", text: "Drivers" },
                { to: "/cooks", text: "Cooks" },
                { to: "/electrician", text: "Electrician" },
                { to: "/plumber", text: "Plumber" },
                { to: "/housekeeping", text: "Housekeeping" },
              ].map(({ to, text }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link
              to="/contact"
              className="block px-5 py-2 text-gray-800 hover:text-yellow-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* I want a job link */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full transition"
          >
            मुझे नौकरी चाहिए..
          </button>

          {/* User Icon with Dropdown */}
          <div className="relative hidden lg:block" ref={dropdownRef}>
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <User size={24} />
            </button>

            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                <button
                  onClick={() => {
                    setShowLoginForm(true);
                    setShowUserDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setShowSignupForm(true);
                    setShowUserDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showLoginForm && <LoginModal onClose={() => setShowLoginForm(false)} />}
      {showSignupForm && <SignupModal onClose={() => setShowSignupForm(false)} />}
    </>
  );
};

export default Navbar;
