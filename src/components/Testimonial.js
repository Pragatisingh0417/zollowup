import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";


const testimonials = [
  {
    id: 1,
    image: "https://codingyaar.com/wp-content/uploads/headshot-1-scaled.jpg",
    name: "Priya Jain ",
    rating: 5,
    text: "Absolutely fantastic service! My home has never been this clean and fresh. The maid was punctual, professional, and thorough. Highly recommended!"
  },
  {
    id: 2,
    image: "https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg",
    name: "Anju",
    rating: 4,
    text: "Very reliable and efficient! The maid did an amazing job organizing and deep cleaning every corner of my house. Worth every penny!"
  },
  {
    id: 3,
    image: "https://codingyaar.com/wp-content/uploads/headshot-4-scaled.jpg",
    name: "Rekha J.",
    rating: 5,
    text: "Amazing cooking! The meals were delicious, healthy, and prepared exactly to my taste. Such a time-saver for my busy schedule!"
  },
  {
    id: 4,
    image: "https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg",
    name: "Payal",
    rating: 3,
    text: "Exceptional service! The cook was punctual, clean, and prepared restaurant-quality food right at home. Highly recommended!"
  },
  {
    id: 5,
    image: "https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg",
    name: "Manju Sinha",
    rating: 3,
    text: "I love how detailed and careful they are. My kitchen and bathrooms are spotless, and everything smells amazing. Will book again!"
  },
  {
    id: 6,
    image: "https://codingyaar.com/wp-content/uploads/headshot-4-scaled.jpg",
    name: "Sarita",
    rating: 5,
    text: "Outstanding service! The nurse was knowledgeable and compassionate, providing excellent post-surgery care. Truly grateful!"
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 2;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - itemsPerSlide + testimonials.length) % testimonials.length);
  };

  return (
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 py-20"
        >
    <div className="bg-white-400 text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <FaQuoteLeft className="text-5xl" />
          <h2 className="text-3xl font-bold ml-2 font-poppins">What our customers say</h2>
        </div>
        <div className="relative flex items-center">
          <button onClick={prevSlide} className="absolute left-0 bg-white text-black p-3 rounded-full shadow-lg">
            <FaChevronLeft />
          </button>
          <div className="flex space-x-6 overflow-hidden w-full">
            {testimonials.slice(index, index + itemsPerSlide).map((testimonial) => (
              <div key={testimonial.id} className="bg-white text-black rounded-xl overflow-hidden shadow-lg w-1/2">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg font-poppins">{testimonial.name}</h3>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-2 font-roboto">{testimonial.text}</p>
                </div>
              </div>
              
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-0 bg-white text-black p-3 rounded-full shadow-lg">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
