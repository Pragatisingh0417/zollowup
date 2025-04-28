import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");  // Redirect to dashboard after 3 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [navigate]);

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Booking Confirmed 🎉</h2>
      <p className="text-gray-700 mb-2">Thank you for your booking!</p>
      <p className="text-gray-600">You will be redirected to your dashboard shortly...</p>
    </div>
  );
};

export default ConfirmationPage;
