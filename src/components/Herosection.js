import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// import Button from "./Button";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation runs only once
    });
  }, []);

  const navigate = useNavigate();

  const images = [
    "https://img.freepik.com/free-photo/male-chef-cook-wearing-black-uniform-cook-hat-holding-plate-with-fresh-vegetables-showing-thumbs-up-standing-white-background_141793-54254.jpg?ga=GA1.1.853350676.1718004547&semt=ais_incoming",
    "https://img.freepik.com/free-photo/young-male-cook-chef-uniform-holding-lettuce-spaghetti-pasta-looking-isolated-orange-space_141793-45288.jpg?ga=GA1.1.853350676.1718004547&semt=ais_incoming",
    "https://img.freepik.com/premium-photo/beautiful-woman-traditional-candomble-clothing-opening-clay-pot-with-smoke-coming-out-it_676921-22909.jpg?ga=GA1.1.853350676.1718004547&semt=ais_incoming",
    "https://img.freepik.com/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990737.jpg?ga=GA1.1.853350676.1718004547&semt=ais_incoming",
    "https://img.freepik.com/premium-photo/plumber-hands-fixing-water-tap-background_488220-7944.jpg?ga=GA1.1.853350676.1718004547&semt=ais_incoming",
    "https://img.freepik.com/free-photo/male-worker-wearing-work-clothes_273609-10809.jpg?ga=GA1.1.853350676.1718004547&semt=ais_incoming"
  ];

  return (
    <div className="bg-[#F8FBFF] py-10 px-2 md:px-16">
      {/* Top Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-black font-poppins">Our Features</h2>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center" data-aos="fade-up">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-black leading-snug font-poppins">
  Expert Help for Your Home<br /> 
  <span className="text-blue-600 font-[Lobster] italic">Doorstep</span>
</h1>
          <p className="mt-4 text-gray-600 font-roboto">
            We provide professional, reliable, and efficient home services tailored to meet all your needs. 
            Whether it’s plumbing, electrical repairs, cleaning, or handyman services, our team of experts is ready to help.
          </p>
          <p className="mt-4 text-gray-600 font-roboto">
            We provide professional, reliable, and efficient home services tailored to meet all your needs. 
            Whether it’s plumbing, electrical repairs, cleaning, or handyman services, our team of experts is ready to help.
          </p>
          <div className="mt-6">
          <button
  onClick={() => navigate("/services")}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
>
  Book a Service Now <FaArrowRight />
</button>

          </div>
        </div>


        {/* Right Section (Images Grid) */}
        <div className="flex-1 mt-8 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-5" data-aos="fade-left">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
  src={image}
  alt={`Service ${index + 1}`}
  className="rounded-lg w-full h-40 sm:h-48 object-cover"
/>

<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-sm">
  Service {index + 1}
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
