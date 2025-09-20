"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
}

const Products: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    if (!cart.some((p) => p.name === product.name)) {
      setCart((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (product: Product) => {
    setCart((prev) => prev.filter((p) => p.name !== product.name));
  };

  const products: Product[] = [
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
      price: "164.99",
    },
    {
      name: "Japanese large Gaming mouse pad",
      image: "/images/japanese-Large-GamingMouse-Pad-WithStitchedEdges.webp",
      description: "",
      price: "9.99",
    },
    {
      name: "Kafri Dual Headphone Stand with USB charger",
      image: "/images/kafri-Dual-Headphone-Stand-With-USB-Charger.webp",
      description: "",
      price: "26.99",
    },
    {
      name: "Gaming Mouse Pad",
      image: "/images/mouse-Pad-gamingMousepad.webp",
      description: "",
      price: "11.99",
    },
    {
      name: "MSI codex z2 Gaming Desktop",
      image: "/images/msi-codex-z2-gamingDesktop.webp",
      description: "",
      price: "1498.94",
    },
    {
      name: "MSI Katana 15 HX 15.6 Gaming Laptop",
      image: "/images/msi-Katana15-HX-15.6-GamingLaptop.webp",
      description: "",
      price: "1622.83",
    },
    {
      name: "Roblox digital gift card 1000 robux",
      image: "/images/roblox-Digital-GiftCard-1000Robux.webp",
      description: "",
      price: "10.00",
    },
    {
      name: "Vegcoo Wireless Gaming Mouse",
      image: "/images/vegcoo-Wireless-GamingMouse.webp",
      description: "",
      price: "15.19",
    },
    {
      name: "Xbox Wireless Controller",
      image: "/images/xbox-Wireless-GamingController.webp",
      description: "",
      price: "153.00",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-screen h-auto py-10 bg-white">
        <div
          className="max-w-screen w-[98%] flex flex-wrap items-start justify-start p-10 gap-5 bg-white rounded-[16px]"
          id="products"
        >
          {products.map((product) => {
            const isInCart = cart.some((item) => item.name === product.name);
            const [whole, decimal] = product.price.includes(".")
              ? product.price.split(".")
              : [product.price, "00"];

            return (
              <div
                key={product.name}
                className="flex flex-col items-center justify-center w-[400px] p-4 bg-gray-50 rounded-lg shadow h-[1000px]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-auto"
                />

                <h4 className="mt-4 text-center">{product.name}</h4>

                <p className="mt-2 text-center">
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
                    className="!border-none w-[140px] h-[50px] hover:!scale-110 transition-all duration-300"
                    onClick={() =>
                      isInCart ? removeFromCart(product) : addToCart(product)
                    }
                  >
                    {isInCart ? "Added to cart" : "Add to cart"}
                  </Button>
                  
                  <Button
                    variant="danger"
                    className="!border-none w-[140px] h-[50px] hover:!scale-110 hover:!bg-red-600 transition-all duration-300"
                    onClick={() => removeFromCart(product)}
                    disabled={!isInCart}
                  >
                    Remove item
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shopping Cart */}
      <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded shadow-lg w-[220px] max-h-[80vh] overflow-y-auto border border-gray-300">
        <Link
          href="/AddedToCart"
          className="flex items-center gap-2 mb-4 border-b border-gray-300 pb-2"
        >
          <FaShoppingCart
            size={28}
            className="text-black hover:text-gray-500 transition"
          />
          <span className="flex w-6 h-6 rounded-full bg-red-600 text-white text-center justify-center items-center text-sm">
            {cart.length}
          </span>
        </Link>

        <div className="flex flex-col">
          {cart.length > 0 &&
            cart.map((product, index) => (
              <div key={product.name} className="mb-2">
                <p className="text-sm">
                  {index + 1}. {product.name}
                </p>
                <p className="text-xs text-gray-400">${product.price}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
