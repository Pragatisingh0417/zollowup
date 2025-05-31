import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const navigate = useNavigate();

  const services = [
    { title: "Maid Services", image: "https://img.freepik.com/free-photo/young-woman-wearing-apron-rubber-gloves-holding-basin-with-cleaning-tools-with-big-smile-face-showing-thumbs-up-orange-wall_141793-13583.jpg", path: "/maid" },
    { title: "Nursing Care", image: "https://img.freepik.com/premium-photo/indian-nurse-with-uniform_984354-3724.jpg", path: "/nursing" },
    { title: "Drivers", image: "https://img.freepik.com/premium-photo/man-car-tablet-delivery-management-ecommerce-order-online-shopping-transport-logistics-smile-happy-courier-worker-technology-van-e-commerce-product-retail-distribution_590464-96742.jpg", path: "/drivers" },
    { title: "Cooks", image: "https://img.freepik.com/free-photo/young-confident-caucasian-cook-girl-chef-uniform-holds-frying-pan-thumbs-up-isolated-green-wall-with-copy-space_141793-33183.jpg", path: "/cooks" },
    { title: "Electrician", image: "https://mehedi.asiandevelopers.com/demo/html/fouens/images/services/3.jpg", path: "/electrician" },
    { title: "Plumber", image: "https://img.freepik.com/free-photo/sanitary-technician-gesturing-thumb-up_23-2147772204.jpg", path: "/plumber" },
    { title: "Housekeeping", image: "https://img.freepik.com/free-photo/chambermaid-hotel-room_23-2148095321.jpg", path: "/housekeeping" },
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
    <div className="container mx-auto py-20 px-4 sm:px-20" data-aos="fade-up">
      <h1 className="text-4xl font-bold text-black text-center mb-8 font-roboto" data-aos="fade-down">
        Our Services
      </h1>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div 
                className="card bg-white rounded-2xl shadow-lg relative cursor-pointer overflow-hidden group"
                onClick={() => navigate(service.path)}
              >
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-44 w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-xl font-semibold font-roboto">{service.title}</p>
                  </div>
                </div>

                <div className="card-body text-center relative">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto -mt-7 text-lg hover:bg-gray-800 transition duration-300">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <h5 className="card-title my-2 text-black font-bold text-lg font-roboto">{service.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-800 shadow-lg text-white p-2 rounded-full z-10 hover:bg-green-600" onClick={() => sliderRef.current.slickPrev()}>
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-800 shadow-lg text-white p-2 rounded-full z-10 hover:bg-green-600" onClick={() => sliderRef.current.slickNext()}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

     {/* Call to Action */}
      <div className="text-center mt-16" data-aos="fade-up">
        <p className="text-gray-700 font-sans mb-6">
          Discover comfort and convenience with every service — let us help you take care of your home.
        </p>
        <button
          onClick={() => navigate("/services")}
          className="bg-accent text-white font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition font-sans"
        >
          Explore Full List
        </button>
      </div>
    </div>
  );
};

export default Services;
