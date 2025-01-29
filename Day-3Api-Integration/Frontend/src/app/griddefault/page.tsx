"use client";
import React from "react";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";

interface Product {
  id: number;
  name: string;
  price: string;
  discountedPrice: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Vel elit eiusmod",
    price: "$96.00",
    discountedPrice: "$64.00",
    image: "/image5.png",
  },
  {
    id: 2,
    name: "Ultrices condimentum",
    price: "$76.00",
    discountedPrice: "$54.00",
    image: "/grid2.png",
  },
  {
    id: 3,
    name: "Phasellus gravida",
    price: "$86.00",
    discountedPrice: "$56.00",
    image: "/grid3.png",
  },
  {
    id: 4,
    name: "Aenean commodo",
    price: "$66.00",
    discountedPrice: "$46.00",
    image: "/grid4.png",
  },
  {
    id: 5,
    name: "Cras luctus nisi",
    price: "$99.00",
    discountedPrice: "$69.00",
    image: "/image12.png",
  },
  {
    id: 6,
    name: "Nullam viverra",
    price: "$59.00",
    discountedPrice: "$39.00",
    image: "/image7.png",
  },
  {
    id: 7,
    name: "Vestibulum cursus",
    price: "$89.00",
    discountedPrice: "$69.00",
    image: "/image6.png",
  },
  {
    id: 8,
    name: "Quisque sollicitudin",
    price: "$79.00",
    discountedPrice: "$59.00",
    image: "/image9.png",
  },
  {
    id: 9,
    name: "Fusce suscipit",
    price: "$69.00",
    discountedPrice: "$49.00",
    image: "/image10.png",
  },
  {
    id: 10,
    name: "Fusce suscipit",
    price: "$69.00",
    discountedPrice: "$49.00",
    image: "/image12.png",
  },  {
    id: 11,
    name: "Fusce suscipit",
    price: "$69.00",
    discountedPrice: "$49.00",
    image: "/image13.png",
  },
  {
    id: 12,
    name: "Fusce suscipit",
    price: "$69.00",
    discountedPrice: "$49.00",
    image: "/image12.png",
  },
  {
    id: 13,
    name: "Fusce suscipit",
    price: "$69.00",
    discountedPrice: "$49.00",
    image: "/image5.png",
  },
  
  
];

const ShopGrid: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 py-12">
        {/* Full-Width Section */}
        <SectionHeader
    title="Shop Grid Default"
    breadcrumb="Home . Pages"
    breadcrumbHighlight="Shop Grid Default"
    backgroundColor="bg-[#F6F5FF]" // background color as class name
    textColor="text-gray-800" // text color as class name
  />
     

        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <h2 className="text-lg font-semibold text-gray-800">
              Ecommerce Accessories & Fashion Items
            </h2>
            <div className="flex items-center space-x-4">
              <div>
                <label className="text-sm text-gray-500" htmlFor="per-page">
                  Per Page:
                </label>
                <select
                  id="per-page"
                  defaultValue="9"
                  className="ml-2 p-2 border border-gray-300 rounded text-sm"
                >
                  <option value="9">9</option>
                  <option value="12">12</option>
                  <option value="15">15</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-500" htmlFor="sort-by">
                  Sort By:
                </label>
                <select
                  id="sort-by"
                  defaultValue="Best Match"
                  className="ml-2 p-2 border border-gray-300 rounded text-sm"
                >
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-500" htmlFor="view">
                  View:
                </label>
                <select
                  id="view"
                  defaultValue="Grid"
                  className="ml-2 p-2 border border-gray-300 rounded text-sm"
                >
                  <option>Grid</option>
                  <option>List</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-4 text-md font-semibold text-gray-800">
                  {product.name}
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  {product.price}{" "}
                  <span className="line-through ml-2 text-gray-400">
                    {product.discountedPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopGrid;
