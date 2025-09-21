"use client";

import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
        About Us
      </h1>
      <div className="max-w-3xl space-y-8">
        <p className="text-gray-700">
          Welcome to ShopEase, your number one source for all things tech and
          lifestyle. We are dedicated to giving you the very best products with
          a focus on quality, customer service, and uniqueness. Our mission is
          to make online shopping seamless, enjoyable, and trustworthy.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Our Story
          </h2>

          <p className="text-gray-700">
            Founded in 2023, ShopEase started as a small startup with a big
            vision: to make premium products accessible to everyone, everywhere.
            Over the years, we have expanded our catalog to include a wide range
            of electronics, fashion, and lifestyle products, all carefully
            curated for quality and value.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Why Choose Us?
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>High-quality, curated products.</li>
            <li>Fast and reliable shipping.</li>
            <li>24/7 customer support and hassle-free returns.</li>
            <li>Secure and easy online shopping experience.</li>
          </ul>
        </div>

        <p className="text-gray-600 mt-8 text-left">
          Thank you for choosing ShopEase. We’re thrilled to have you as a part
          of our community!
        </p>
      </div>
    </div>
  );
}
