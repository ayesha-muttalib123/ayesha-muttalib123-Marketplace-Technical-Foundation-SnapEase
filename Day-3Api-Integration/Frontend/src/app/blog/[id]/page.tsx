import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaPenNib, FaCalendarAlt } from "react-icons/fa"; // Import icons for styling
import Image from "next/image";
import BlogSidebar from '@/app/blogpage/BlogSidebar';
import Footer from '@/app/components/Footer/Footer';

function SingleBlogPage() {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-[3%] p-5'>
        <div className="flex-1">
          <div className="font-sans text-[#8A91AB]">

            <div className="flex flex-col items-start bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Blog Image */}
              <div className="w-full">
                <Image
                  width={1000}
                  height={32}
                  src={"/blog1.png"}
                  alt={"blogpost"}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="w-full p-6">
                {/* Title and Date Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  {/* Title with Background and Pen Icon */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <FaPenNib className="text-pink-600" />
                    <h2 className="text-xl font-semibold bg-[#FFE7F9] px-4 py-1 rounded-full text-gray-800 hover:text-pink-600 cursor-pointer">
                      Surf Auxion
                    </h2>
                  </div>

                  {/* Date with Icon and Background */}
                  <div className="flex items-center gap-2 text-sm sm:mt-0">
                    <FaCalendarAlt className="text-orange-500" />
                    <span className="bg-[#FFECE2] px-4 py-1 rounded-full">Aug 09 2020</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                </p>

                {/* Read More Button */}
                <button className="text-pink-600 font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </div>

            {/* Header Section */}
            <header className="text-left border-l-2 border-pink-500 p-6 m-5">
              <p className="mt-2 text-gray-600 bg-[#FAFAFB] p-[5%] italic text-xl">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
                toamk risusu”
              </p>
            </header>

            {/* Image Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
              <div className="relative">
                <Image
                  src="/single1.png"
                  width={420}
                  height={275}
                  alt="Woman with hat"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-2xl">
                  ▶
                </button>
              </div>
              <div>
                <Image
                height={100}
                width={1000}
                  src="/single2.png"
                  alt="Woman on hill"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </section>

            {/* Text Section */}
            <section className="px-6 mt-6">
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veleo dictum nisi, nunc, mauris, lacus consectetur tristique viverra. Sit eleifend bibendum in tincidunt ullamcorper cras amet et vel viverra ac lacus.
              </p>
            </section>

            {/* Product Grid Section */}
            <section className="px-6 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[{ name: 'Ocean Wall', price: '$200.00', image: '/single3.png', rating: '⭐⭐⭐⭐⭐' },
                  { name: 'Textured Wall', price: '$150.00', image: '/single4.png', rating: '⭐⭐⭐⭐' },
                  { name: 'Blue Shirt', price: '$30.00', image: '/single5.png', rating: '⭐⭐⭐⭐⭐' },
                  { name: 'Mini Chair', price: '$80.00', image: '/single6.png', rating: '⭐⭐⭐⭐' }]
                  .map((product, index) => (
                    <div key={index} className="border p-4 rounded-lg text-center hover:shadow-lg transition-shadow">
                      <Image
                        src={product.image}
                        height={32}
                        width={1000}
                        alt={product.name}
                        className="w-full h-32 object-cover mb-4 rounded-md"
                      />
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-gray-500">{product.price}</p>
                      <p className="text-yellow-500">{product.rating}</p>
                    </div>
                  ))}
              </div>
            </section>

            <br />
            <p className="text-gray-600 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
            </p>
            <br />
            <p className='text-left'>
              Lorem ipsum dolor tex sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center mt-4 space-x-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-700"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>

            <div className="bg-gray-100 min-h-screen">
              {/* Navigation between posts */}
              <div className="flex justify-between items-center my-4 px-4">
                <button className="text-blue-500 hover:underline">&larr; Previous Post</button>
                <button className="text-blue-500 hover:underline">Next Post &rarr;</button>
              </div>

              {/* Related posts */}
              <div className="px-4">
                {[{ image: "/single7.png", title: "Sapien ac", date: "Jul 21 2024", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                  { image: "/single8.png", title: "Sapien ac", date: "Jul 21 2024", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }]
                  .map((post, index) => (
                    <div key={index} className="bg-white flex gap-5 shadow rounded-lg p-4 mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={103}
                        height={106}
                        className="h-32 object-cover mb-4 rounded-md"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{post.title}</h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <p className="text-gray-600 mt-2">{post.text}</p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Comment form */}
              <div className="px-4 my-8">
                <form className="bg-white p-6 rounded-lg shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border rounded p-2 w-full"
                    />
                    <input
                      type="email"
                      placeholder="Write Your Email"
                      className="border rounded p-2 w-full"
                    />
                  </div>
                  <textarea
                    placeholder="Write your comment"
                    rows={4}
                    className="border rounded p-2 w-full mb-4"
                  ></textarea>
                  <div className="flex items-center space-x-2 mb-4">
                    <input type="checkbox" id="save" className="h-4 w-4" />
                    <label htmlFor="save" className="text-sm text-gray-600">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>
                  <button className="bg-pink-500 w-full text-white px-4 py-2 rounded hover:bg-pink-600">
                    Continue Shopping
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4 xl:w-1/3 space-y-8">
          <BlogSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleBlogPage;
