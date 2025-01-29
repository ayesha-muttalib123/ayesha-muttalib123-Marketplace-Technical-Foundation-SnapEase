"use client"; // This makes the component a Client Component

import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Import star icon

const Sidebar: React.FC = () => {
  // State to track selected items
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Function to toggle selection of an item
  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Function to render stars based on the rating value (up to 5 stars)
  const renderStars = (rating: string) => {
    const count = Math.min(parseInt(rating.replace(/\D/g, "")), 5); // Extract the number and cap at 5
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: count }, (_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
        {/* Fill empty stars to always show 5 stars */}
        {Array.from({ length: 5 - count }, (_, index) => (
          <FaStar key={count + index} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <aside className="w-full sm:w-[300px] p-4 pl-[5%] sm:pl-6">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Product Brand Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Product Brand</h3>
        <ul className="space-y-2">
          {[
            "Coaster Furniture",
            "Fusion Dot High Fashion",
            "Unique Furniture Restor",
            "Dream Furniture Flipping",
            "Young Repurposed",
            "Green DIY Furniture",
          ].map((brand) => (
            <li key={brand} className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(brand)}
                  onChange={() => toggleItem(brand)}
                  className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                    selectedItems.includes(brand)
                      ? "bg-pink-800 border-transparent"
                      : "bg-pink-300 border-pink-600"
                  }`}
                />
                {/* Centered tick */}
                {selectedItems.includes(brand) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    ✓
                  </span>
                )}
              </div>
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* Discount Offer Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Discount Offer</h3>
        <ul className="space-y-2">
          {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
            (offer) => (
              <li key={offer} className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(offer)}
                    onChange={() => toggleItem(offer)}
                    className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                      selectedItems.includes(offer)
                        ? "bg-pink-800 border-transparent"
                        : "bg-pink-300 border-pink-600"
                    }`}
                  />
                  {/* Centered tick */}
                  {selectedItems.includes(offer) && (
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                      ✓
                    </span>
                  )}
                </div>
                {offer}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Rating Item Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Rating Item</h3>
        <ul className="space-y-2">
          {["(2341)", "(1726)", "(258)", "(25)"].map((rating) => (
            <li key={rating} className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(rating)}
                  onChange={() => toggleItem(rating)}
                  className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                    selectedItems.includes(rating)
                      ? "bg-yellow-800 border-transparent"
                      : "bg-yellow-300 border-yellow-600"
                  }`}
                />
                {/* Centered tick */}
                {selectedItems.includes(rating) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    ✓
                  </span>
                )}
              </div>
              {/* Render stars for rating, capped to 5 stars */}
              {renderStars(rating)}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-2">
          {[
            "Prestashop",
            "Magento",
            "Bigcommerce",
            "osCommerce",
            "3dcart",
            "Bags",
            "Accessories",
            "Jewellery",
            "Watches",
          ].map((category) => (
            <li key={category} className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(category)}
                  onChange={() => toggleItem(category)}
                  className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                    selectedItems.includes(category)
                      ? "bg-purple-800 border-transparent"
                      : "bg-purple-300 border-purple-600"
                  }`}
                />
                {/* Centered tick */}
                {selectedItems.includes(category) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    ✓
                  </span>
                )}
              </div>
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price Filter</h3>
        <ul className="space-y-2">
          {[
            "$0.00 - $150.00",
            "$150.00 - $350.00",
            "$150.00 - $504.00",
            "$450.00 +",
            "$10.00 - $20000",
          ].map((price) => (
            <li key={price} className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(price)}
                  onChange={() => toggleItem(price)}
                  className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                    selectedItems.includes(price)
                      ? "bg-purple-800 border-transparent"
                      : "bg-purple-300 border-purple-600"
                  }`}
                />
                {/* Centered tick */}
                {selectedItems.includes(price) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    ✓
                  </span>
                )}
              </div>
              {price}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Slider */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price Filter</h3>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>

     {/* Find by Color Section */}
{/* Find by Color Section */}
<div className="mb-6">
  <h3 className="font-semibold mb-4 text-lg">Find by Color</h3>
  <div className="flex flex-wrap gap-4">
    {[
      { color: "bg-red-500", label: "Red" },
      { color: "bg-blue-500", label: "Blue" },
      { color: "bg-amber-700", label: "Brown" },
      { color: "bg-green-500", label: "Green" },
      { color: "bg-purple-700", label: "Purple" },
      { color: "bg-sky-300", label: "Sky" },
    ].map(({ color, label }) => (
      <div
        key={label}
        className="flex items-center gap-2 text-sm justify-start"
      >
        <div className={`${color} w-6 h-6 rounded-full mr-2`} />
        <span>{label}</span>
      </div>
    ))}
  </div>
</div>

    </aside>
  );
};

export default Sidebar;
