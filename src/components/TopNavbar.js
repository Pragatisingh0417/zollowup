import React from "react";

const TopNavbar = () => {
  return (
    <div className="hidden lg:block bg-black text-sm py-5 px-5 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        {/* Info Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
          <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
	<path fill="none" stroke="#f8f8f8" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5A14.82 14.82 0 0 0 9.18 19.32h0v1.08c.6 8.12 7.34 14.65 14.82 23.1c7.81-8.82 14.82-15.5 14.82-24.18h0A14.82 14.82 0 0 0 24 4.5m0 7.7a7.13 7.13 0 1 1-7.13 7.12A7.13 7.13 0 0 1 24 12.2" stroke-width="2" />
</svg>
            U- 134b, 3rd Floor Shakarpur Near Laxmi Nagar Metro station gate  No.- 4  Laxmi Nagar  110092
          </span>
          <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#f8f8f8" d="m13 12.175l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L11.3 13.3q-.15-.15-.225-.337T11 12.575V9q0-.425.288-.712T12 8t.713.288T13 9zM12 6q-.425 0-.712-.288T11 5V4h2v1q0 .425-.288.713T12 6m6 6q0-.425.288-.712T19 11h1v2h-1q-.425 0-.712-.288T18 12m-6 6q.425 0 .713.288T13 19v1h-2v-1q0-.425.288-.712T12 18m-6-6q0 .425-.288.713T5 13H4v-2h1q.425 0 .713.288T6 12m6 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m8-10q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20t5.675-2.325T20 12m-8 0" />
</svg>
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
