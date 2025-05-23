import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [bookingDateTime, setBookingDateTime] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const selectedService = state?.selectedService;

  useEffect(() => {
    if (!selectedService) {
      navigate("/");
    }
  }, [selectedService, navigate]);

  if (!selectedService) return null;

  const hourlyRate = selectedService.rate || 150;
  const duration = selectedService.hours || 1;
  const totalCost = hourlyRate * duration;

  const handleConfirmBooking = async () => {
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    const token = localStorage.getItem("token"); // if route is protected
    const bookingPayload = {
      serviceType: selectedService.type || "maid", // default fallback
      name: selectedService.name,
      address,
      phone,
      date: bookingDateTime,
      status: "pending",
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Remove if public
        },
        body: JSON.stringify(bookingPayload),
      });

      if (!res.ok) throw new Error("Failed to save booking");

      // Navigate to confirmation page
      navigate("/confirmation", {
        state: {
          service: selectedService,
          bookingDateTime,
          address,
          phone,
          totalCost,
        },
      });
    } catch (error) {
      console.error("❌ Booking failed:", error);
      alert("❌ Could not confirm booking. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Confirm Your Booking
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {selectedService?.image && (
            <img
              src={selectedService.image}
              alt={selectedService.name || selectedService.title}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
            />
          )}

          <div className="text-gray-700 w-full">
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="text-lg font-semibold">
                {selectedService.name || selectedService.title}
              </p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Service Type</p>
              <p>{selectedService.type || "maid"}</p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Booking Duration</p>
              <p>{duration} hours</p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Rate</p>
              <p>₹{hourlyRate}/hour</p>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-gray-500">Estimated Cost</p>
              <p className="text-lg font-bold text-green-600">₹{totalCost}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">Booking Date & Time</label>
            <input
              type="datetime-local"
              className="w-full mt-1 p-2 border rounded"
              value={bookingDateTime}
              onChange={(e) => setBookingDateTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Address</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded"
              placeholder="Your full address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Phone Number</label>
            <input
              type="tel"
              className="w-full mt-1 p-2 border rounded"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">Promo Code</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>

          <div className="text-sm text-gray-600 border p-4 rounded bg-gray-50">
            <strong>Payment Method:</strong> Pay on Arrival <br />
            (Online payment coming soon)
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <span className="text-sm text-gray-700">
              I agree to the <a href="#" className="underline">terms & cancellation policy</a>
            </span>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded-xl transition duration-300"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
