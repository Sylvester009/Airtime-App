import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mx-auto max-w-6xl px-6">
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">JMA MULTILINKS</h2>
          <p className="text-sm md:text-base">
            Stay Connected Worldwide with Seamless Airtime Top-Up Solutions!
          </p>
        </div>
        <div className="text-left">
          <p className="text-base md:text-lg font-bold mb-2">LOCATION</p>
          <address>
            Plot 42 Olabanji Olajide<br />
            St Eti Osa Lekki Lagos
          </address>
        </div>
        <div className="text-left">
          <p className="text-base md:text-lg font-bold mb-2">CONTACT</p>
          <p>08166965432</p>
          <p>info@jmamultilinks.com</p>
        </div>
        <div className="text-left">
          <p className="text-base md:text-lg font-bold mb-2">FOLLOW US</p>
          {/* Add social media icons or links here */}
        </div>
      </div>
      <p className="mt-8 text-sm">© {new Date().getFullYear()} JMA Multilinks Ltd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
