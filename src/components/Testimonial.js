import { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const defaultAvatar = "https://www.gravatar.com/avatar/?d=mp&f=y";

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const [modalReview, setModalReview] = useState(null);
  const intervalRef = useRef();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/reviews/public`);
        const data = await res.json();
        const fallbackData = [
          {
            _id: "demo1",
            rating: 5,
            review: "Amazing service! Very professional staff.",
            userId: { name: "Priya Jain", photo: "" },
            bookingId: { service: { name: "Cleaning" } },
          },
          {
            _id: "demo2",
            rating: 4,
            review: "Loved the cook we got. Food was great!",
            userId: { name: "Rekha J.", photo: "" },
            bookingId: { service: { name: "Cooking" } },
          },
          {
            _id: "demo3",
            rating: 5,
            review: "Nurse was excellent with care and knowledge.",
            userId: { name: "Anju Sinha", photo: "" },
            bookingId: { service: { name: "Nursing" } },
          },
        ];

        setTestimonials(
          Array.isArray(data) && data.length > 0 ? data.filter(r => r.rating >= 4) : fallbackData
        );
      } catch (err) {
        console.error("Failed to load testimonials:", err);
        setTestimonials([]);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [testimonials, itemsPerSlide]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      (prevIndex - itemsPerSlide + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const end = index + itemsPerSlide;
    if (end <= testimonials.length) {
      return testimonials.slice(index, end);
    } else {
      return [
        ...testimonials.slice(index),
        ...testimonials.slice(0, end - testimonials.length),
      ];
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <div className="bg-white text-black py-12 px-6 rounded-2xl shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <FaQuoteLeft className="text-4xl text-primary" />
            <h2 className="text-3xl font-bold ml-4 font-poppins">
              What our verified users say
            </h2>
          </div>

          <div className="relative" {...swipeHandlers}>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
            >
              <FaChevronLeft />
            </button>

            <div className="flex overflow-hidden gap-6 mx-12">
              <AnimatePresence mode="wait">
                {getVisibleTestimonials().map((testimonial, i) => (
                  <motion.div
                    key={testimonial._id || i}
                    className="bg-gray-50 rounded-xl shadow-md p-6 w-full transition duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setModalReview(testimonial)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={testimonial.userId?.photo || defaultAvatar}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {testimonial.userId?.name || "Anonymous"}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.bookingId?.service?.name || "Service"}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      className="flex text-yellow-500 mb-3"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.span key={i} whileHover={{ scale: 1.3 }}>
                          ★
                        </motion.span>
                      ))}
                    </motion.div>
                    <p className="text-gray-700 font-roboto line-clamp-4">
                      "{testimonial.review}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx * itemsPerSlide)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index / itemsPerSlide === idx ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {testimonials.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No reviews yet. Be the first to leave one!
        </p>
      )}

      <div className="text-center mt-6">
        <a
          href="/dashboard/orders"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Leave a Review
        </a>
      </div>

      {/* Review Modal */}
      {modalReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setModalReview(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2">
              {modalReview.userId?.name || "Anonymous"}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {modalReview.bookingId?.service?.name || "Service"}
            </p>
            <div className="text-yellow-500 mb-3">
              {Array.from({ length: modalReview.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-gray-800">{modalReview.review}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
