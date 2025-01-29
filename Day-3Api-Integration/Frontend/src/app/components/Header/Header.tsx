'use client'
import React, { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneVolume, FaChevronDown, FaRegHeart, FaBars, FaTimeline } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#7E33E0] text-[#f1f1f1]">
      {/* Top Bar */}
      <div className="hidden sm:block">
        <div className="h-[44px] flex justify-center items-center">
          <div className="w-full max-w-[1177px] flex justify-between items-center px-4">
            {/* Left Side - Contacts */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MdOutlineEmail className="w-4 h-4" />
                <a href="mailto:mhhasanul@gmail.com" className="text-sm font-semibold">
                  mhhasanul@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneVolume className="w-4 h-4" />
                <a href="tel:(12345)67890" className="text-sm font-semibold">
                  (12345)67890
                </a>
              </div>
            </div>

            {/* Right Side - Options */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">English</span>
                <FaChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">USD</span>
                <FaChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1">
             <Link href={"/login"}>
             <span className="text-sm font-semibold">Login</span>
             </Link>
                <FiUser className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">Wishlist</span>
                <FaRegHeart className="w-4 h-4" />
              </div>
              <LuShoppingCart className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex justify-between items-center h-[44px] px-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimeline className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        <div className="text-lg font-semibold text-white">My Website</div>

        <LuShoppingCart className="w-6 h-6 text-white" />
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#7E33E0] text-white">
          <div className="flex flex-col items-start gap-4 px-4 py-4">
            <a href="mailto:mhhasanul@gmail.com" className="flex items-center gap-2">
              <MdOutlineEmail className="w-4 h-4" />
              <span className="text-sm font-semibold">mhhasanul@gmail.com</span>
            </a>
            <a href="tel:(12345)67890" className="flex items-center gap-2">
              <FaPhoneVolume className="w-4 h-4" />
              <span className="text-sm font-semibold">(12345)67890</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">English</span>
              <FaChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">USD</span>
              <FaChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <FiUser className="w-4 h-4" />
              <span className="text-sm font-semibold">Login</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegHeart className="w-4 h-4" />
              <span className="text-sm font-semibold">Wishlist</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
