import React from "react";
import Button from "./Button";

const Cts = () => {
  return (
    <div className="relative bg-blue-900 text-white py-16 px-8 md:px-16">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/rain-water-drop-glass-smooth-plastic-surface_107791-30775.jpg?ga=GA1.1.853350676.1718004547')" }}></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold font-roboto">
          Get in touch with us for best of our  Domestic services
        </h1>
        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-200 font-roboto">
          We have well-trained and highly experienced technicians who service the residential and commercial sectors.
        </p>
        {/* Button */}
        <button class="border text-gray-50  mt-5 duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-full bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
      <p class="z-10 absolute bottom-2 left-10">Book Now</p>
    </button>
      </div>
    </div>
  );
};

export default Cts;
