import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Redirect if no maid is selected
  if (!state || !state.selectedMaid) {
    navigate("/");
    return null;
  }

  const { selectedMaid } = state;

  const handleConfirmBooking = () => {
    navigate("/confirmation");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Confirm Your Booking
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {selectedMaid?.image && (
            <img
              src={selectedMaid.image}
              alt={selectedMaid.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
            />
          )}

          <div className="text-gray-700 w-full">
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="text-lg font-semibold">{selectedMaid.name}</p>
            </div>
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Experience</p>
              <p>{selectedMaid.experience}</p>
            </div>
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Booking Duration</p>
              <p>{selectedMaid.hours || "N/A"} hours</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirmBooking}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded-xl transition duration-300"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
