import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MissionVisionValues = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-900 drop-shadow-lg font-poppins"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Our Mission, Vision & Values
        </motion.h2>
        <motion.p
          className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto font-roboto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          We strive for excellence, innovation, and integrity in everything we do.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {[ 
          { title: "Our Mission", color: "blue", text: "To deliver top-tier solutions that empower businesses through cutting-edge technology and innovation." },
          { title: "Our Vision", color: "green", text: "To become a global leader in transformative digital solutions that drive long-term success for our clients." },
          { title: "Our Values", color: "purple", text: "We uphold integrity, embrace innovation, strive for excellence, and prioritize our customers' success.", isList: true }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`bg-white p-10 rounded-3xl shadow-2xl text-center border-t-4 border-${item.color}-500`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className={`text-3xl font-bold text-${item.color}-600 font-poppins`}>{item.title}</h3>
            {item.isList ? (
              <ul className="text-gray-700 mt-6 space-y-4 text-lg font-roboto">
                <li><strong className="text-indigo-600">Integrity:</strong> Transparency and honesty in all actions.</li>
                <li><strong className="text-indigo-600">Innovation:</strong> Embracing change and seeking better solutions.</li>
                <li><strong className="text-indigo-600">Excellence:</strong> Striving for quality and perfection.</li>
                <li><strong className="text-indigo-600">Customer-Centric:</strong> Prioritizing clients' needs and success.</li>
              </ul>
            ) : (
              <p className="text-gray-700 mt-4 text-lg font-roboto">{item.text}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionValues;
