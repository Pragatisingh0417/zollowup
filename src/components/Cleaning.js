import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cleaning = () => {
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const services = [
    { title: "Kitchen Cleaning", image: "https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid", path: "/kitchen-cleaning" },
    { title: "Bathroom Cleaning", image: "https://img.freepik.com/free-photo/household-chores-concept_53876-139519.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid", path: "/bathroom-cleaning" },
    { title: "Full Home Cleaning", image: "https://img.freepik.com/premium-photo/cleaning-service-team-working-messy-room-after-new-year-party_495423-36368.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid", path: "/full-home-cleaning" },
    { title: "Cooking", image: "https://img.freepik.com/premium-photo/young-woman-cook-sweet-cake-kitchen_41471-8748.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid", path: "/cook" },
    { title: "Nanny", image: "https://img.freepik.com/premium-photo/beautiful-mother-with-her-cute-baby-blue-background_1215445-5206.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid", path: "/maid" },
  ];

  const sliderRef = React.useRef(null);

  const settings = {
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
    <div className="container mx-auto py-10 px-4 sm:px-20" data-aos="fade-up">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8 font-poppins" data-aos="fade-down">
        Cleaning & Cooking
      </h1>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-5" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => navigate(service.path)}
              >
                <img src={service.image} alt={service.title} className="h-44 w-full object-cover rounded-t-2xl transition-transform group-hover:scale-105" />
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-5 left-0 w-full text-center text-white font-medium font-roboto text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {service.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200" onClick={() => sliderRef.current.slickPrev()}>
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200" onClick={() => sliderRef.current.slickNext()}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Cleaning;
