import React from "react";
import PrimaryButton from "../components/PrimaryButton";


const AboutCta = () => {
  return (
    <div className="relative bg-blue-900 text-white text-center py-20 px-4 sm:px-8 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://tidytheme.xyz/blackgallery/tidid/html/images/video_bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-heading">
          We help make your place sparkle
        </h1>
        <p className="text-lg sm:text-xl mb-6 font-sans">
          We're here to help manage your home services with care and convenience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
          <span className="text-xl font-semibold">📞 +91 9267987940</span>

          <span className="hidden sm:inline-block text-white">|</span>

          <PrimaryButton label="Contact Us" onClick={() => console.log("Clicked")} />

        </div>
      </div>
    </div>
  );
};

export default AboutCta;
