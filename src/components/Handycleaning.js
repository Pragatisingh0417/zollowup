import React from "react";

const Handycleaning = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-5xl mb-5 mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center font-poppins">
        Why Book House Maid Services through Zollowup?
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed  text-center font-roboto">
        If you’re in need of home cleaning, apartment cleaning, or a maid service,
        we’re simply the best, most convenient way to find a service referral. We
        know you want a well-priced cleaning while still having the confidence
        that your cleaning will be thorough and professional. Handy connects you
        to cleaners who offer just that. And Handy helps schedule your recurring
        cleanings automatically for you, so you can focus on the other things in
        your life.
      </p>
      <ul className="space-y-4 mb-8 " >
        <li className="flex items-center text-gray-800">
          <span className="text-green-600 mr-3">&#10003;</span>
          <a href="#" className="text-blue-600 hover:underline">
            Vetted and screened professionals.
          </a>
        </li>
        <li className="flex items-center text-gray-800">
          <span className="text-green-600 mr-3">&#10003;</span>
          <a href="#" className="text-blue-600 hover:underline">
            Backed by the Handy Happiness Guarantee.
          </a>
        </li>
        <li className="flex items-center text-gray-800">
          <span className="text-green-600 mr-3">&#10003;</span>
          Friendly 24/7 customer service
        </li>
        <li className="flex items-center text-gray-800">
          <span className="text-green-600 mr-3">&#10003;</span>
          Affordable, upfront pricing
        </li>
      </ul>
      <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default Handycleaning;
