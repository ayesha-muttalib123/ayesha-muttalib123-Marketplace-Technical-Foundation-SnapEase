"use client";
import React from "react";


import BlogSidebar from "./BlogSidebar";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "./BlogCard";
import Footer from "../components/Footer/Footer";

const BlogPage = () => {
  return (
    <div>
      <SectionHeader
        title="Blog Page"
        breadcrumb="Home . Pages"
        breadcrumbHighlight="Blog Page"
        backgroundColor="bg-[#F6F5FF]" // background color as class name
        textColor="text-gray-800" // text color as class name
      />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Blog Cards Section */}
          <div className="w-full lg:w-3/4 xl:w-2/3 space-y-8">
            <BlogCard/>
          
            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="px-4 py-2 bg-pink-600 text-white rounded-full">
                1
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">
                2
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">
                →
              </button>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-1/4 xl:w-1/3 space-y-8">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
