'use client';

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../SectionHeader";
import Footer from "../Footer/Footer";


export default function PageNotFound() {
  return (
    <div className="font-sans text-gray-800">
      {/* Section Header */}
      <SectionHeader
        title="404 Not Found"
        breadcrumb="Home . Pages"
        breadcrumbHighlight="404 Not Found"
        backgroundColor="bg-[#F6F5FF]"
        textColor="text-gray-800"
      />

      {/* Information Section */}
      <section className="flex flex-col items-center py-12 px-6 text-center">
        <Image
          src="/pagenotfound.png"
          alt="Page Not Found"
          width={500}
          height={400}
          className="mb-8"
        />
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Oops! The page you are looking for doesnot exist.
        </h2>
        <p className="text-gray-600 mb-8 max-w-md text-sm md:text-base">
          It seems like you have hit a dead end. The page you are looking for may have been moved or deleted.
        </p>
        <Link
          href="/"
          className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-all duration-300"
        >
          Back To Home
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
