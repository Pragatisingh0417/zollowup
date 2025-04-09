import React from 'react';
import { motion } from 'framer-motion';
import { FaBroom, FaUserNurse, FaUtensils, FaTools, FaBolt, FaWater } from 'react-icons/fa';

const services = [
  {
    icon: <FaBroom className="text-3xl text-orange-500" />,
    title: 'House Cleaning',
    desc: 'Spotless cleaning services for a tidy, fresh home every time.',
  },
  {
    icon: <FaUserNurse className="text-3xl text-blue-500" />,
    title: 'Elderly Care',
    desc: 'Caring and compassionate help for your loved ones.',
  },
  {
    icon: <FaUtensils className="text-3xl text-red-500" />,
    title: 'Cook Services',
    desc: 'Skilled cooks to prepare home-style or special meals.',
  },
  {
    icon: <FaTools className="text-3xl text-green-500" />,
    title: 'Handyman Help',
    desc: 'Quick fixes and maintenance by trusted professionals.',
  },
  {
    icon: <FaBolt className="text-3xl text-yellow-500" />,
    title: 'Electricians',
    desc: 'Certified electricians for safe and efficient solutions.',
  },
  {
    icon: <FaWater className="text-3xl text-cyan-500" />,
    title: 'Plumbers',
    desc: 'Reliable plumbing services at your convenience.',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-black font-poppins"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto font-roboto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          From cleaning to caregiving, cooking to repairs – we've got you covered with reliable and expert professionals.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#F8FBFF] shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-black font-poppins mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base font-roboto">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
