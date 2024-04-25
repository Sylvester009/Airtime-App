import React from "react";
import Image from "next/image";

const Faqs = () => {
  return (
    <section className="flex items-center justify-evenly gap-3 mt-20 ml-5 mr-5">
      <div className="w-1/2">
        <Image src="/public/images/faq.webp" alt="" width="100" height="100" />
      </div>
      <div className="w-1/2 pr-10">
        <h2 className="text-4xl font-bold pb-5">FAQS</h2>
        <div className="">
          <p className="p-5 pl-10 bg-blue-600 text-white font-bold">How do I order airtime using your platform?</p>
          <p className="p-10 pt-8 pr-20 text-gray-700">
            Ordering airtime is a breeze. Just select the recipient's country,
            enter their phone number, choose their service provider, specify the
            amount, and complete the payment. Airtime will be delivered
            instantly.
          </p>
        </div>
        <div className="">
          <p className="p-5 pl-10 bg-blue-600 text-white font-bold">Is it mandatory to create an account for airtime purchases?</p>
          <p className="p-10 pt-8 pr-20 text-gray-700">
            No, you do not need to create an account. We offer a straightforward
            process for buying airtime without any registration.
          </p>
        </div>
        <div className="">
          <p className="p-5 pl-10 bg-blue-600 text-white font-bold">
            What's the breadth of your service provider and country coverage?
          </p>
          <p className="p-10 pt-8 pr-20 text-gray-700">
            We have a vast network of 80+ service providers available in more
            than 170+ countries, ensuring global connectivity for airtime
            top-ups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
