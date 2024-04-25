import React from "react";

import Image from "next/image";
import Form from "./Form";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="flex bg-slate-400 w-full justify-evenly h-screen items-center" id="home">
        <div className="p-20 pl-20">
          <h1 className="text-5xl text-white font-bold">
            Your Gateway to International Airtime Top-Ups
          </h1>
          <p  className="text-white pt-10">
            Introducing JMA Multilinks Ltd, your go-to platform for
            international airtime purchases. No matter where you are on the
            globe, we&apos;ve got you covered.
          </p>
        </div>
        <div className="p-20">
          <Form />
        </div>
      </header>
    </>
  );
};

export default Header;
