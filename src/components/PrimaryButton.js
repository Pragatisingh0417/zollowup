import React from "react";

const PrimaryButton = ({ label = "Get Started", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group overflow-hidden h-14 w-48 rounded-full bg-neutral-800 text-white font-bold text-lg font-roboto transition-all duration-300 hover:bg-blue-700 shadow-md"
    >
      {/* Bubbles - More subtle and smaller */}
      <div className="absolute w-12 h-12 rounded-full bg-yellow-400 right-12 top-12 group-hover:-top-2 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-70"></div>
      <div className="absolute w-8 h-8 rounded-full bg-orange-500 right-20 -top-6 group-hover:-top-1 group-hover:-right-1 group-hover:scale-125 transition-all duration-700 z-10 opacity-60"></div>
      <div className="absolute w-6 h-6 rounded-full bg-pink-500 right-28 top-6 group-hover:-top-1 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-50"></div>
      <div className="absolute w-4 h-4 rounded-full bg-red-500 right-2 top-12 group-hover:-top-1 group-hover:-right-2 group-hover:scale-125 transition-all duration-700 z-10 opacity-40"></div>

      {/* Button Label */}
      <span className="relative z-20">{label}</span>
    </button>
  );
};

export default PrimaryButton;
