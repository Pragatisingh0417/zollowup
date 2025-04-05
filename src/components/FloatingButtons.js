import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Import icons

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
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

      {/* Floating CTA Button */}
      <a
        href="/contact"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-dark px-5 py-3 rounded-full shadow-lg transition"
      >
        Get a Free Quote
      </a>
    </div>
  );
};

export default FloatingButtons;
