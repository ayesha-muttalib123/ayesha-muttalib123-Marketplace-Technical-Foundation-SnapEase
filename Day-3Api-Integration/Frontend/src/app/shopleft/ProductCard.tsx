import React from "react";
import Image from "next/image";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";


interface Product {
  id: number;
  name: string;
  price: string;
  discountedPrice: string;
  rating: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Accumsan tincidunt", price: "$60.00", discountedPrice: "$40.00", rating: 4, image: "/shoplist1.png" },
  { id: 2, name: "In nulla", price: "$50.00", discountedPrice: "$30.00", rating: 5, image: "/shoplist2.png" },
  { id: 5, name: "In nulla", price: "$50.00", discountedPrice: "$30.00", rating: 5, image: "/shoplist3.png" },
  { id: 6, name: "In nulla", price: "$50.00", discountedPrice: "$30.00", rating: 5, image: "/shoplist4.png" },
  { id: 7, name: "In nulla", price: "$50.00", discountedPrice: "$30.00", rating: 5, image: "/shoplist4.png" },
];

const generateStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M10 15l-5.5 3L6 12 1 7h6.5L10 1l2.5 6H18l-5 5 1.5 6z" />
    </svg>
  ));
};

const ProductCard: React.FC = () => {
  return (
    <div className="bg-white w-full">
      {/* Main Content Wrapper */}
      <div className="w-full sm:px-6 lg:px-8 py-10 items-center">
        {/* Section Header */}
        <header className="flex w-full justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Ecommerce Accessories & Fashion Items
          </h2>
          <div className="flex space-x-4">
            <select className="border rounded px-3 py-2 text-sm focus:ring-purple-500 focus:border-purple-500" defaultValue="9">
              <option value="9">9 per page</option>
              <option value="12">12 per page</option>
              <option value="15">15 per page</option>
            </select>
            <select className="border rounded px-3 py-2 text-sm focus:ring-purple-500 focus:border-purple-500" defaultValue="Best Match">
              <option value="Best Match">Best Match</option>
              <option value="Price Low to High">Price: Low to High</option>
              <option value="Price High to Low">Price: High to Low</option>
            </select>
          </div>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row gap-6 p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Product Image */}
              <div className="flex-shrink-0 w-full sm:w-1/3">
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.name}
                  className="object-cover rounded-md w-full h-full"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between flex-grow w-full sm:w-2/3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    {product.name}
                    <div className="flex space-x-1">
                      <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                      <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                      <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
                    </div>
                  </h3>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-purple-600 font-bold">{product.discountedPrice}</span>
                    <span className="line-through text-gray-400">{product.price}</span>
                  </div>
                  <div className="mt-1 flex items-center">{generateStars(product.rating)}</div>
                  <p className="text-sm text-gray-500 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam aliquam unde iure corporis neque veniam molestias officiis quibusdam rerum, commodi excepturi, eos temporibus esse amet facere accusantium! Unde, enim.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-2">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-500 hover:text-purple-500">
                    <FiShoppingCart className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-500 hover:text-purple-500">
                    <FiHeart className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-500 hover:text-purple-500">
                    <FaMagnifyingGlassPlus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
