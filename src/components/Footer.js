import React from "react";
import Logo from "../assets/zollowup.png";


const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Column 1: Logo and About */}
        <div>
        <img src={Logo} alt="Logo" className="h-10 mb-3" />
          <p className="text-black-400">
            Your trusted partner in delivering quality services. We are here to
            make your experience seamless and enjoyable.
            Your trusted partner in delivering quality services. We are here to
            make your experience seamless and enjoyable.
          </p>
          <button class="border text-gray-50 mt-5  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-full bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
      <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
      <p class="relative z-20 text-xl font-roboto">Join Us Today</p>
    </button>

        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-gray-300 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-300 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-gray-300 transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-gray-300 transition duration-200"
              >
                Faqs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-300 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-black mb-2">U-134B, 3rd Floor Shakarpur Near Laxmi Nagar Metro station gate  No.- 4  Laxmi Nagar, Delhi  110092</p>
          <p className="text-black mb-2">Phone: +91 9267987940</p>
          <p className="text-black mb-2">Email: sales@zollowup.com</p>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="bg-blue-900 p-2 rounded-full hover:bg-blue-600 transition duration-200"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
                alt="Facebook"
              />
            </a>
            <a
              href="#"
              className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition duration-200"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              href="#"
              className="bg-orange-700 p-2 rounded-full hover:bg-orange-600 transition duration-200"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-900 mt-8 pt-4 text-center text-black-500 font-roboto">
        &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
