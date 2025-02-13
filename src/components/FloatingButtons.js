import React from "react";
import { PhoneCall, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.link/xudfo1" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+91 9267987940" // Replace with your phone number
        className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <PhoneCall size={24} />
      </a>

      {/* Floating CTA Button */}
      <a
        href="/contact"
        className="bg-yellow-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-yellow-700 transition"
      >
        Get a Free Quote
      </a>
    </div>
  );
};

export default FloatingButtons;
