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

    try {
      // 1️⃣ Create Razorpay order
      const orderRes = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalCost }),
      });

      const orderData = await orderRes.json();

      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); // or fetch from context

      const bookingPayload = {
        serviceType: selectedService.type || "maid",
        name: selectedService.name,
        address,
        phone,
        date: bookingDateTime,
        status: "confirmed",
      };

      const options = {
        key: "rzp_test_dummykey123456", // 🔁 Replace with real key later
        amount: orderData.amount,
        currency: orderData.currency,
        name: "ZollowUp",
        description: "Booking Payment",
        order_id: orderData.orderId,
        handler: async function (response) {
          // 2️⃣ Verify payment and save booking
          const verifyRes = await fetch("/api/payment/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: orderData.amount,
              currency: orderData.currency,
              userId,
              bookingPayload,
            }),
          });

          const result = await verifyRes.json();
          if (verifyRes.ok && result.verified) {
            navigate("/confirmation", {
              state: {
                service: selectedService,
                bookingDateTime,
                address,
                phone,
                totalCost,
              },
            });
          } else {
            navigate("/payment-failed");
          }
        },
        prefill: {
          name: selectedService.name || "Customer",
          email: "test@example.com",
          contact: phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("❌ Payment or Booking failed:", err);
      alert("❌ Could not complete payment. Try again.");
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
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 rounded-xl transition duration-300"
          >
            Pay ₹{totalCost} & Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
