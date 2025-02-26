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
      <h1 className="text-4xl font-poppins font-bold text-black text-center mb-8" data-aos="fade-down">
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
                {/* Image with Hover Zoom Effect */}
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-44 w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay Pop-Up */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-xl font-semibold">{service.title}</p>
                  </div>
                </div>

                {/* Service Card Content */}
                <div className="card-body text-center relative">
                  <div className="circle-btn w-12 h-12 bg-[#00000099] text-white rounded-full flex items-center justify-center mx-auto -mt-7 text-lg transition-colors hover:bg-yellow-500">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                  <h5 className="card-title my-2 text-blue-900 font-bold text-lg font-poppins">{service.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-800 shadow-lg text-white p-2 rounded-full z-10 hover:bg-green-600" onClick={() => sliderRef.current.slickPrev()}>
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-800 shadow-lg text-white p-2 rounded-full z-10 hover:bg-green-600" onClick={() => sliderRef.current.slickNext()}>
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* CTA Section */}
      <div className="py-12" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <p className="text-gray-800 leading-relaxed mb-6 font-roboto">
            Together, we can make a difference. Become a part of our journey to transform lives.
          </p>
          <button className="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-16 w-48 rounded-full bg-neutral-800 p-2 font-extrabold hover:bg-sky-700">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-20 relative text-xl font-roboto">Know More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;