import React from "react";
import { FaSearch, FaCalendarCheck, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaSearch className="text-4xl text-yellow-500 mb-4" />,
    title: "1. Choose a Service",
    description: "Select from a wide range of cleaning, cooking, and caregiving services tailored to your needs.",
  },
  {
    icon: <FaCalendarCheck className="text-4xl text-yellow-500 mb-4" />,
    title: "2. Pick Date & Time",
    description: "Schedule a convenient slot for your appointment and leave the rest to us.",
  },
  {
    icon: <FaHome className="text-4xl text-yellow-500 mb-4" />,
    title: "3. Relax at Home",
    description: "Our verified professional arrives at your doorstep to deliver hassle-free service.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-black font-poppins mt-5">
          How It Works
        </h2>
        <p className="text-gray-600 mt-2 font-roboto text-sm sm:text-base">
          Simple steps to get your home services done with ease.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              {step.icon}
              <h3 className="text-xl font-semibold mb-2 font-poppins text-black">{step.title}</h3>
              <p className="text-sm text-gray-600 font-roboto">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
