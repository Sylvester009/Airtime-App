import React from "react";

const About = () => {
  return (
    <section className="text-center mt-10">
      <p className="text-sm p-2">JMA MULTILINKS LTD</p>
      <h2 className="text-4xl font-bold">Why Choose Us</h2>
      <div className="flex justify-evenly items-center p-10">
        <div className="shadow-lg">
          <h3 className="p-4 text-2xl font-bold text-gray-900">Global Accessibility </h3>
          <p className="p-10 text-gray-700">
            We offer international airtime top-ups for anyone, regardless of
            their location.
          </p>
        </div>
        <div className="shadow-lg">
          <h3 className="p-4 text-2xl font-bold text-gray-900">Swift Recharge </h3>
          <p className="p-10 text-gray-700">
            With just a few clicks, your mobile credit is recharged, so you can
            maintain constant communication with loved ones.
          </p>
        </div>
        <div className="shadow-lg">
          <h3 className="p-4 text-2xl font-bold text-gray-900">Support </h3>
          <p className="p-10 text-gray-700">
            Choose from a wide range of countries and service providers,
            tailored to your preferences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
