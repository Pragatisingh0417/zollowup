import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigation function

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY < 10) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900">Wait! Before You Go...</h2>
          <p className="text-gray-600 my-4">
            Get <span className="text-blue-600 font-bold">10% OFF</span> on your first service booking.  
            Don't miss out on this limited-time offer!
          </p>
          {/* Redirect to Contact Page */}
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => navigate("/contact")}
          >
            Claim Your Discount
          </button>
          <button
            className="block mt-3 text-gray-500 text-sm hover:underline"
            onClick={() => setIsVisible(false)}
          >
            No, thanks
          </button>
        </div>
      </div>
    )
  );
};

export default ExitIntentPopup;
