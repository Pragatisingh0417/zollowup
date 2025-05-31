import React from "react";

const Cards = () => {
  const cardData = [
    {
      title: "Mission",
      description:
        "Our mission is to innovate and deliver high-quality solutions that empower individuals and businesses. We strive to create user-friendly, efficient, and scalable digital experiences that enhance productivity and foster growth.",
    },
    {
      title: "Vision",
      description:
        "Our vision is to be a leader in the digital landscape, setting new standards for excellence and creativity. We aim to shape the future by leveraging cutting-edge technology to provide seamless and impactful solutions that make a difference.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary font-heading text-center">
        Mission and Vision
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative max-w-md w-full p-8 rounded-xl bg-light text-gray-800 shadow-md overflow-hidden group"
          >
            <div className="absolute blur w-72 h-72 rounded-full bg-accent opacity-20 group-hover:translate-x-12 group-hover:translate-y-12 transition duration-700 right-1 -bottom-24"></div>
            <div className="absolute blur w-12 h-12 rounded-full bg-primary opacity-20 right-12 bottom-12 group-hover:translate-x-8 transition duration-700"></div>
            <div className="absolute blur w-36 h-36 rounded-full bg-primary opacity-20 right-1 -top-12 group-hover:-translate-y-6 transition duration-700"></div>
            <div className="absolute blur w-24 h-24 bg-accent opacity-20 rounded-full group-hover:-translate-x-12 transition duration-700"></div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold font-heading">{card.title}</h3>
              <p className="text-sm md:text-base font-sans">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
