import React from "react";
import { useParams } from "react-router-dom";

const MaidPage = () => {
  const { hours } = useParams(); // This will grab the hour parameter from the URL

  // Find the plan based on the hours
  const pricingPlans = [
    { title: "8 Hours", price: "₹15000", features: ["2 holidays per month."] },
    { title: "10 Hours", price: "₹17000", features: ["2 holidays per month."], mostPopular: true },
    { title: "24 Hours", price: "₹22000", features: ["2 holidays per month."] },
    { title: "2 Hours", price: "₹5000", features: ["2 holidays per month."] },
    { title: "4 Hours", price: "₹8000", features: ["2 holidays per month."] },
    { title: "12 Hours", price: "₹18000", features: ["2 holidays per month."] },
  ];

  // Find the selected plan based on hours
  const selectedPlan = pricingPlans.find((plan) => plan.title.toLowerCase() === `${hours} hours`);

  if (!selectedPlan) {
    return <h1>Plan not found!</h1>;
  }

  return (
    <div>
      <h1>{selectedPlan.title} Maid</h1>
      <p>Price: {selectedPlan.price}</p>
      <ul>
        {selectedPlan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default MaidPage;
