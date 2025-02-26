import React from "react";
import { motion } from "framer-motion";

const Reasons = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 mx-10 md:px-20 text-center"
      style={{
        backgroundImage:
          "url('https://mehedi.asiandevelopers.com/demo/html/fouens/images/parallax-background/choose-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-blue-800 bg-opacity-80"></div>
      <div className="relative z-10 container mx-auto">
        <h6 className="text-white font-poppins">Why You Should Choose Us</h6>
        <h2 className="text-white font-bold text-3xl mt-2 font-poppins">Reasons To Choose Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-8 font-roboto">
          {[
            { icon: "🏅", text: "Qualified Experts" },
            { icon: "📅", text: "Service on Schedule" },
            { icon: "💼", text: "Affordable Prices" },
            { icon: "⚙️", text: "Reliable Service" },
            { icon: "🎉", text: "Special Offers" },
          ].map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start hidden and shifted down
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              viewport={{ once: false, amount: 0.2 }} // Controls when animation triggers
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white rounded-lg p-6 shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
              <div className="text-teal-500 text-4xl mb-4">{reason.icon}</div>
              <h5 className="font-semibold">{reason.text}</h5>
            </motion.div>
          ))}
        </div>

        <p className="text-white mt-8 font-roboto">
          Don’t hesitate, contact us for help and services.{' '}
          <a
            href="#"
            className="font-bold underline hover:text-teal-300 transition font-roboto"
          >
            Book Online
          </a>
        </p>
      </div>
    </div>
  );
};

export default Reasons;
