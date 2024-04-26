import React from "react";
import Image from "next/image";

const Faqs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8 md:mt-12 lg:mt-16 px-4 mb-20">
      <div className="md:w-1/2">
        <Image src="/public/images/faq.webp" alt="" width={100} height={100} />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-6">FAQS</h2>
        <div className="space-y-8">
          <div className="bg-blue-600 text-white rounded-lg p-4 md:p-6">
            <p className="text-lg font-bold">How do I order airtime using your platform?</p>
          </div>
          <p className="text-base md:text-lg text-gray-700">
            Ordering airtime is a breeze. Just select the recipient&apos;s country,
            enter their phone number, choose their service provider, specify the
            amount, and complete the payment. Airtime will be delivered instantly.
          </p>
        </div>
        <div className="space-y-8 mt-8 md:mt-12">
          <div className="bg-blue-600 text-white rounded-lg p-4 md:p-6">
            <p className="text-lg font-bold">Is it mandatory to create an account for airtime purchases?</p>
          </div>
          <p className="text-base md:text-lg text-gray-700">
            No, you do not need to create an account. We offer a straightforward
            process for buying airtime without any registration.
          </p>
        </div>
        <div className="space-y-8 mt-8 md:mt-12">
          <div className="bg-blue-600 text-white rounded-lg p-4 md:p-6">
            <p className="text-lg font-bold">What&apos;s the breadth of your service provider and country coverage?</p>
          </div>
          <p className="text-base md:text-lg text-gray-700">
            We have a vast network of 80+ service providers available in more
            than 170+ countries, ensuring global connectivity for airtime top-ups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
