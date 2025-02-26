import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
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
    <div className="bg-white py-10 px-2 md:px-16">
      {/* Top Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-black font-poppins">Our Features</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start" data-aos="fade-up">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl font-bold text-blue-900 leading-snug font-poppins">
            Expert Help for Your Home – Anytime 
          </h1>
          <p className="mt-4 text-lg text-slate-800 font-roboto">
            Effortless home services are just a click away – book now and enjoy seamless home management with expert care!
          </p>
          <p className="mt-4 text-lg text-slate-800 font-roboto">
            Say goodbye to household worries! Book now and experience smooth, stress-free home management with us.
          </p>
          <button
            onClick={() => navigate("/maid")}
            className="border text-gray-50 mt-5 duration-300 relative group cursor-pointer overflow-hidden h-16 w-48 rounded-full bg-neutral-800 p-2 font-extrabold hover:bg-sky-700"
          >
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-10 font-roboto">Know More</p>
          </button>
        </div>

        {/* Right Section (Images Grid) */}
        <div className="flex-1 mt-8 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-5" data-aos="fade-left">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Service ${index + 1}`}
                className="rounded-lg w-full h-full object-cover"
                data-aos="flip-left"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => navigate("/maid")}
                  className="text-white font-bold border border-white px-4 py-2 font-roboto"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
