"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";
import CookieTerms from "@/app/Privacy/cookie-terms";

const GoShoppingButton = () => {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen 
      bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/ecommerce-image.webp')]
      bg-cover bg-center bg-no-repeat text-center"
      >
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

        <Link
          href={"/Privacy"}
          className="!no-underline hover:!text-blue-300 transition-all duration-300"
        >
          Go to our cookie terms page!
        </Link>
      </div>

      <CookieTerms />
    </>
  );
};

export default GoShoppingButton;
