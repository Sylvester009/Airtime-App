import React from "react";

const Form = () => {
  return (
    <form>
      <h1>Buy Airtime</h1>
      <div className="flex justify-evenly items-center">
        <label for="country">
          Country
          <select>
            <option>Nigeria</option>
          </select>
        </label>
        <label for ="number">
          Phone Number
          <input type="tel" />
        </label>
      </div>
      <div>
        <p>Service Provider</p>
        <select>
          <option>select provider</option>
        </select>
      </div>
      <div>
        <p>Amount</p>
        <input />
      </div>
      <button type="submit">Purchase</button>
    </form>
  );
};

export default Form;
