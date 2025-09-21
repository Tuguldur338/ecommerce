"use client";

import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
        Contact Us
      </h1>

      <div className="max-w-3xl space-y-8">
        <p className="text-gray-700">
          Have questions or need help with your order? Reach out to us via the
          contact information below. We’re happy to assist you!
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Get in Touch
          </h2>

          <div className="text-left space-y-2 text-gray-700">
            <p>
              <strong>Email:</strong> Tuguldur09252@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +976 91205038
            </p>
            <p>
              <strong>Address:</strong> Shangri-la ITC center 5th floor Erxes
            </p>
            <p>
              <strong>Business Hours:</strong> Monday-Friday: 5pm - 7pm,
              Saturday-Sunday: 2pm - 6pm
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 text-center space-x-4">
            <div className="flex gap-[20px]">
              <a href="https://www.facebook.com/" className="">
                <SiFacebook size={24} className="bg-white text-[#0866ff]" />
              </a>

              <h4 className="!text-blue-800">Facebook</h4>
            </div>

            <div className="flex gap-[20px]">
              <a href="#" className="">
                <FaTwitter size={24} className="text-blue-400" />
              </a>

              <h4 className="!text-blue-800">Twitter</h4>
            </div>

            <div className="flex gap-[20px]">
              <a href="https://www.instagram.com/" className="">
                <FaInstagramSquare size={24} className="text-pink-500" />
              </a>

              <h4 className="!text-blue-800">Instagram</h4>
            </div>

            <div className="flex gap-[20px]">
              <a href="#" className="">
                <FaLinkedin size={24} className="text-blue-400" />
              </a>

              <h4 className="!text-blue-800">LinkedIn</h4>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-left mt-8">
          Thank you for reaching out! We value every message and will respond as
          soon as possible.
        </p>
      </div>
    </div>
  );
}
