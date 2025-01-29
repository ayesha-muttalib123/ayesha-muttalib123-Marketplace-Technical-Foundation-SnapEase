import React from "react";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer/Footer";
import Image from "next/image";


const CheckoutPage = () => {
  const cartItems = [
    { id: 1, image: "/product1.png", name: "Urban sweatshirt", price: 32.0 },
    { id: 2, image: "/product2.png", name: "Urban sweatshirt", price: 50.0 },
    { id: 3, image: "/product3.png", name: "Urban sweatshirt", price: 25.0 },
    { id: 4, image: "/product4.png", name: "Urban sweatshirt", price: 52.0 },
    { id: 5, image: "/product5.png", name: "Urban sweatshirt", price: 60.0 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal; // Add tax or discounts if necessary

  return (
<div className="flex flex-col">
<SectionHeader
    title="Hekto Demo"
    breadcrumb=""
    breadcrumbHighlight=""
    backgroundColor="bg-[#F6F5FF]" // background color as class name
    textColor="text-gray-800" // text color as class name
  />
<div className="bg-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1    lg:grid-cols-3 gap-8">
    {/* <div>
    <h1 className="text-2xl  font-bold mb-4">Hekto Demo</h1>
          <p className="text-gray-500 mb-8">
            Cart &gt; Information &gt; Shipping &gt; Payment
          </p>
    </div> */}

        {/* Contact and Shipping Form */}
        <div className="lg:col-span-2 bg-[#E8E6F1] p-8 rounded shadow-md">
   
      <h1 className="text-2xl  font-bold mb-4">Hekto Demo</h1>
          <p className="text-gray-500 mb-8">
            Cart &gt; Information &gt; Shipping &gt; Payment
          </p>
    
        
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <div className="flex justify-between items-center mb-4">
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full p-2 border rounded"
              />
              <p className="text-sm text-blue-500 ml-4 cursor-pointer">
                Already have an account? Log in
              </p>
            </div>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Keep me up to date on news and exclusive offers
            </label>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-2 border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border rounded my-4"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Bangladesh"
                className="p-2 border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full p-2 border rounded mt-4"
            />
          </div>

          <button className="bg-pink-600 text-white px-6 py-2 rounded mt-6 hover:bg-pink-700">
            Continue Shopping
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
          <div className="divide-y">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center py-4">
                <Image
                height={16}
                width={16}
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-gray-700">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Stock: 1</p>
                </div>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

             {/* Cart Summary & Shipping */}
        <div>
          {/* Cart Summary */}
          <div className="bg-[#F4F4FC] rounded shadow-md p-6 mb-6">
 
  <div className="flex justify-between mb-2">
    <span>Subtotal:</span>
    <span>&#163;{subtotal.toFixed(2)}</span>
  </div>
  <div className="flex justify-between font-bold text-lg mb-4">
    <span>Total:</span>
    <span>&#163;{total.toFixed(2)}</span>
  </div>
  <p className="text-sm text-gray-500 mb-4 flex gap-3 items-center">
    
  <div className="w-5 h-5 pr-4 p-3 text-center rounded-lg bg-[#19D16F] flex items-center justify-center">
    <span className="ml-2 text-sm text-white">✓</span>
      <div className="w-2 h-2 rounded-full bg-white"></div>
    </div>
    Shipping & taxes calculated at checkout</p>
  <div className="flex items-center mb-4">
   
    {/* <span className="ml-2 text-sm">Small Tick</span> */}
  </div>
  <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
    Proceed to Checkout
  </button>
</div>
</div>
        </div>
      </div>
     
    </div>

    <Footer/>



</div>
  );
};

export default CheckoutPage;
