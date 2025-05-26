// src/pages/Nursing.js
import React, { useState } from "react";
import NurseRequirementForm from "./NurseRequirementForm";

const services = [
  {
    title: "Elderly Care",
    description: "Daily support and companionship for senior citizens with mobility or health challenges.",
    image: "https://images.unsplash.com/photo-1601068996186-df6a02c072a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Post-Surgical Care",
    description: "Professional nursing to help patients recover safely at home after surgery.",
    image: "https://images.unsplash.com/photo-1622253692010-3335af2dc5bb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "ICU Care at Home",
    description: "ICU-trained nurses to manage critical care patients with ventilators and monitoring equipment.",
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8a77b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Baby & Mother Care",
    description: "Trained caregivers to support new mothers and ensure newborn hygiene and feeding.",
    image: "https://images.pexels.com/photos/3845125/pexels-photo-3845125.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Injections & IV Drips",
    description: "On-call nurses for injections, IV fluids, and quick medical procedures at home.",
    image: "https://images.unsplash.com/photo-1603398938378-cfe2b67ddf85?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Palliative Care",
    description: "Compassionate nursing for terminally ill patients focusing on comfort and quality of life.",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bedridden Care",
    description: "24x7 care for patients who are completely immobile, including hygiene and sore prevention.",
    image: "https://images.pexels.com/photos/7088525/pexels-photo-7088525.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Night Nursing",
    description: "Professional nursing services available overnight for patient monitoring and care.",
    image: "https://images.unsplash.com/photo-1578496781985-04a9f95b6f4a?auto=format&fit=crop&w=800&q=80",
  },
];

const Nursing = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  

  return (
    <div className="p-6 md:p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600">Medical Services We Provide</h1>
        <p className="text-gray-600 mt-2">Choose the care you need, and we’ll bring it to your doorstep.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button
                onClick={() => handleBookNow(service)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Nurse Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Book: {selectedService?.title}
            </h2>
            <NurseRequirementForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nursing;
