import React from "react";

const About = () => {
  return (
    <section className="text-center mt-8 md:mt-12 lg:mt-16">
      <p className="text-sm text-gray-600 uppercase tracking-wide">
        JMA MULTILINKS LTD
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 md:mt-6 lg:mt-8">
        Why Choose Us
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-8 md:mt-10 lg:mt-12 gap-8 m-8">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 w-full md:w-auto">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Global Accessibility
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            We offer international airtime top-ups for anyone, regardless of
            their location.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 w-full md:w-auto">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Swift Recharge
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            With just a few clicks, your mobile credit is recharged, so you can
            maintain constant communication with loved ones.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 w-full md:w-auto">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Support
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            Choose from a wide range of countries and service providers,
            tailored to your preferences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
