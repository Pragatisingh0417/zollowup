// src/pages/About.js
import React from "react";
import Whyus from "../components/Whyus";
import { motion } from "framer-motion";
import AboutCta from "../components/AboutCta";
import Cards from "../components/Cards";
import ExitIntentPopup from "../components/ExitIntentPopup";
import Handycleaning from "../components/Handycleaning";

const About = () => {
  return (
    <div className="bg-light">
      <ExitIntentPopup />

      {/* About Section */}
      <div className="flex flex-wrap items-center py-14 px-6">
        {/* Left Images */}
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <div className="flex flex-wrap justify-center lg:justify-start">
            <motion.div
              className="w-1/2 px-2 hidden lg:block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/0f/2b/ce/0f2bcec1c5a8786dde181af44f50efa2.jpg"
                  alt="Child on Carpet"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              className="w-1/2 px-2 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="rounded-2xl overflow-hidden relative border-8 border-white lg:left-[-50px] lg:mt-[50px]">
                <img
                  src="https://i.pinimg.com/736x/bd/f5/da/bdf5da4c4682affb69628d4333bd86cf.jpg"
                  alt="Cleaning Lady"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2 w-full px-5 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-primary font-heading mt-5">
            <span className="text-accent italic">About Us</span>
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 font-sans">
            We Can Make Your Place Sparkle
          </h2>

          <p className="text-gray-600 leading-6 font-sans text-sm">
            At Zollowup Services, we are dedicated to providing top-quality home
            and business services that bring convenience and reliability to your
            doorstep. From experienced maids and professional cleaners to skilled
            plumbers and electricians, we ensure every service is delivered with excellence and trust.
          </p>
          <p className="text-gray-600 mb-6 leading-6 font-sans text-sm">
            With a commitment to quality, affordability, and customer satisfaction,
            we simplify home management by connecting you with verified professionals.
            Whether you need routine cleaning, emergency repairs, or specialized care,
            we’ve got you covered with on-demand, hassle-free booking.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans items-start text-sm">
            <ul className="space-y-1">
              <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> House Cleaning Service</li>
              <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> References Available</li>
              <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> Commercial Cleaning</li>
            </ul>
            <ul className="space-y-1">
              <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> Satisfaction Guaranteed</li>
              <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> All Equipment Provided</li>
              <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> Housekeeping</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-5xl mb-5 mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center font-heading">
          Who We Are – Your Trusted Home Service Experts
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-center font-sans">
          We are a team of service professionals and tech innovators who believe
          in simplifying home management. With a rigorous vetting process,
          real-time scheduling, and customer-first approach, we ensure that you
          get the best service providers for your needs. Whether it’s a quick
          fix, a deep clean, or elderly care, we connect you with trained
          experts who prioritize your comfort and satisfaction. Life gets busy,
          and finding reliable, professional, and affordable home services can
          be challenging. That’s where we come in <b>Zollowup</b> was created to
          provide a seamless, all-in-one solution for every household service
          you may need. We focus on:
        </p>
        <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto text-gray-800">
          <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Verified & Skilled Professionals</li>
          <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Easy Online Booking & Instant Support</li>
          <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Affordable, Transparent Pricing</li>
          <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Reliable Services at Your Convenience</li>
        </ul>
        <div className="text-center">
          <button className="relative group overflow-hidden h-16 w-48 rounded-full bg-primary text-white font-extrabold hover:bg-accent transition-all duration-300">
            <div className="absolute w-16 h-16 rounded-full bg-yellow-500 right-12 top-12 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150 transition-all duration-700 z-10"></div>
            <div className="absolute w-12 h-12 rounded-full bg-orange-500 right-20 -top-6 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150 transition-all duration-700 z-10"></div>
            <div className="absolute w-8 h-8 rounded-full bg-pink-500 right-32 top-6 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150 transition-all duration-700 z-10"></div>
            <div className="absolute w-4 h-4 rounded-full bg-red-600 right-2 top-12 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150 transition-all duration-700 z-10"></div>
            <p className="relative z-20 text-xl font-sans">Get Started</p>
          </button>
        </div>
      </div>

      <Cards />
      {/* <Whyus /> */}
      <Handycleaning />

      <AboutCta />
    </div>
  );
};

export default About;
