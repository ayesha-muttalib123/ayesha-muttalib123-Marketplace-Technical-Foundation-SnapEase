import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "../../../../studio-template4-ecommerce-website/lib/client";
import Link from "next/link";

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

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch featured products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product" && isFeaturedProduct == true && category=="Chair" ]{
        _id,
        "id": _id,
        name,
        "imagePath": image.asset->url,
        "price": price,
        "description": description,
        "discountPercentage": discountPercentage,
        "stockLevel": stockLevel,
        "category": category
      }`;

      try {
        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        setError("Error fetching featured products.");
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#1A0B5B]">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {loading ? (
          <p className="text-center col-span-4">Loading...</p>
        ) : error ? (
          <p className="text-center col-span-4 text-red-500">{error}</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product.id}
              href={`/productDetailss/${product.id}`} // Use dynamic route
              passHref
            >
              <div className="group relative p-4 hover:bg-[#2F1AC4] hover:text-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                <div className="flex items-center justify-center h-64 bg-[#F6F7FB]">
                  <Image
                    height={2000}
                    width={1000}
                    src={product.imagePath}
                    alt={product.name}
                    className="object-contain h-full"
                    layout="intrinsic"
                  />
                </div>
                <div className="mt-4 text-center hover:text-white">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="flex justify-center items-center space-x-2">
                    <p className="line-through text-lg font-bold text-gray-900">
                      ${product.price}
                    </p>
                    {product.discountPercentage > 0 && (
                      <p className="text-lg text-[#FB4997] font-bold">
                        ${(
                          product.price - 
                          (product.discountPercentage / 100) * product.price
                        ).toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-4">No featured products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
