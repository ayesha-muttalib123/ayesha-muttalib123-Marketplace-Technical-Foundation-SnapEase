import React from "react";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      image: "/cart1.png",
      name: "Product 1",
      price: 120.0,
      quantity: 1,
      total: 120.0,
    },
    {
      id: 2,
      image: "/cart2.png",
      name: "Product 2",
      price: 150.0,
      quantity: 1,
      total: 150.0,
    },
    {
      id: 3,
      image: "/cart3.png",
      name: "Product 3",
      price: 99.0,
      quantity: 2,
      total: 198.0,
    },
    {
      id: 4,
      image: "/cart4.png",
      name: "Product 4",
      price: 110.0,
      quantity: 1,
      total: 110.0,
    },
    {
        id: 5,
        image: "/cart5.png",
        name: "Product 4",
        price: 110.0,
        quantity: 1,
        total: 110.0,
      },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  return (
  <div >

<SectionHeader
    title="Product Details"
    breadcrumb="Home . Pages"
    breadcrumbHighlight="Product Details"
    backgroundColor="bg-[#F6F5FF]" // background color as class name
    textColor="text-gray-800" // text color as class name
  />
    
    <div className=" min-h-screen p-8 mt-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Cart Items Table */}
        <div className="lg:col-span-2">
          <table className="w-full bg-white rounded shadow-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4 flex items-center">
                    <Image
                    height={16}
                    width={16}
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded mr-4"
                    />
                    {item.name}
                  </td>
                  <td className="p-4">${item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      defaultValue={item.quantity}
                      className="w-16 border rounded text-center"
                    />
                  </td>
                  <td className="p-4">${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
              Update Cart
            </button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Summary & Shipping */}
        <div>
          {/* Cart Summary */}
          <div className="bg-[#F4F4FC] rounded shadow-md p-6 mb-6">
  <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
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


          {/* Calculate Shipping */}
          <h2 className="text-lg text-center font-semibold mb-4">Calculate Shipping</h2>

          <div className="bg-[#F4F4FC] rounded shadow-md p-6">

            <input
              type="text"
              placeholder="Country"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Region/State"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full mb-4 p-2 border rounded"
            />
            <button className="bg-pink-600 text-white w-full py-2 rounded hover:bg-pink-700">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer/>


  </div>
  );
};

export default CartPage;
