import React from "react";

const Cta = () => {
  return (
    <div className="relative bg-blue-900 text-white py-16 px-8 md:px-16">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/rain-water-drop-glass-smooth-plastic-surface_107791-30775.jpg?ga=GA1.1.853350676.1718004547')",
        }}
      ></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold font-roboto">
          Get in touch with us for the best of our Domestic services
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-200 font-roboto">
          We have well-trained and highly experienced technicians who serve both residential and commercial sectors.
        </p>

        {/* Animated Button */}
        <button className="relative group mt-8 h-16 w-48 rounded-full bg-neutral-800 text-gray-50 overflow-hidden font-extrabold hover:bg-sky-700 transition duration-300">
          {/* Floating Colored Circles */}
          <div className="absolute w-16 h-16 bg-yellow-500 rounded-full right-12 top-12 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150 z-10 transition duration-700"></div>
          <div className="absolute w-12 h-12 bg-orange-500 rounded-full right-20 -top-6 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150 z-10 transition duration-700"></div>
          <div className="absolute w-8 h-8 bg-pink-500 rounded-full right-32 top-6 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150 z-10 transition duration-700"></div>
          <div className="absolute w-4 h-4 bg-red-600 rounded-full right-2 top-12 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150 z-10 transition duration-700"></div>

          {/* Button Text */}
          <p className="relative z-20 text-xl font-roboto">Book Now</p>
        </button>
      </div>
    </div>
  );
};

export default Cta;
