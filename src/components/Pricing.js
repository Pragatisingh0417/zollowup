import React from "react";

const pricingPlans = [
  {
    title: "House Cleaning",
    price: "₹799",
    features: ["1 BHK", "Trained Staff", "Cleaning Supplies Included"],
  },
  {
    title: "Kitchen Cleaning",
    price: "₹599",
    features: ["Deep Cleaning", "Stove & Sink", "Disinfect Surfaces"],
  },
  {
    title: "Bathroom Cleaning",
    price: "₹499",
    features: ["Tiles & Floor", "Toilet Disinfection", "Mirror Cleaning"],
  },
  {
    title: "Baby Sitting",
    price: "₹999",
    features: ["Verified Nannies", "Flexible Hours", "Child Engagement"],
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Pricing</h2>
        <p className="text-gray-600 mt-2">Affordable & Transparent Rates</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold mt-2">{plan.price}</p>
              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium">
              Book Now
            </button>
          </div>
        
        ))}
      </div>
      <div className="mt-12 max-w-4xl mx-auto bg-yellow-100 border border-yellow-300 p-6 rounded-xl shadow">
  <h3 className="text-lg font-semibold mb-4 text-yellow-900">Note:</h3>
  <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-2">
    <li>Part-time services are also provided.</li>
    <li>Price can be more or less depending on the work.</li>
    <li>Housekeeping materials are to be provided by the client.</li>
    <li>You need to pay us a <strong>"one-time"</strong> fee for finding you a maid.</li>
    <li>This fee is payable when you confirm and select the maid.</li>
    <li>The monthly salary of the maid needs to be given directly to the maid.</li>
  </ul>
</div>

    </div>
  );
};

export default Pricing;
