'use client';
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  description?: string;
  price?: number;
}

export default function Featured() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://giaic-hackathon-template-08.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description || "No description available"}</p>
              <p className="text-lg font-bold mt-2">${product.price || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
