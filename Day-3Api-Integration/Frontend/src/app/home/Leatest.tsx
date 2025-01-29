import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../../../studio-template4-ecommerce-website/lib/client";
import Link from "next/link";

// Define Product type
type Product = {
  id: string;
  name: string;
  price: string;
  discountPercentage: string;
  image: string;
};

export default function LatestProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch the latest products from Sanity
  useEffect(() => {
    const fetchLatestProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc) [0...6] {
        _id,
        name,
        price,
        discountPercentage,
        "image": image.asset->url
      }`;

      try {
        const data: Product[] = await client.fetch(query);
        console.log(data);  // Check the fetched products
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  // Product Card Component
  const ProductCard = ({ image, name, price, discountPercentage }: ProductCardProps) => {
    const discountedPrice = discountPercentage
      ? (parseFloat(price) * (1 - parseFloat(discountPercentage) / 100)).toFixed(2)
      : price;

    return (
      <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
        <div className="w-360 h-270 mx-auto">
          <Image
            height={250}
            width={1000}
            src={image}
            alt={name}
            className="w-full h-250 object-cover rounded-t-lg mb-4"
          />
        </div>
        <div className="bg-white p-4 rounded-b-lg">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <div className="flex items-center">
            <span className="text-pink-500 font-bold mr-2">${discountedPrice}</span>
            {discountPercentage && (
              <span className="text-gray-400 line-through">${price}</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    discountPercentage: string;
  }

  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: "white" }}>
      <h1 className="text-3xl font-bold text-center mb-8">Latest Products</h1>
      <div className="flex justify-center space-x-8 text-[#151875]">
        <a href="#" className="text-[#FB4997] font-semibold">
          New Arrival
        </a>
        <a href="#" className="hover:text-[#FB4997]">Best Seller</a>
        <a href="#" className="hover:text-[#FB4997]">Featured</a>
        <a href="#" className="hover:text-[#FB4997]">Special Offer</a>
      </div>

      {/* Show loading state if data is being fetched */}
      {loading ? (
        <p className="text-center text-xl font-semibold">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <div key={product.id}>
              <Link href={`/productDetails/${product.id}`} passHref>
              
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                  />
               
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
