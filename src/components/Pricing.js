import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  { title: "8 Hours", price: "₹15000", features: ["2 holidays per month."] },
  { title: "10 Hours", price: "₹17000", features: ["2 holidays per month."] },
  { title: "24 Hours", price: "₹22000", features: ["2 holidays per month."] },
  { title: "2 Hours", price: "₹5000", features: ["2 holidays per month."] },
  { title: "4 Hours", price: "₹8000", features: ["2 holidays per month."] },
  { title: "12 Hours", price: "₹18000", features: ["2 holidays per month."] },
];

const Pricing = () => {
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [bookedServices, setBookedServices] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem("maidCart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("maidCart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (plan) => {
    setCart([...cart, plan]);
    setBookedServices((prevBookedServices) => {
      const updatedServices = new Set(prevBookedServices);
      updatedServices.add(plan.title);
      return updatedServices;
    });
  };

  const handleRemove = (index) => {
    const itemToRemove = cart[index];
  
    // Remove from cart
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  
    // Remove from bookedServices
    const newBooked = new Set(bookedServices);
    newBooked.delete(itemToRemove.title);
    setBookedServices(newBooked);
  };
  

  const getTotal = () =>
    cart.reduce((acc, item) => acc + parseInt(item.price.replace("₹", "")), 0);

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">Our Pricing</h2>
      <p className="text-gray-600 mt-2">Affordable & Transparent Rates</p>
    </div>

    {/* Two-column layout */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      {/* Left: Pricing cards (3/4 width) */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 text-center"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-1">{plan.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mb-2">{plan.price}</p>
            <ul className="text-sm text-gray-600 mb-4">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <button
              onClick={() => handleAddToCart(plan)}
              className={`w-full py-2 rounded-lg font-medium transition ${
                bookedServices.has(plan.title)
                  ? "bg-white text-green-600 border border-green-600 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
              disabled={bookedServices.has(plan.title)}
            >
              {bookedServices.has(plan.title) ? "Booked" : "Book Now"}
            </button>
          </div>
        ))}
      </div>

      {/* Right: Cart (1/4 width) */}
      <div className="sticky top-24 h-fit bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Your Cart</h3>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">No services added yet.</p>
        ) : (
          <ul className="text-sm text-gray-700 divide-y max-h-60 overflow-y-auto mb-3">
            {cart.map((item, i) => (
              <li key={i} className="py-2 flex justify-between items-center">
                <span>{item.title}</span>
                <button
                  onClick={() => handleRemove(i)}
                  className="text-red-500 hover:text-red-600 text-xs"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <>
            <div className="flex justify-between font-semibold text-sm mb-3">
              <span>Total:</span>
              <span>₹{getTotal()}</span>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default Pricing;
