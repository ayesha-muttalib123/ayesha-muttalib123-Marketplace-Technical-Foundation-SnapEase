"use client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className=" w-full border-b-2 bg-neutral-100">
      {/* Header container */}
      <div className="flex items-center justify-center bg-white h-[70px]">
        {/* Main Navbar */}
        <div className="w-full md:w-[80%] flex items-center justify-between px-4 md:px-0 h-[50px]">
          {/* Logo */}
          <Image src="/Hekto.png" width={98} height={34} alt="logo" />

          {/* Navigation Links */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:flex md:static absolute top-0 left-0 h-screen md:h-auto w-[60%] md:w-auto bg-white md:bg-transparent z-40 transition-transform duration-300 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6 text-black text-lg md:text-sm">
              <li className="p-4 hover:text-[#FB2E86] hover:underline underline-offset-4">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 relative group hover:text-[#FB2E86] hover:underline underline-offset-4">
  <Link href="/about">Pages</Link>
  {/* Dropdown menu */}
  <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 p-5">
    <li className="py-1 px-4 hover:text-[#FB2E86] hover:bg-gray-100">
      <Link href="/about">About Us</Link>
    </li>
    <li className="py-1 px-4 hover:text-[#FB2E86] hover:bg-gray-100">
      <Link href="/productdetails">Product Details</Link>
    </li>
    <li className="py-1 px-4 hover:text-[#FB2E86] hover:bg-gray-100">
      <Link href="/ordercompleted">Order Completed</Link>
    </li>
    <li className="py-1 px-4 hover:text-[#FB2E86] hover:bg-gray-100">
      <Link href="/shoppingcart">Shopping Cart</Link>
    </li>  <li className="py-1 px-4 hover:text-[#FB2E86] hover:bg-gray-100">
      <Link href="/shopleft">Shop Left</Link>
    </li>
  </ul>
</li>

              <li className="p-4 hover:text-[#FB2E86] hover:underline underline-offset-4">
                <Link href="/griddefault">Products</Link>
              </li>
              <li className="p-4 hover:text-[#FB2E86] hover:underline underline-offset-4">
                <Link href="/blogpage">Blog</Link>
              </li>
              <li className="p-4 hover:text-[#FB2E86] hover:underline underline-offset-4">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="p-4 hover:text-[#FB2E86] hover:underline underline-offset-4">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Search and Menu Icon */}
          <div className="flex items-center gap-x-4">
            {/* Search Bar (visible for large screens) */}
            <div className="hidden lg:flex w-[300px] bg-gray-200 rounded-md">
              <input
                className="w-[250px] h-10 p-2 bg-white border-2 border-gray-300 outline-none"
                type="search"
                placeholder="Search"
              />
              <CiSearch className="text-xl w-[50px] h-10 bg-[#FB2E86] text-white" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="text-black text-3xl md:hidden z-50"
              onClick={toggle}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
