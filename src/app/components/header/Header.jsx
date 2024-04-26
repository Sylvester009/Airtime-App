import React from "react";
import Image from "next/image";
import Form from "./Form";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-8 md:py-12 lg:py-16 flex flex-col md:flex-row justify-center items-center">
        <div className="max-w-3xl mx-auto text-center md:text-left px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4 md:mb-6">
            Your Gateway to International Airtime Top-Ups
          </h1>
          <p className="text-base md:text-lg text-white">
            Introducing JMA Multilinks Ltd, your go-to platform for
            international airtime purchases. No matter where you are on the
            globe, we've got you covered.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Form />
        </div>
      </header>
    </>
  );
};

export default Header;
