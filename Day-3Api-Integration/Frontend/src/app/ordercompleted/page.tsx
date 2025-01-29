"use client";
import React from "react";

import Image from "next/image";
import Footer from "../components/Footer/Footer";
import SectionHeader from "../components/SectionHeader";

const OrderConfirmation = () => {
  return (
    <div>
      {/* Section Header */}
      <SectionHeader        title="Order Completed"
        breadcrumb="Home . Pages"
        breadcrumbHighlight="Order Completed"
        backgroundColor="bg-[#F6F5FF]"
        textColor="text-gray-800"
      />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-12 bg-white">
        {/* Icons Section */}
        <div className="flex items-center justify-center mb-6 space-x-4">
          {/* Watch Icon */}
          <div className="w-16 h-16 flex items-center justify-center">
            <Image
              src="/watch.png"
              width={70}
              height={70}
              alt="Order Icon"
              className="object-contain"
            />
          </div>
          {/* Checkmark Icon */}
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <span className="text-pink-600 text-2xl">✔</span>
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6 sm:p-8 text-center w-full max-w-lg">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Your Order is Completed!
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
            Thank you for your order! Your order is being processed and will be
            completed within 1–3 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          {/* Button */}
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded transition"
            onClick={() => alert("Continue Shopping")}
          >
            Continue Shopping
          </button>
        </div>

        {/* Order Image */}
        <div className="mt-8 flex justify-center items-center">
          <Image
            src="/order.png"
            width={70}
            height={70}
            alt="Order Icon"
            className="object-contain"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
