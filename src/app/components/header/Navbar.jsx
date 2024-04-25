import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white relative z-10 max-h-20 w-full top-0">
      <logo>
        <h1 className="text-3xl font-extrabold text-gray-900">
          JMA MULTILINKS
        </h1>
      </logo>
      <ul className="flex mr-3 float-right gap-3">
        <li className="text-xl font-semibold text-gray-500">
          <a href="/">Home</a>
        </li>
        <li className="text-xl font-semibold text-gray-500">
          <a href="/contact">Contact</a>
        </li>
        <li className="text-xl font-semibold text-gray-500">
          <a href="/">FAQs</a>
        </li>
        <span>Get In Touch</span>
      </ul>
    </nav>
  );
};

export default Navbar;
