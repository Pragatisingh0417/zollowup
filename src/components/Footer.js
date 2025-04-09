import React from "react";
import Logo from "../assets/zollowupf.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {/* Column 1: Logo and About */}
        <div>
          <img src={Logo} alt="ZollowUp Logo" className="h-10 mb-4" />
          <p className="text-gray-800 text-sm leading-relaxed font-roboto">
            ZollowUp is your trusted partner in delivering high-quality, reliable domestic and commercial services. Our team of experienced professionals is dedicated to making your experience seamless and satisfying.
          </p>
          <button className="border text-gray-50 mt-6 relative group cursor-pointer overflow-hidden h-14 w-44 rounded-full bg-neutral-800 p-2 font-bold hover:bg-sky-700 transition duration-300">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
            <p className="relative z-20 text-base font-roboto">Join Us Today</p>
          </button>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-roboto">Quick Links</h3>
          <ul className="space-y-3 font-roboto text-sm">
            {["Home", "About", "Services", "Faqs", "Contact"].map((item, index) => (
              <li key={index}>
                <a href={`/${item.toLowerCase()}`} className="hover:text-gray-600 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-roboto">Contact Us</h3>
          <p className="text-sm mb-2 font-roboto">
            U-134B, 3rd Floor, Shakarpur<br />
            Near Laxmi Nagar Metro Gate No. 4,<br />
            Laxmi Nagar, Delhi 110092
          </p>
          <p className="text-sm mb-2 font-roboto">Phone: +91 9267987940</p>
          <p className="text-sm mb-4 font-roboto">Email: sales@zollowup.com</p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="bg-blue-800 p-2 rounded-full hover:bg-blue-600 transition duration-300">
              <img src="https://img.icons8.com/ios-glyphs/24/ffffff/facebook-new.png" alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition duration-300">
              <img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter.png" alt="Twitter" />
            </a>
            <a href="#" aria-label="Instagram" className="bg-pink-600 p-2 rounded-full hover:bg-pink-500 transition duration-300">
              <img src="https://img.icons8.com/ios-glyphs/24/ffffff/instagram-new.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-600 font-roboto">
        &copy; {new Date().getFullYear()} ZollowUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
