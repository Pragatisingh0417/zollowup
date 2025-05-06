import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Redirect if no maid is selected
  if (!state || !state.selectedMaid) {
    navigate('/'); // or show an error message
    return null;
  }

  const { selectedMaid } = state;

  const handleConfirmBooking = () => {
    navigate("/confirmation");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div>
        <p className="font-semibold">Maid Selected:</p>
        <p>{selectedMaid?.name}</p>
        <p>{selectedMaid?.experience}</p>
        <p>Duration: {selectedMaid?.hours}</p>
      </div>

      <button
        onClick={handleConfirmBooking}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default CheckoutPage;
