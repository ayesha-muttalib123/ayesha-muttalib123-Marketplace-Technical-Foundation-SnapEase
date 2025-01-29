import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // For social media icons
import { FiTag } from 'react-icons/fi'; // For tag icon

const BlogSidebar = () => {
  return (
    <aside className="w-full  space-y-8">
      
      {/* Search */}
      <div>
        <h3 className="text-lg font-bold mb-2">Search</h3>
        <input
          type="text"
          placeholder="Search For Posts"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-600"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-2">Categories</h3>
        <ul className="grid grid-cols-2 gap-4 text-gray-600">
          {/* Categories List */}
          {['Hobbies (14)', 'Women (21)', 'Technology (5)', 'Health (8)', 'Lifestyle (10)'].map((category, index) => (
            <li key={index} className="hover:bg-[#FB2E86] hover:text-white cursor-pointer px-4 py-2 rounded-md transition duration-200 ease-in-out">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-bold mb-2">Recent Post</h3>
        <ul className="space-y-3">
          {[
            { image: "/recentpost1.png", title: "It is a long established fact", date: "Aug 09 2020" },
            { image: "/recentpost2.png", title: "Surf Auxion", date: "Aug 09 2020" },
            { image: "/recentpost3.png", title: "Mauris at orci non vulputate", date: "Aug 09 2020" },
            { image: "/recentpost4.png", title: "Diam tincidunt nec.", date: "Aug 09 2020" }
          ].map((post, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Image
                src={post.image}
                alt="Recent Post Image"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <p className="hover:text-pink-600 cursor-pointer text-gray-700">{post.title}</p>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sale Posts */}
      <div>
        <h3 className="text-lg font-bold mb-2">Sale Posts</h3>
        <ul className="space-y-4">
          {[
            { image: "/sale1.png", title: "Sale Item 1", date: "Aug 09 2020" },
            { image: "/sale2.png", title: "Sale Item 2", date: "Aug 09 2020" },
            { image: "/sale3.png", title: "Sale Item 3", date: "Aug 09 2020" }
          ].map((sale, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Image
                src={sale.image}
                alt="Sale Post Image"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <p className="hover:text-pink-600 cursor-pointer text-gray-700">{sale.title}</p>
                <span className="text-sm text-gray-500">{sale.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Offer Products */}
      <div>
        <h3 className="text-lg font-bold mb-2">Offer Products</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { image: "/check1.png", name: "Duis lectus est", price: "$12.00 - $15.00" },
            { image: "/check2.png", name: "Netus proin", price: "$12.00 - $15.00" },
            { image: "/check3.png", name: "Duis lectus est", price: "$12.00 - $15.00" },
            { image: "/check4.png", name: "Netus proin", price: "$12.00 - $15.00" }
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <Image
                src={product.image}
                alt="Offer Product Image"
                width={150}
                height={150}
                className="rounded-md object-cover"
              />
              <p className="text-center text-gray-700">
                {product.name}
                <span className="block font-semibold text-lg text-[#8A8FB9]">{product.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Follow */}
      <div>
        <h3 className="text-lg font-bold mb-2">Follow</h3>
        <div className="flex space-x-4">
          <a href="#" className="cursor-pointer text-pink-600">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="cursor-pointer text-pink-600">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="cursor-pointer text-pink-600">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-lg font-bold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['General', 'Atsanil', 'Insas', 'Nulla'].map((tag, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 text-sm rounded-full hover:bg-pink-600 hover:text-white cursor-pointer flex items-center space-x-2">
              <FiTag />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
