"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";

const GoShoppingButton = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[url('/images/ecommerce-image.webp')] bg-cover bg-center bg-no-repeat inset-0 bg-black/70">
      {/* Content */}
      <h1 className="text-4xl font-bold mb-6 text-white">
        Welcome to Our Store!
      </h1>

      <p className="text-lg mb-6 text-white">
        Discover amazing products and deals.
      </p>
      <Link
        href="/AllProducts"
        className="!no-underline hover:!text-blue-300 transition-all duration-300"
      >
        Go shopping
      </Link>
    </div>
  );
};

export default GoShoppingButton;
