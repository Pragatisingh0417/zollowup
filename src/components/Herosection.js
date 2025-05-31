import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navigate = useNavigate();

  const images = [
    "https://img.freepik.com/free-photo/male-chef-cook-wearing-black-uniform-cook-hat-holding-plate-with-fresh-vegetables-showing-thumbs-up-standing-white-background_141793-54254.jpg",
    "https://img.freepik.com/free-photo/young-male-cook-chef-uniform-holding-lettuce-spaghetti-pasta-looking-isolated-orange-space_141793-45288.jpg",
    "https://img.freepik.com/premium-photo/beautiful-woman-traditional-candomble-clothing-opening-clay-pot-with-smoke-coming-out-it_676921-22909.jpg",
    "https://img.freepik.com/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990737.jpg",
    "https://img.freepik.com/premium-photo/plumber-hands-fixing-water-tap-background_488220-7944.jpg",
    "https://img.freepik.com/free-photo/male-worker-wearing-work-clothes_273609-10809.jpg",
  ];

  return (
    <section className="bg-light py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary font-heading">
            Our Features
          </h2>
        </div>

        {/* Grid */}
        <div className="flex flex-col md:flex-row items-center gap-10" data-aos="fade-up">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-primary leading-snug font-heading">
              Expert Help for Your Home{" "}
              <br />
              <span className="text-accent italic font-[Lobster]">
                Doorstep
              </span>
            </h1>
            <p className="mt-4 text-gray-600 font-sans">
              Zollowup delivers professional, reliable home services —
              from plumbing and electrical repairs to deep cleaning and more.
              Our team is trained, vetted, and committed to quality.
            </p>
            <p className="mt-4 text-gray-600 font-sans">
              We offer transparent pricing, convenient scheduling, and
              doorstep delivery of all services so your day isn’t disrupted.
            </p>

            <div className="mt-6">
              <button
                onClick={() => navigate("/services")}
                className="bg-accent hover:bg-yellow-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
              >
                Book a Service Now <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-5" data-aos="fade-left">
            {images.map((image, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden shadow">
                <img
                  src={image}
                  alt={`Service ${index + 1}`}
                  className="w-full h-40 sm:h-48 object-cover"
                  loading="lazy"
                />
                {/* Optional Hover Text */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm">
                  Service {index + 1}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
