// src/pages/Maid.js
import React from "react";
import MaidServices from "../components/MaidServices";
import Cta from "../components/Cta";
import ExitIntentPopup from "../components/ExitIntentPopup";
import Pricing from "../components/Pricing";
// import OurMaids from "../components/OurMaids";


const Maid = () => {
  return (
    <div className="bg-gray-100">
      {/* <ExitIntentPopup /> */}
      {/* Hero Section */}

      <div className="w-full relative h-[350px] md:h-[450px] bg-cover bg-center mb-5" style={{ backgroundImage: "url('https://www.mollymaid.com/us/en-us/_assets/images/banner-hero-images/mly-hero-v2-desktop.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold"> Maid </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg">
            Want a freshly cleaned home and your free time back? Zollowup Maid today and take advantage of our expert home cleaning services!             
            </p>
          </div>
        </div>
      </div>


      {/* Maid Services & Handy Cleaning Sections */}
      <MaidServices />
      <Pricing />
      {/* <OurMaids /> */}
      <Cta />

      {/* Call to Action Section */}

    </div>
  );
};

export default Maid;
