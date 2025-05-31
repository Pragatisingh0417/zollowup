import React from "react";
import CountUp from "react-countup";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

const stats = [
  { icon: "fa-calendar-alt", target: 3, label: "Years of Experience" },
  { icon: "fa-users", target: 150, label: "Domestic Clients" },
  { icon: "fa-user", target: 100, label: "Man Power" },
  { icon: "fa-smile", target: 98, label: "Positive Feedbacks" },
];

const CountingNumber = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('https://maidwala.in/img/fun-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center sm:items-start sm:flex-row gap-4"
              >
                <i className={`fas ${stat.icon} text-4xl sm:text-5xl text-yellow-400`} aria-hidden="true"></i>
                <div>
                  <h3 className="text-3xl font-bold font-poppins">
                    <CountUp end={stat.target} duration={2} />+
                  </h3>
                  <p className="text-base font-roboto">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CountingNumber;
