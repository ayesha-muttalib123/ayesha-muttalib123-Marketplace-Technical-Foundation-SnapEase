"use client";

import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import SectionHeader from "../components/SectionHeader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    alert("Login Submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Section Header */}
      <SectionHeader
        title="My Account"
        breadcrumb="Home . Pages"
        breadcrumbHighlight="My Account"
        backgroundColor="bg-[#F6F5FF]" // background color as class name
        textColor="text-gray-800" // text color as class name
      />

      {/* Login Form Section */}
      <div className="flex items-center justify-center flex-1 p-4 md:p-8">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-700 mb-2">
            Login
          </h1>
          <p className="text-[#9096B2] text-center mb-6">
            Please login using account details below.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FB2E86] hover:bg-[#FB2E75] text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            >
              Login
            </button>
          </form>

          {/* Footer Text */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an Account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
