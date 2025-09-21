"use client";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogInSignUpModal from "./functions/handling-log-in-button";
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header className="max-w-screen h-[100px] shadow-md items-center flex justify-center bg-white">
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom w-[98%] h-[80px] rounded-[40px] bg-gray-300">
        <div>
          <Link href="/">
            <Image
              src="/images/eccomerce-logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-20 h-auto cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    href="/About"
                    className="cursor-pointer relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-blue-800 !text-blue-800 !font-semibold pb-[5px] ml-4"
                  >
                    About
                  </Nav.Link>

                  <Nav.Link
                    href="/AllProducts"
                    className="cursor-pointer relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-blue-800 !text-blue-800 !font-semibold pb-[5px] ml-4"
                  >
                    Products
                  </Nav.Link>

                  <Nav.Link
                    href="/ContactUs"
                    className="cursor-pointer relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-blue-800 !text-blue-800 !font-semibold pb-[5px] ml-4"
                  >
                    Contact us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div>
          <LogInSignUpModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
