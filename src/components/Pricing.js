import React from "react";
import { useCart } from "./CartContext";

const pricingPlans = [
  { title: "8 Hours", price: "₹15000", features: ["2 holidays per month."] },
  { title: "10 Hours", price: "₹17000", features: ["2 holidays per month."], mostPopular: true },
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
          <p className="text-gray-600 mt-2">You can a service and proceed for the confirmation then will get in touch with you.</p>

        </div>

        {/* First row: 4 cards */}
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          {pricingPlans.slice(0, 4).map((plan, idx) => (
            <div
              key={idx}
              className="relative w-full sm:w-[calc(50%-10px)] lg:w-64 bg-white p-5 rounded-xl border transition-all duration-300 text-center shadow-sm hover:shadow-md hover:border-blue-500"
            >
              {plan.mostPopular && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-700 mb-1">{plan.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">{plan.price}</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button
                onClick={() => addToCart(plan)}
                disabled={bookedServices.has(plan.title)}
                className={`w-full py-2 rounded-lg font-medium transition ${
                  bookedServices.has(plan.title)
                    ? "bg-white text-blue-600 border border-blue-600 cursor-not-allowed"
                    : "bg-blue-900 text-white hover:bg-blue-700"
                }`}
              >
                {bookedServices.has(plan.title) ? "Added to cart" : "Book Now"}
              </button>
            </div>
          ))}
        </div>

        {/* Second row: center 2 cards */}
        <div className="flex justify-center gap-5">
          {pricingPlans.slice(4).map((plan, idx) => (
            <div
              key={idx}
              className="relative w-full sm:w-[calc(50%-10px)] lg:w-64 bg-white p-5 rounded-xl border transition-all duration-300 text-center shadow-sm hover:shadow-md hover:border-blue-500"
            >
              {plan.mostPopular && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-700 mb-1">{plan.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">{plan.price}</p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button
                onClick={() => addToCart(plan)}
                disabled={bookedServices.has(plan.title)}
                className={`w-full py-2 rounded-lg font-medium transition ${
                  bookedServices.has(plan.title)
                    ? "bg-white text-blue-600 border border-blue-600 cursor-not-allowed"
                    : "bg-blue-900 text-white hover:bg-blue-700"
                }`}
              >
                {bookedServices.has(plan.title) ? "Booked" : "Book Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
