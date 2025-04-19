import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import Logo from "../assets/image.png";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import Location from "./Location";
import { useCart } from "./CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const { cart } = useCart();
  const cartItemCount = cart.length;

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
      <nav className="bg-white px-4 lg:px-10 py-4 sticky top-0 z-50 shadow-md font-poppins flex items-center justify-between gap-4 flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="Logo" className="h-8 lg:h-10" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
  <ul className="flex space-x-4 items-center">
    {[
      { to: "/", text: "Home" },
      { to: "/about", text: "About" },
      { to: "/faq", text: "FAQ" },
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
      <div className="block px-2 py-2 text-gray-800 hover:text-yellow-500 cursor-pointer transition">
        Services
      </div>
      <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
        {[
          { to: "/maid", text: "Maid Services" },
          { to: "/nursing", text: "Nursing Care" },
          { to: "/electrician", text: "Electrician" },
          { to: "/plumber", text: "Plumber" },
          { to: "/drivers", text: "Drivers" },
          { to: "/housekeeping", text: "Housekeeping" },
          { to: "/cooks", text: "Cooks" },
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



        {/* Location + Right Section */}
        <div className="flex items-center gap-4 ml-auto">
          <Location />
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <Link to="/checkout" className="relative">
              <ShoppingCart size={24} className="text-gray-700 hover:text-yellow-500 transition" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User Icon */}
            <div className="relative" ref={dropdownRef}>
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
        </div>
      </nav>

      {/* Modals */}
      {showLoginForm && <LoginModal onClose={() => setShowLoginForm(false)} />}
      {showSignupForm && <SignupModal onClose={() => setShowSignupForm(false)} />}
    </>
  );
};

export default Navbar;