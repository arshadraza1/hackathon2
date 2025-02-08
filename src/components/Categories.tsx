"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../../lib/types";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://giaic-hackathon-template-08.vercel.app/api/categories");
        setCategories(response.data);
      } catch (error) {
        setError("Error fetching categories");
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="text-center">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-32 sm:mx-auto">
        {categories.map((category) => (
          <div key={category.id} className="relative">
            <img
              src={category.image || "/path/to/fallback-image.jpg"} // Fallback image
              alt={category.name}
              className="w-full h-56 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
