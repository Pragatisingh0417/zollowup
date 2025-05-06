import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import Logo from "../assets/image.png";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import Location from "./Location";
import { useCart } from "./CartContext";
import { ChevronDown, ChevronUp } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false); // Added state for mobile services dropdown

  const dropdownRef = useRef(null);

  const { cart } = useCart();
  const cartItemCount = cart.length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
        setShowServicesDropdown(false); // Close services dropdown when clicking outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white px-4 lg:px-10 py-4 sticky top-0 z-50 shadow-md font-poppins flex items-center justify-between gap-2 flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="Logo" className="h-8 lg:h-10" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex  items-center">
            {[
              { to: "/", text: "Home" },
              { to: "/about", text: "About" },
              // { to: "/faq", text: "FAQ" },
            ].map(({ to, text }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block px-2 py-2 text-gray-800 hover:text-yellow-500 transition"
                >
                  {text}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-1 px-2 py-2 text-gray-800 hover:text-yellow-500 cursor-pointer transition">
                Services
                <ChevronDown size={16} />
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                {[
                  { to: "/maid", text: "Maid Services" },
                  { to: "/nursing", text: "Nursing Care" },
                  { to: "/electrician", text: "Electrician" },
                  { to: "/plumber", text: "Plumber" },
                  { to: "/drivers", text: "Drivers" },
                  { to: "/housekeeping", text: "Housekeeping" },

                ].map(({ to, text }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="block px-4 py-2 hover:bg-gray-100 transition"
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
                className="block px-2 py-2 text-gray-800 hover:text-yellow-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 ml-auto">
          <Location />
          <div className="flex items-center gap-2">
            {/* Cart Icon */}
            <Link to="/checkout" className="relative">
              <ShoppingCart size={24} className="text-gray-700 hover:text-yellow-500 transition" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* signup and login button */}
            <div className="flex items-center gap-2">
  <button
    onClick={() => setShowLoginForm(true)}
    className="px-5 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-yellow-100 hover:border-yellow-400 transition-all duration-200"
  >
    Login
  </button>
  <button
    onClick={() => setShowSignupForm(true)}
    className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:bg-yellow-600 text-black  text-sm font-semibold  transition-all duration-200"
  >
    Sign Up
  </button>
</div>


          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="w-full block lg:hidden mt-4">
            <ul className="flex flex-col space-y-2 text-gray-800">
              {[
                { to: "/home", text: "Home" },
                { to: "/about", text: "About" },
                // { to: "/faq", text: "FAQ" },
                { to: "/contact", text: "Contact" },

              ].map(({ to, text }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    {text}
                  </Link>
                </li>
              ))}

              {/* Services Dropdown (inlined for mobile) */}
              <li>
                <div
                  className="font-semibold px-4 py-2 cursor-pointer flex items-center justify-between"
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                >
                  Services
                  <span className="ml-2">
                    {showServicesDropdown && window.innerWidth < 768 ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </span>
                </div>
                <ul className={`pl-4 mobile-dropdown ${showServicesDropdown ? 'show' : ''}`}>
                  {[
                    { to: "/maid", text: "Maid Services" },
                    { to: "/nursing", text: "Nursing Care" },
                    { to: "/electrician", text: "Electrician" },
                    { to: "/plumber", text: "Plumber" },
                    { to: "/drivers", text: "Drivers" },
                    { to: "/housekeeping", text: "Housekeeping" },


                  ].map(({ to, text }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

            </ul>
          </div>
        )}
      </nav>

      {/* Modals */}
      {showLoginForm && <LoginModal onClose={() => setShowLoginForm(false)} />}
      {showSignupForm && <SignupModal onClose={() => setShowSignupForm(false)} />}
    </>
  );
};

export default Navbar;
