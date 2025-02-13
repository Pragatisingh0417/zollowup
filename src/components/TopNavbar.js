import React from "react";

const TopNavbar = () => {
  return (
    <div className="hidden lg:block bg-black text-sm py-5 px-5 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        {/* Info Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
          <span className="flex items-center">
            <i className="fa fa-map-marker text-blue-500 mr-2 font-poppins"></i>
            U- 134b, 3rd Floor Shakarpur Near Laxmi Nagar Metro station gate  No.- 4  Laxmi Nagar  110092
          </span>
          <span className="flex items-center">
            <i className="fa fa-clock-o text-blue-500 mr-2 font-poppins">🕒</i>
            Opening Hours: 06:00AM to 20:00PM
          </span>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-2 lg:space-x-4 font-poppins">
          <a href="#" className="hover:text-blue-500 transition-colors">
            Facebook
          </a>
          <span>|</span>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Twitter
          </a>
          <span>|</span>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Instagram
          </a>
          <span>|</span>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
