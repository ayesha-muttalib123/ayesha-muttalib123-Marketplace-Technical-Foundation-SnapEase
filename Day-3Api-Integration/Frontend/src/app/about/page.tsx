'use client';

import Image from "next/image";
import Link from "next/link";

import SectionHeader from "../components/SectionHeader";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

export default function AboutUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap();
        setCurrentIndex(index);
      });
    }
  }, [emblaApi]);

  const testimonials = [
    {
      image: "/about2.png",
      name: "John Doe",
      position: "CEO, Company",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
    {
      image: "/about3.png",
      name: "Jane Smith",
      position: "CTO, TechCorp",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
    {
      image: "/about4.png",
      name: "Emily Johnson",
      position: "Marketing Manager, StartUp",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Section Header */}
      <SectionHeader
        title="About Us"
        breadcrumb="Home . Pages"
        breadcrumbHighlight="About Us"
        backgroundColor="bg-[#F6F5FF]"
        textColor="text-gray-800"
      />

      {/* Hero Section */}
      <section className="bg-gray-50 py-12 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/About1.png"
            width={500}
            height={400}
            alt="Hero"
            className="rounded-md"
            priority
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Know About Our E-Commerce Business History
            </h2>
            <p className="text-gray-600 mb-6">
              Our success and company history. With years of experience and a focus on providing excellent service, we deliver outstanding e-commerce solutions.
            </p>
            <Link
              href="/"
              className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-[#FBFBFF] py-12 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Our Client Say!</h3>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full text-center p-6 bg-white shadow rounded-lg mx-2"
                >
                  <div className="flex justify-center items-center gap-4">
                    <Image
                      src={testimonial.image}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt={testimonial.name}
                      priority={index === 0} // Prioritize the first image
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                  <blockquote className="italic text-gray-700 mb-4 mt-4">
                    {testimonial.quote}
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Lines Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-10 ${
                  currentIndex === index ? 'bg-pink-600' : 'bg-gray-400'
                } rounded-full`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
