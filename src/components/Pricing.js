import React from "react";
import { useCart } from "./CartContext";

const pricingPlans = [
  { title: "8 Hours", price: "₹15000", features: ["2 holidays per month."] },
  { title: "10 Hours", price: "₹17000", features: ["2 holidays per month."] },
  { title: "24 Hours", price: "₹22000", features: ["2 holidays per month."] },
  { title: "2 Hours", price: "₹5000", features: ["2 holidays per month."] },
  { title: "4 Hours", price: "₹8000", features: ["2 holidays per month."] },
  { title: "12 Hours", price: "₹18000", features: ["2 holidays per month."] },
];

const Pricing = () => {
  const { addToCart, bookedServices } = useCart();

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Pricing</h2>
          <p className="text-gray-600 mt-2">Affordable & Transparent Rates</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-1">
                  {plan.title}
                </h3>
                <p className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.price}
                </p>
                <ul className="text-sm text-gray-600 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <button
                  onClick={() => addToCart(plan)}
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
        </div>
      </div>
    </div>
  );
};

export default Pricing;
