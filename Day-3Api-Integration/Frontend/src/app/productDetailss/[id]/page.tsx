// src/app/productDetailss/[id]/page.tsx

import Image from "next/image";
import { client } from "../../../../../studio-template4-ecommerce-website/lib/client";
import { FaStar, FaRegStar, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import SectionHeader from "@/app/components/SectionHeader";

import Footer from "@/app/components/Footer/Footer";
import ProductDetailsTabs from "@/app/home/ProductDetailsTabs";


// Define the product type
type Product = {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
  category: string;
};
const relatedProducts = [
    { id: 1, image: "/product5.png", name: "Men's Fashion Wear", price: "$43.00", rating: 4 },
    { id: 2, image: "/product6.png", name: "Women’s Fashion", price: "$67.00", rating: 5 },
    { id: 3, image: "/product7.png", name: "Wolx Dummy Fashion", price: "$67.00", rating: 3 },
    { id: 4, image: "/product8.png", name: "Top Wall Digital Clock", price: "$51.00", rating: 4 },
  ];


const ProductDetails = async ({ params }: { params: { id: string } }) => {
  // Fetch product data server-side
  const query = `*[_type == "product" && _id == $id]{
    _id,
    "id": _id,
    name,
    "imagePath": image.asset->url,
    "price": price,
    "description": description,
    "discountPercentage": discountPercentage,
    "stockLevel": stockLevel,
    "category": category
  }`;

  const product :Product[]= await client.fetch(query, { id: params.id });

  // Check if product is found
  if (!product || product.length === 0) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  const productDetails = product[0];

  // Calculate discounted price
  const discountedPrice = productDetails.discountPercentage
    ? (productDetails.price - (productDetails.discountPercentage / 100) * productDetails.price).toFixed(2)
    : productDetails.price;

  return (
    <div className="bg-gray-50">
      {/* Section Header */}
      <SectionHeader
        title="Product Details"
        breadcrumb="Home . Pages"
        breadcrumbHighlight="Product Details"
        backgroundColor="bg-[#F6F5FF]"
        textColor="text-gray-800"
      />

      {/* Product Section */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Product Images */}
        <div className="relative w-full h-96">
          <Image
            src={productDetails.imagePath}
            alt={productDetails.name}
            layout="fill"
            objectFit="contain"
            className="rounded"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-[#1A0B5B]">{productDetails.name}</h1>
          <h6 className=" font-semibold text-[#757479] mt-[3%] mb-[3%]"> Category : {productDetails.category}</h6>


          <p className="text-lg text-gray-600 mb-4">{productDetails.description}</p>
          
          {/* Rating Section */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              index < 4 ? <FaStar key={index} className="text-yellow-400" /> : <FaRegStar key={index} className="text-gray-300" />
            ))}
            <span className="ml-2 text-gray-500 font-serif font-bold text-xl">(22)</span>
          </div>

          {/* Price and Stock */}
          <div className="flex gap-3">
            <p className="text-2xl font-bold text-pink-600">${discountedPrice}</p>
            <p className="text-lg font-bold text-gray-600 line-through">${productDetails.price}</p>
          </div>
          <p className="text-sm text-gray-500">
            Stock: {productDetails.stockLevel > 0 ? productDetails.stockLevel : "Out of stock"}
          </p>

        
      
          {/* Color Selection (For now, placeholder colors) */}
          <div className="flex items-center mt-6">
            <p className="text-gray-600 mr-4">Color:</p>
            <div className="flex">
              <button className="w-6 h-6 rounded-full bg-gray-700 mr-2"></button>
              <button className="w-6 h-6 rounded-full bg-blue-700 mr-2"></button>
              <button className="w-6 h-6 rounded-full bg-green-700"></button>
            </div>
          </div>
           {/* Add to Cart Button */}
           <div className="flex items-center mt-[5%]">
           <button className=" text-black px-4 py-2 rounded hover:bg-pink-700">
              Add to Cart
            </button>
            <CiHeart size={30} />
           </div>

          {/* Share Section */}
          <div className="mt-6 flex gap-4">
            <p className="text-gray-600">Share:</p>
            <button className="text-blue-500"><FaFacebook size={20} /></button>
            <button className="text-pink-500"><FaPinterest size={20} /></button>
            <button className="text-blue-500"><FaTwitter size={20} /></button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <ProductDetailsTabs  />
      </div>
       {/* Related Products */}
            <div className="max-w-6xl mx-auto px-4 mt-12">
              <h2 className="text-xl font-bold mb-4">Related Products</h2>
              <div className="grid grid-cols-4 gap-4">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="text-center p-4 bg-white rounded shadow">
                    <Image width={1000} height={120} src={product.image} alt={product.name} className="w-full mb-2 rounded" layout="responsive" />
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-pink-600 font-bold">{product.price}</p>
                    {/* Rating */}
                    <div className="flex justify-center mb-2">
                      {Array.from({ length: 5 }, (_, index) => (
                        index < product.rating ? (
                          <FaStar key={index} className="text-yellow-400" />
                        ) : (
                          <FaRegStar key={index} className="text-gray-300" />
                        )
                      ))}
                    </div>
                    <button className="mt-2 text-pink-600 border border-pink-600 px-2 py-1 rounded hover:bg-pink-600 hover:text-white">
                      View Product
                    </button>
                  </div>
                ))}
              </div>
            </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
