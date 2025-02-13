import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Team",
      description:
        "Our team consists of experienced professionals who deliver quality solutions.",
    },
    {
      title: "Customer Focused",
      description:
        "We always put our customers' needs first and ensure satisfaction.",
    },
    {
      title: "Innovative Solutions",
      description:
        "We provide cutting-edge solutions to keep you ahead of the competition.",
    },
    {
      title: "Reliable Support",
      description:
        "Our support team is always ready to assist you whenever you need help.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
      <p className="text-xl  text-black-800 mb-8">
        We handpick, expertly train, and wholeheartedly dedicate our caregivers
        to offer seniors the most compassionate care.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
