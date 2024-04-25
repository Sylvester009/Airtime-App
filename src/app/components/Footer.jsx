import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-700 bg-slate-950 text-center">
      <div className="flex iems-center jsutify-around p-5 pt-10 gap-10 ml-10">
        <div className="pt-10 pb-10">
          <h2 className="text-3xl font-bold text-white text-left pb-2">JMA MULTILINKS</h2>
          <p>
            Stay Connected Worldwide with Seamless Airtime Top-Up Solutions!
          </p>
        </div>
        <div className="pt-10 pb-10">
          <p className="text-white font-bold text-left">LOCATION</p>
          <address>
            Plot 42 Olabanji Olajide<span className="block">St Eti Osa Lekki Lagos</span>
          </address>
        </div>
        <div className="pt-10 pb-10">
          <p className="text-white font-bold text-left">CONTACT</p>

          <p>08166965432</p>
          <p>info@jmamultilinks.com</p>
        </div>
        <div className="pt-10 pb-10">
          <p className="text-white text-left font-bold">FOLLOW US</p>
        </div>
      </div>
      <p className="p-10">© 2023 JMA Multilinks Ltd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
