// src/pages/Maid.js
import React from "react";
import Whyus from "../components/Whyus";
import Handycleaning from "../components/Handycleaning";
import MaidServices from "../components/MaidServices";
import Cta from "../components/Cta";
import ExitIntentPopup from "../components/ExitIntentPopup";


const Maid = () => {
  return (
    <div className="bg-gray-100">
      <ExitIntentPopup/>
      {/* Hero Section */}
      
      <div className="relative sm:h-[500px] h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/4b/fa/c2/4bfac2846c9c552d5b42d6798728a81f.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Cooking maid</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl">Enjoy Tasty Dishes Cooked by Our Skilled Cooking Maids.
          Satisfy Your Taste Buds with Flavorful Meals Prepared by Our Expert Cooking Maids. Experience Delicious and Exquisite Dishes Right at Your Dining Table.</p>
       
      </div>
    </div>

      {/* About Section - Image on Left, Content on Right */}
      <div className="container mx-auto py-10 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Left Column - Image */}
          <div className="sm:w-1/2 w-full">
            <img
              src="https://i.pinimg.com/736x/c0/d7/11/c0d7110e4d059b190a0c1c027ab17fe9.jpg"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div className="sm:w-1/2 w-full">
            <h2 className="text-xl font-bold text-indigo-950 mb-3">
              We offer a full range of daily services
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About Our Maid Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            A clean kitchen is the heart of a healthy home, and professional cleaning
             services ensure your kitchen remains spotless and germ-free.
              Kitchen cleaning service in NCR offers a thorough cleaning solution that goes beyond everyday tidying up. 
              From deep-cleaning appliances to sanitizing countertops, these services leave your kitchen sparkling and safe. 
              Regular professional cleaning not only enhances the appearance of your kitchen but also promotes a healthier cooking environment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            For businesses, maintaining a clean and sanitary kitchen is crucial. Zollowup kitchen  services in NCR provide specialized cleaning for restaurants, hotels, and other food establishments. These services ensure that every part of your commercial kitchen meets health and safety standards. Professional cleaners use industrial-grade equipment and cleaning agents to tackle grease, grime, and bacteria, ensuring a hygienic space that complies with local regulations.
            </p>
            {/* <p className="text-gray-700 leading-relaxed text-justify">
              Our mission is to create a sustainable future where every child
              has the opportunity to dream, learn, and grow without limitations.
            </p> */}
            <button className="bg-blue-900 text-white px-5 sm:px-6 py-3 mt-5 rounded-lg font-semibold hover:bg-blue-600 transition">
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* Maid Services & Handy Cleaning Sections */}
      <MaidServices />
      <Handycleaning />
      <Cta />

      {/* Call to Action Section */}
      
    </div>
  );
};

export default Maid;
