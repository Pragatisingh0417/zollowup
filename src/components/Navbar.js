import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo-f1.jpg";
import Button from "./Button";
import SigninButton from "./SigninButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-5 py-3 sticky top-0 z-50 flex justify-between items-center shadow-md font-poppins">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-16" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex lg:space-x-2  absolute lg:static top-[100%] left-0 w-full lg:w-auto bg-white lg:bg-transparent transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {[
          { to: "/", text: "Home" },
          { to: "/about", text: "About" },
          { to: "/faq", text: "FAQ" },
          { to: "/contact", text: "Contact" },
        ].map(({ to, text }) => (
          <li key={to}>
            <Link
              to={to}
              className="relative block py-2 px-5 text-black-800 hover:text-blue-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-900 hover:after:w-full after:transition-all after:duration-300"
            >
              {text}
            </Link>
          </li>
        ))}

        {/* Dropdown Menu */}
        <li className="relative group">
          <div className="relative block py-2 px-5 text-gray-800  hover:text-blue-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-900 group-hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Services
          </div>
          <ul className="absolute left-0 mt-2 w-48 bg-black font-poppins text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            {[
              { to: "/maid", text: "Maid Services" },
              { to: "/nursing", text: "Nursing Care" },
              { to: "/drivers", text: "Drivers" },
              { to: "/cooks", text: "Cooks" },
              { to: "/electrician", text: "Electrician" },
              { to: "/plumber", text: "Plumber" },
              { to: "/housekeeping", text: "Housekeeping" },
            ].map(({ to, text }) => (
              <li key={to} className="border-b border-gray-600">
                <Link to={to} className="block px-4 py-2 hover:bg-gray-600">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden lg:flex gap-4">
      <button class="border text-gray-50   duration-300 relative group cursor-pointer rounded-full  overflow-hidden h-16 w-48  bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
      <p class="z-10 absolute bottom-5 left-10 font-roboto">SignUp</p>
    </button>        {/* <SigninButton /> */}
      </div>
    </nav>
  );
};

export default Navbar;
