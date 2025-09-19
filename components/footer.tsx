"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-[100%] bg-gray-200 shadow-md my-auto">
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p>Powered by Anu-ujin @2025</p>

          <p className="text-gray-600 text-sm">
            Your trusted ecommerce store for the best products at the best
            prices.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a
                href="#"
                className="!no-underline text-black hover:!text-gray-500 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="!no-underline text-black hover:!text-gray-500 transition-all duration-300"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="!no-underline text-black hover:!text-gray-500 transition-all duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="!no-underline text-black hover:!text-gray-500 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © 2025 Erxes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
