'use client'
import { FaArrowRight } from 'react-icons/fa';
import React, { useState } from "react";


const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mt-12 bg-[#F9F8FE]">
      {/* Tab Navigation */}
      <div className="flex border-b-2 mb-6">
        <button
          className={`py-2 px-6 text-lg font-semibold ${activeTab === "description" ? "border-b-2 border-pink-600" : "text-gray-600"}`}
          onClick={() => handleTabChange("description")}
        >
          Description
        </button>
        <button
          className={`py-2 px-6 text-lg font-semibold ${activeTab === "additionalInfo" ? "border-b-2 border-pink-600" : "text-gray-600"}`}
          onClick={() => handleTabChange("additionalInfo")}
        >
          Additional Info
        </button>
        <button
          className={`py-2 px-6 text-lg font-semibold ${activeTab === "reviews" ? "border-b-2 border-pink-600" : "text-gray-600"}`}
          onClick={() => handleTabChange("reviews")}
        >
          Reviews
        </button>
        <button
          className={`py-2 px-6 text-lg font-semibold ${activeTab === "video" ? "border-b-2 border-pink-600" : "text-gray-600"}`}
          onClick={() => handleTabChange("video")}
        >
          Video
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-600">
        {activeTab === "description" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <h1>Varius tempor.</h1>
            <p>

              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. 
              Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, 
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, 
              nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.
            </p>
        
            <ul className="pl-0 mt-5 mb-5">
            <h1 className='font-bold mb-5'>More details</h1>
      <li className="flex items-center hover:underline">
        <FaArrowRight className="mr-2 text-gray-900" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
      </li>
      <li className="flex items-center  hover:underline">
        <FaArrowRight className="mr-2 text-gray-900" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
      </li>
      <li className="flex items-center  hover:underline">
        <FaArrowRight className="mr-2 text-gray-900" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
      </li>
      <li className="flex items-center  hover:underline">
        <FaArrowRight className="mr-2 text-gray-900" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
      </li>
    </ul>
          </div>
        )}
        {activeTab === "additionalInfo" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Additional Info</h2>
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. 
              Dui, massa viverra. Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. 
              Eu in fringilla vulputate nunc nec. Dui, massa viverra.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit. Montes, mauris varius ac est bibendum.
            </p>
            {/* Add review content here */}
          </div>
        )}
        {activeTab === "video" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Video</h2>
            <p>
              Watch our product video to learn more about its features and benefits. 
              <iframe width="560" height="315" src="https://www.youtube.com/embed/example" title="Product Video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
