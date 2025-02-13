// src/components/ServiceButtons.js
import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { name: "Maid", route: "/maid" },
  { name: "Cleaning", route: "/housekeeping" },
  { name: "Plumbing", route: "/plumber" },
  { name: "Electrician", route: "/electrician" },
  { name: "Cooking", route: "/cooks" },
  { name: "Babysitting", route: "/maid" },
  { name: "Laundry", route: "/maid" },
  { name: "Nurses", route: "/nursing" },
  { name: "Drivers", route: "/drivers" },
  { name: "Housekeeping", route: "/housekeeping" },
];

const ServiceButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-8">
      {services.map((service, index) => (
        <button
          key={index}
          onClick={() => navigate(service.route)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none"
        >
          {service.name}
        </button>
      ))}
    </div>
  );
};

export default ServiceButtons;
