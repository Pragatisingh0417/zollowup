// Checkout.jsx
import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("maidCart")) || [];
    setCart(storedCart);
    const totalAmount = storedCart.reduce(
      (acc, item) => acc + parseInt(item.price.replace("₹", "")),
      0
    );
    setTotal(totalAmount);
    setFinalAmount(totalAmount);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCouponApply = () => {
    if (coupon === "SAVE20" && !appliedCoupon) {
      const discountAmount = total * 0.2;
      setDiscount(discountAmount);
      setFinalAmount(total - discountAmount);
      setAppliedCoupon(true);
    } else {
      alert("Invalid or already applied coupon.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deliveryTime) {
      alert("Please select a delivery time slot.");
      return;
    }

    console.log("Order Placed!", {
      userInfo,
      deliveryTime,
      cart,
      finalAmount,
    });

    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 text-gray-800">
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-10">
        {["Cart", "Address", "Payment"].map((step, index) => (
          <div key={index} className="flex items-center w-full">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                index === 0 ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            {index < 2 && <div className="flex-1 h-1 bg-gray-300 mx-2"></div>}
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">Checkout Summary</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No items in your cart.</p>
      ) : (
        <div className="space-y-8">
          {/* Cart Items */}
          <div className="bg-white p-6 shadow-md rounded-xl border">
            <h3 className="text-xl font-semibold mb-4">Your Selected Services</h3>
            <ul className="divide-y divide-gray-200">
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between py-3">
                  <span className="text-gray-700 font-medium">{item.title}</span>
                  <span className="text-gray-900 font-semibold">{item.price}</span>
                </li>
              ))}
            </ul>

            {/* Coupon Code */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <input
                type="text"
                placeholder="Enter Coupon Code (e.g. SAVE20)"
                className="border px-4 py-2 rounded-md w-full sm:w-2/3"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                disabled={appliedCoupon}
              />
              <button
                type="button"
                className="mt-2 sm:mt-0 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleCouponApply}
                disabled={appliedCoupon}
              >
                {appliedCoupon ? "Applied" : "Apply"}
              </button>
            </div>

            {/* Pricing Summary */}
            <div className="mt-6 space-y-2 border-t pt-4">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- ₹{discount.toFixed(0)}</span>
                </div>
              )}
              <div className="flex justify-between text-xl font-bold text-gray-800 pt-2">
                <span>Total Payable</span>
                <span>₹{finalAmount.toFixed(0)}</span>
              </div>
            </div>
          </div>

          {/* User Info Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-xl border space-y-5">
            <h3 className="text-xl font-semibold mb-4">Enter Your Details</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Delivery Time Slot */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time Slot</label>
              <select
                required
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Select a time slot --</option>
                <option value="9AM - 11AM">9AM - 11AM</option>
                <option value="11AM - 1PM">11AM - 1PM</option>
                <option value="2PM - 4PM">2PM - 4PM</option>
                <option value="4PM - 6PM">4PM - 6PM</option>
              </select>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Place Order & Pay ₹{finalAmount.toFixed(0)}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
