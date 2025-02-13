import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const NewAndNoteworthySlider = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderItems = [
    {
      id: 1,
      title: "Maid",
      description: "Professional and trustworthy maid services tailored to your needs. Enjoy a spotless and hassel free  home services with our reliable cleaning experts.",
      image:
        "https://img.freepik.com/free-photo/chambermaid-hotel-room_23-2148095264.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Plumber",
      description: "Expert plumbing services for repairs, installations, and maintenance. Fast, reliable, and hassle-free solutions for your home or business.",
      image:
        "https://img.freepik.com/premium-photo/serious-handyman-using-pliers-when-fixing-leaking-pipe-sink-kitchen-customer_274689-26032.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Electrician ",
      description: "Professional electrician services for safe and efficient repairs, installations, and maintenance. Reliable solutions for homes and businesses.",
      image:
        "https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-18026.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
    },
    {
      id: 4,
      title: "Cook",
      description: "Skilled and experienced cooks providing delicious, home-style meals tailored to your taste. Enjoy hassle-free cooking with our expert services.",
      image:
        "https://img.freepik.com/free-photo/chef-kitchen_23-2148006182.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid",
    },
    {
      id: 5,
      title: "Housekeeping",
      description: "Reliable housekeeping services for a spotless, organized, and stress-free home. Our professionals ensure cleanliness, hygiene, and comfort.",
      image:
        "https://img.freepik.com/premium-photo/african-man-cleaning-cooktop-cooker-hood-home-brick-wall-with-mountain-unwashed-dirty-dishes-near-sink-background_175356-4288.jpg?ga=GA1.1.853350676.1718004547&semt=ais_incoming",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 text-gray-900 font-poppins">
        New and Noteworthy
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {sliderItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-2"
            >
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium font-poppins">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-roboto">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

export default NewAndNoteworthySlider;
