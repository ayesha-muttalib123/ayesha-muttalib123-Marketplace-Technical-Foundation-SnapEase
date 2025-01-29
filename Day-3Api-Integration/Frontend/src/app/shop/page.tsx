import React from "react";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import SectionHeader from "../components/SectionHeader";

interface Product {
  id: number;
  name: string;
  price: string;
  discountedPrice: string;
  rating: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    price: "$60.00",
    discountedPrice: "$40.00",
    rating: 4,
    image: "/shoplist1.png",
  },
  {
    id: 2,
    name: "In nulla",
    price: "$50.00",
    discountedPrice: "$30.00",
    rating: 5,
    image: "/shoplist2.png",
  },
  {
    id: 3,
    name: "In nulla",
    price: "$50.00",
    discountedPrice: "$30.00",
    rating: 5,
    image: "/shoplist3.png",
  },
  {
    id: 4,
    name: "In nulla",
    price: "$50.00",
    discountedPrice: "$30.00",
    rating: 5,
    image: "/shoplist4.png",
  },
  // Add more products here...
];

// Function to generate stars based on the rating
const generateStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 15l-5.5 3L6 12 1 7h6.5L10 1l2.5 6H18l-5 5 1.5 6z" />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 15l-5.5 3L6 12 1 7h6.5L10 1l2.5 6H18l-5 5 1.5 6z" />
        </svg>
      );
    }
  }
  return stars;
};

const ShopList: React.FC = () => {
  return (
    <div>
      
      <SectionHeader
    title="Shop List"
    breadcrumb="Home . Pages"
    breadcrumbHighlight="Shop List"
    backgroundColor="bg-[#F6F5FF]" // background color as class name
    textColor="text-gray-800" // text color as class name
  />
    

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Ecommerce Accessories & Fashion Item
          </h2>
          <div className="flex space-x-4">
            <select
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-purple-500 focus:border-purple-500"
              defaultValue="9"
            >
              <option value="9">9 per page</option>
              <option value="12">12 per page</option>
              <option value="15">15 per page</option>
            </select>
            <select
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-purple-500 focus:border-purple-500"
              defaultValue="Best Match"
            >
              <option value="Best Match">Best Match</option>
              <option value="Price Low to High">Price: Low to High</option>
              <option value="Price High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Product Image */}
              <div className="flex-shrink-0 mb-4">
                <Image
                  src={product.image}
                  width={500}
                  height={500}
                  alt={product.name}
                  className="object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

                {/* Price and Rating */}
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-purple-600 font-bold">
                    {product.discountedPrice}
                  </span>
                  <span className="line-through text-gray-400">{product.price}</span>
                  <div className="ml-2 flex items-center space-x-1">
                    {generateStars(product.rating)}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                {/* Action Icons */}
                <div className="mt-2 flex space-x-2">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-500 hover:text-purple-500 transition-colors">
                    <FiShoppingCart className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-500 hover:text-purple-500 transition-colors">
                    <FiHeart className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-500 hover:text-purple-500 transition-colors">
                    <FaMagnifyingGlassPlus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShopList;
