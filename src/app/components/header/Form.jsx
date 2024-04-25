"use client";

import React, { useState, useEffect } from "react";

const Form = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberDisabled, setPhoneNumberDisabled] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const data = await response.json();
          const sortedCountries = data
            .map(country => country.name.common)
            .sort((a, b) => a.localeCompare(b));
          setCountries(sortedCountries);
        } else {
          throw new Error("Failed to fetch countries");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setPhoneNumberDisabled(false); // Enable phone number input
  };

  return (
    <form className="bg-white shadow-lg p-12 pt-0 rounded-xl flex flex-wrap relative z-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center w-full mt-3 mb-3">
        Buy Airtime
      </h1>
      <div className="flex justify-between items-center w-full gap-3">
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="country" className="text-gray-600 font-medium mt-2">
            Country
          </label>
          <select 
            className="p-3 text-gray-600 border-2 border-gray-300 border-solid bg-white w-full"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="number" className="text-gray-600 font-medium mt-2">
            Phone Number
          </label>
          <input
            id="number"
            type="tel"
            className="p-3 text-gray-600 border-2 border-gray-300 border-solid bg-white w-full"
            disabled={phoneNumberDisabled}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-gray-600 font-medium mt-2">Service Provider</p>
        <select className="p-3 text-gray-600 border-2 border-gray-300 border-solid bg-white w-full">
          <option>select provider</option>
        </select>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-gray-600 font-medium mt-2">Amount</p>
        <input
          className="p-3 text-gray-600 border-2 border-gray-300 border-solid bg-white w-full"
          type="number"
        />
      </div>
      <button
        type="submit"
        className="p-3 text-white border-2 font-bold bg-blue-700 w-full mt-5"
      >
        Purchase
      </button>
    </form>
  );
};

export default Form;
