"use client";

import Image from "next/image";
import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

const Products = ({ cart = [], addToCart, removeFromCart }: any) => {
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
      image: "/images/basics-27inch-gamingMonitor.webp",
      description: "High-quality 27 inch monitor for gaming and productivity",
      price: "399.99",
    },
    {
      name: "Japanese large Gaming mouse pad",
      image: "/images/japanese-Large-GamingMouse-Pad-WithStitchedEdges.webp",
      description: "",
      price: "399.99",
    },
    {
      name: "Kafri Dual Headphone Stand with USB charger",
      image: "/images/kafri-Dual-Headphone-Stand-With-USB-Charger.webp",
      description: "",
      price: "399.99",
    },
    {
      name: "Gaming Mouse Pad",
      image: "/images/mouse-Pad-gamingMousepad.webp",
      description: "",
      price: "399.99",
    },
    {
      name: "MSI codex z2 Gaming Desktop",
      image: "/images/msi-codex-z2-gamingDesktop.webp",
      description: "",
      price: "399.99",
    },
    {
      name: "MSI Katana 15 HX 15.6 Gaming Laptop",
      image: "/images/msi-Katana15-HX-15.6-GamingLaptop.webp",
      description: "",
      price: "399.99",
    },
    {
      name: "Roblox digital gift card 1000 robux",
      image: "/images/roblox-Digital-GiftCard-1000Robux.webp",
      description: "",
      price: "399.99",
    },
    {
      name: "Vegcoo Wireless Gaming Mouse",
      image: "/images/vegcoo-Wireless-GamingMouse.webp",
      description: "",
      price: "399.99",
    },
    {
      name: "Xbox Wireless Controller",
      image: "/images/xbox-Wireless-GamingController.webp",
      description: "",
      price: "399.99",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-screen h-auto py-10 bg-white">
      <div
        className="max-w-screen w-[98%] h-[1000px] flex items-start justify-start p-10 gap-5 bg-white rounded-[16px]"
        id="products"
      >
        <div className="w-full h-full">
          <Carousel
            className="w-full h-full"
            indicators={false}
            interval={10000}
          >
            {products.map((product, index) => {
              const isInCart = cart.some(
                (item: any) => item.name === product.name
              );

              const [whole, decimal] = product.price.split(".");

              return (
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
                      {product.description || "No description available"}
                    </p>

                    <h3 className="mt-3 text-center">
                      <span className="text-[23px]">$</span>
                      <span className="text-2xl font-bold">{whole}</span>
                      {decimal && <span className="text-sm">.{decimal}</span>}
                    </h3>

                    <div className="flex items-center justify-center gap-5 mt-4">
                      <Button
                        variant={isInCart ? "secondary" : "success"}
                        className="!border-none hover:!scale-110 !transition-all duration-300 w-[140px] h-[50px]"
                        onClick={() =>
                          isInCart
                            ? removeFromCart(product)
                            : addToCart(product)
                        }
                      >
                        {isInCart ? "Added to cart" : "Add to cart"}
                      </Button>

                      <Button
                        variant="danger"
                        className="!border-none hover:!bg-red-600 hover:!scale-110 !transition-all duration-300 w-[140px] h-[50px]"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove item
                      </Button>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Products;
