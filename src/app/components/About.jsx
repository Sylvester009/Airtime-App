import React from "react";

const About = () => {
  return (
    <section className="text-center">
      <p>JMA MULTILINKS LTD</p>
      <h2>Why Choose Us</h2>
      <div className="flex justify-evenly items-center">
        <div className="box one">
          <h3>Global Accessibility </h3>
          <p>
            We offer international airtime top-ups for anyone, regardless of
            their location.
          </p>
        </div>
        <div className="box two">
          <h3>Swift Recharge </h3>
          <p>
            With just a few clicks, your mobile credit is recharged, so you can
            maintain constant communication with loved ones.
          </p>
        </div>
        <div className="box three">
          <h3>Support </h3>
          <p>
            Choose from a wide range of countries and service providers,
            tailored to your preferences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
