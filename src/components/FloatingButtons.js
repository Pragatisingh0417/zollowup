import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ChatBox from "./ChatBox"; // ✅ Adjust path if needed
import { useAuth } from "./AuthContext"; // ✅ Adjust path if needed

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useAuth(); // ✅ Get current user

  // Show arrow when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed bottom-20 right-4 flex flex-col items-end gap-4 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.link/xudfo1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Call Button */}
        <a
          href="tel:+91 9267987940"
          className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaPhoneAlt size={24} />
        </a>

        {/* CTA Button */}
        <Link
          to="/employee-form"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full transition"
        >
          मुझे नौकरी चाहिए..
        </Link>

        {/* Scroll to Top Button */}
        <div
          className={`transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full shadow-xl hover:scale-110 transition transform animate-bounce"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* ✅ ChatBox - only show if user is logged in */}
      {user?.name && <ChatBox currentUser={user} />}
    </>
  );
};

export default FloatingButtons;
