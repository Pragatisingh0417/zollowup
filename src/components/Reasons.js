import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Calendar, Wallet, Settings, Gift } from "lucide-react";

const Reasons = () => {
  const reasonsList = [
    { icon: <BadgeCheck size={36} className="text-accent" />, text: "Qualified Experts" },
    { icon: <Calendar size={36} className="text-accent" />, text: "Service on Schedule" },
    { icon: <Wallet size={36} className="text-accent" />, text: "Affordable Prices" },
    { icon: <Settings size={36} className="text-accent" />, text: "Reliable Service" },
    { icon: <Gift size={36} className="text-accent" />, text: "Special Offers" },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-20 px-4 sm:px-10 md:px-20 text-center"
      style={{
        backgroundImage:
          "url('https://mehedi.asiandevelopers.com/demo/html/fouens/images/parallax-background/choose-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-white font-bold text-3xl sm:text-4xl font-heading mb-10">
          Reasons To Choose Us
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 font-roboto">
          {reasonsList.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h5 className="font-semibold text-gray-800 text-sm md:text-base">{reason.text}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
