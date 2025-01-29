import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client } from '../../../../studio-template4-ecommerce-website/lib/client';

const features = [
  {
    image: "/aboutlogo1.png",
    title: "Free Delivery",
    description: "Enjoy free delivery on all orders above $50.",
  },
  {
    image: "/aboutlogo2.png",
    title: "100% Cash Back",
    description: "Guaranteed refunds if not satisfied.",
  },
  {
    image: "/aboutlogo3.png",
    title: "Quality Product",
    description: "We provide high-quality products for all needs.",
  },
  {
    image: "/aboutlogo4.png",
    title: "24/7 Support",
    description: "Contact our team anytime for assistance.",
  },
];
// Define the Product type
type Product = {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
  category: string;
};

export default function RemainSection() {
  const [chairs, setChairs] = useState <Product[]>([]);

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchChairs = async () => {
      const query = `
        *[_type == "product" && category == "Chair"] | order(_createdAt asc) [0...4] {
          _id,
          "id": _id,
          name,
          "imagePath": image.asset->url,
          price,
          description,
          discountPercentage,
          stockLevel,
          category
        }
      `;

      try {
        const data:Product[] = await client.fetch(query);
        setChairs(data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching chairs:", error);
      }
    };

    // Call the fetchChairs function
    fetchChairs();
  }, []); // Empty dependency array to only run on component mount

  return (
    <div className="">
      {/* Features Section */}
      <section className="py-12 px-6">
        <h3 className="text-center text-2xl font-bold mb-8">What Shopex Offer!</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 shadow-md rounded-lg">
              <Image
                src={feature.image}
                alt={feature.title}
                width={50}
                height={50}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-[#F1F0FF] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            {/* Left Column: Content */}
            <div className="flex-1 flex justify-center">
              <div className="text-center">
                <Image
                  src="/uniqueFeature.png"
                  alt="B&B Italian Sofa"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                Unique Features Of Latest &<br />
                Trending Products
              </h1>
              <ul className="text-gray-700 mb-6 list-disc list-inside">
                <li>
                  All frames constructed with hardwood solids and laminates.
                </li>
                <li>
                  Reinforced with double wood dowels, glue, screw-nails, corner
                  blocks, and machine nails.
                </li>
                <li>Arms, backs, and seats are structurally reinforced.</li>
              </ul>
             <div className='flex gap-10'>
             <button className="bg-pink-500 text-white p-5 rounded-md hover:bg-pink-600">
                Add To Cart
              </button>
              <div>
                <p className="text-gray-800 font-bold text-xl mt-4">
                  B&B Italian Sofa
                </p>
                <p className="text-pink-500 text-lg">$32.00</p>
              </div>
             </div>
            </div>

          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-[5%]">
          <span className="px-4 py-2 border-b-4 border-blue-500">Top Categories</span>
        </h2>
        <div className="flex justify-center gap-6 px-4 max-w-6xl mx-auto">
          {chairs.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-64 h-80 rounded-lg bg-gray-100 flex items-center justify-center shadow-md">
                <Image
                  src={item.imagePath}  // Use the fetched image path
                  alt={item.name}
                  width={270}
                  height={350}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 font-semibold text-gray-700">{item.name}</h3>
              <p className="text-pink-500 font-bold mt-2">${item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-gray-200 py-10 text-center relative">
        <div className="absolute inset-0 z-0">
          <Image src={"/final.png"} width={2000} alt="Shop Now Image" layout='responsive' height={500} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 mb-10 mt-[10%]">
          <h2 className="text-2xl font-bold mb-4 text-black">Get Latest Update By Subscribe Our Newsletter</h2>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 mb-6">
            Shop Now
          </button>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Latest Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {[{title: 'Blog Post 1', date: 'Jan 10, 2024', image: "/latblog1.png", content: 'Lorem ipsum dolor sit amet.'}, 
            {title: 'Blog Post 2', date: 'Jan 12, 2024', image: "/latblog2.png", content: 'Consectetur adipiscing elit.'}, 
            {title: 'Blog Post 3', date: 'Jan 14, 2024', image: "/latblog3.png", content: 'Exploring new technology.'}]
            .map((post, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <Image src={post.image} width={255} height={270} className='w-full mb-5' alt={`Blog post image for ${post.title}`} />
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.date}</p>
                <p className="text-gray-700 mt-2">{post.content}</p>
                <button className="text-blue-500 mt-4">Read More</button>
              </div>
            ))}
        </div>
      </section>

    </div>
  );
}
