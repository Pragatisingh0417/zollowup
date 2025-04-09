import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cleaning = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const services = [
    {
      title: "Kitchen Cleaning",
      image: "https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
      path: "/kitchen-cleaning",
    },
    {
      title: "Bathroom Cleaning",
      image: "https://img.freepik.com/free-photo/household-chores-concept_53876-139519.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
      path: "/bathroom-cleaning",
    },
    {
      title: "Full Home Cleaning",
      image: "https://img.freepik.com/premium-photo/cleaning-service-team-working-messy-room-after-new-year-party_495423-36368.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
      path: "/full-home-cleaning",
    },
    {
      title: "Cooking",
      image: "https://img.freepik.com/premium-photo/young-woman-cook-sweet-cake-kitchen_41471-8748.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
      path: "/cook",
    },
    {
      title: "Nanny",
      image: "https://img.freepik.com/premium-photo/beautiful-mother-with-her-cute-baby-blue-background_1215445-5206.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
      path: "/maid",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <h2
        className="text-4xl font-bold text-center text-gray-900 font-poppins mb-10"
        data-aos="fade-down"
      >
        Cleaning & Cooking
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="p-4" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => navigate(service.path)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-44 w-full object-cover rounded-t-2xl transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-5 left-0 w-full text-center text-white text-lg font-roboto font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Cleaning;
