import React from "react";
import { motion } from "framer-motion";

const Reasons = () => {
  const reasonsList = [
    { icon: "🏅", text: "Qualified Experts" },
    { icon: "📅", text: "Service on Schedule" },
    { icon: "💼", text: "Affordable Prices" },
    { icon: "⚙️", text: "Reliable Service" },
    { icon: "🎉", text: "Special Offers" },
  ];

  return (
    <div
      className="relative bg-cover bg-center py-20 px-4 sm:px-10 md:px-20 text-center"
      style={{
        backgroundImage:
          "url('https://mehedi.asiandevelopers.com/demo/html/fouens/images/parallax-background/choose-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-blue-800 bg-opacity-80"></div>

      <div className="relative z-10 container mx-auto">
        {/* <h6 className="text-white font-poppins text-base sm:text-lg">
          Why You Should Choose Us
        </h6> */}
        <h2 className="text-white font-bold text-3xl sm:text-4xl mt-2 font-poppins">
          Reasons To Choose Us
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10 font-roboto">
          {reasonsList.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
              <div className="text-teal-500 text-4xl mb-4">{reason.icon}</div>
              <h5 className="font-semibold text-gray-800">{reason.text}</h5>
            </motion.div>
          ))}
        </div>

        {/* <p className="text-white mt-10 font-roboto text-lg">
          Don’t hesitate, contact us for help and services.{" "}
          <a
            href="/contact"
            className="inline-block mt-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Book Online
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Reasons;
