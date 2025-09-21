"use client";

import React from "react";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
import CookieTerms from "@/app/Privacy/cookie-terms";
import Image from "next/image";
const GoShoppingButton = () => {
  const carouselItems = [
    "/images/ecommerce-image.webp",
    "/images/people-talking.jpeg",
    "/images/person-wearing-headphones.jpeg",
  ];

  return (
    <>
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Carousel Background */}
        <Carousel
          interval={3000}
          controls={false}
          indicators={false}
          pause={false}
          className="h-[700px] w-full"
        >
          {carouselItems.map((src, index) => (
            <Carousel.Item key={index} className="w-full h-[700px] relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${src})`,
                }}
              />
              <Image
                src={src}
                fill
                alt={src}
                className="w-full object-center object-cover h-[700px] opacity-0"
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Foreground Content */}
        <div className="absolute z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Welcome to Our Store!
          </h1>

          <p className="text-lg mb-6 text-white">
            Discover amazing products and deals.
          </p>

          <Link
            href="/AllProducts"
            className="!no-underline hover:!text-blue-300 transition-all duration-300 text-xl font-semibold"
          >
            Go shopping
          </Link>
        </div>
      </div>

      <CookieTerms />
    </>
  );
};

export default GoShoppingButton;
