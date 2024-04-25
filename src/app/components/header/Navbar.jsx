"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex-shrink-0">
            <a href="/">
              <h1 className="text-3xl font-extrabold text-gray-900">JMA MULTILINKS</h1>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-lg font-semibold text-gray-500 hover:text-gray-900">
                Home
              </a>
              <a href="/contact" className="text-lg font-semibold text-gray-500 hover:text-gray-900">
                Contact
              </a>
              <a href="/" className="text-lg font-semibold text-gray-500 hover:text-gray-900">
                FAQs
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="mobile-menu-button flex items-center justify-center"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              FAQs
            </a>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <span className="hidden md:block inline-block rounded-md shadow-md bg-gray-800 text-white text-center py-2 px-4 mr-4">
          Get In Touch
        </span>
        <span className="md:hidden block w-full rounded-md shadow-md bg-gray-800 text-white text-center py-2">
          Get In Touch
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
