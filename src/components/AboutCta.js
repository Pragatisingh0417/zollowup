import React from "react";

const AboutCta = () => {
  return (
    <div className="relative bg-blue-900 text-white text-center py-20 px-4 sm:px-8">
      <div className="absolute inset-0 bg-opacity-50">
        <img
          src="https://tidytheme.xyz/blackgallery/tidid/html/images/video_bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          We are tidid clean your place sparkle
        </h1>
        <p className="text-lg sm:text-xl mb-6">   
          We're here to help you manage your problem regular emails that will arm
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xl font-semibold">+91 9267987940</span> |
          <button class="border text-gray-50  duration-300 relative group cursor-pointer rounded-full  overflow-hidden h-16 w-48  bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
      <p class="relative z-20 text-xl font-roboto">Conact Us</p>
    </button>
    
        </div>
      </div>
    </div>
  );
};

export default AboutCta;
