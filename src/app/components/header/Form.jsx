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
    <form className="bg-white shadow-lg p-6 rounded-xl flex flex-wrap items-center justify-center sm:p-10 md:p-12 lg:p-16">
      <h1 className="text-3xl font-bold text-gray-900 text-center w-full mb-6">
        Buy Airtime
      </h1>
      <div className="flex flex-col w-full md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 md:pr-3">
          <label htmlFor="country" className="text-gray-600 font-medium mt-2">
            Country
          </label>
          <select 
            className="p-3 text-gray-600 border-2 border-gray-300 bg-white w-full rounded-md focus:outline-none focus:border-blue-500"
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
        <div className="w-full md:w-1/2 md:pl-3">
          <label htmlFor="number" className="text-gray-600 font-medium mt-2">
            Phone Number
          </label>
          <input
            id="number"
            type="tel"
            className="p-3 text-gray-600 border-2 border-gray-300 bg-white w-full rounded-md focus:outline-none focus:border-blue-500"
            disabled={phoneNumberDisabled}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="text-gray-600 font-medium">Service Provider</p>
        <select className="p-3 text-gray-600 border-2 border-gray-300 bg-white w-full rounded-md focus:outline-none focus:border-blue-500">
          <option>select provider</option>
          <option>MTN NG</option>
          <option>GLO</option>
          <option>Airtel</option>
          <option>9Mobile</option>
        </select>
      </div>
      <div className="w-full mt-4">
        <p className="text-gray-600 font-medium">Amount</p>
        <input
          className="p-3 text-gray-600 border-2 border-gray-300 bg-white w-full rounded-md focus:outline-none focus:border-blue-500"
          type="number"
        />
      </div>
      <button
        type="submit"
        className="p-3 text-white border-2 font-bold bg-blue-700 w-full mt-6 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
      >
        Purchase
      </button>
    </form>
  );
};

export default Form;
