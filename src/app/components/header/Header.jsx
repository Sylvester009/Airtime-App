import React from "react";
import Image from "next/image";
import Form from "./Form";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-16 md:py-24 lg:py-32 flex flex-col md:flex-row justify-center items-center">
        <div className="max-w-3xl mx-auto text-center md:text-left px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
            Your Gateway to International Airtime Top-Ups
          </h1>
          <p className="text-lg md:text-xl text-white mt-4 md:mt-6">
            Introducing JMA Multilinks Ltd, your go-to platform for
            international airtime purchases. No matter where you are on the
            globe, we&apos;ve got you covered.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Form />
        </div>
      </header>
    </>
  );
};

export default Header;
