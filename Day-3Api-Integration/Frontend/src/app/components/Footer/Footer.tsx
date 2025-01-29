import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Logo Image */}
      <Image
        src="/Mestonix.png"
        alt="Mestonix"
        height={1000}
        width={1000}
        className="mx-auto my-5"
      />

      <footer className="bg-[#EEEFFB] py-8 text-[#8A8FB9]">
        <div className="container mx-auto px-6 sm:px-12">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {/* Logo and Search Section */}
            <div className="sm:mt-0">
              <Image src="/Hekto.png" width={98} height={34} alt="logo" />
              <div className="mt-4 flex items-center gap-2 justify-center sm:justify-start">
                {/* Search Input */}
                <div className="w-full bg-white rounded-md flex">
                  <input
                    className="w-[70%] h-11 p-1 bg-white text-black outline-none opacity-75"
                    type="search"
                    placeholder="Search"
                  />
                  <button className="text-base font-medium w-[30%] h-11 bg-[#FB2E86] text-[#F3F9FF]">
                    Sign Up
                  </button>
                </div>
              </div>
              <p className="mt-4 text-xs leading-4 sm:text-left text-center">
                Contact Info: <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories Section */}
            <div className="mt-4 sm:mt-0">
              <h3 className="text-lg text-black">Categories</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div className="mt-4 sm:mt-0">
              <h3 className="text-lg text-black">Customer Care</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            {/* Pages Section */}
            <div className="mt-4 sm:mt-0">
              <h3 className="text-lg text-black">Pages</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Section */}
      <div className="bg-[#E7E4F8]">
        <div className="container mx-auto px-5 py-6 flex items-center flex-col sm:flex-row justify-between">
          <p className="text-sm text-[#9DA0AE]">
            © 2024 Hekto —
            <a
              href="https://twitter.com/knyttnev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9DA0AE] ml-1"
            >
              @Right Reserved
            </a>
          </p>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <a href="#" className="text-gray-900">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-900">
              <RxInstagramLogo className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-900">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
