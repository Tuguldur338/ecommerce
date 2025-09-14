"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Products = () => {
  const products = [
    {
      name: "ASUS ROG Strix G16",
      image: "/images/asus-rog-strix-G16-gaming-laptop.webp",
      description:
        "ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ 16:10 165Hz/3ms Display, NVIDIA® GeForce RTX™ 5060 Laptop GPU, Intel® Core™ i7 Processor 14650HX, 16GB DDR5, 1TB Gen 4 SSD, Wi-Fi 7, Windows 11 Home",
      price: "1,399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },

    {
      name: "Basics 27 inch Gaming Monitor",
      image: "/images/basics-27-inch-gaming-monitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen h-auto py-10 bg-white">
      <div
        className="max-w-screen w-[98%] h-[1000px] flex items-start justify-start p-10 gap-5 bg-white rounded-[16px]"
        id="products"
      >
        <div className="w-full h-full">
          <Carousel className="w-full h-full">
            {products.map((product, index) => (
              <Carousel.Item
                key={index}
                className="flex flex-col items-center justify-center h-full"
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-contain w-[400px] h-auto"
                  />
                  <h4 className="mt-4 text-center">{product.name}</h4>

                  <p className="mt-2 text-center w-[400px]">
                    {product.description}
                  </p>

                  <h3 className="mt-3 text-center">
                    ${" "}
                    <span className="text-2xl font-bold">
                      {product.price.split(".")[0]}
                    </span>
                    <span className="text-sm">
                      .{product.price.split(".")[1]}
                    </span>
                  </h3>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Products;
