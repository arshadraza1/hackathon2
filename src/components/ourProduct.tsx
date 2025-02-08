"use client";
import { motion } from "framer-motion";

const products = [
  { id: 1, img: "/Image.svg", name: "Library Stool Chair", price: "$20" },
  { id: 2, img: "/Image (1).svg", name: "Library Stool Chair", price: "$20" },
  { id: 3, img: "/Image (2).svg", name: "Library Stool Chair", price: "$20" },
  { id: 4, img: "/Image (3).svg", name: "Library Stool Chair", price: "$20" },
];

export default function OurPro() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[312px] object-cover"
              />
              <div className="flex justify-between items-center px-4 py-2">
                <div>
                  <h3 className="text-[16px] font-normal text-gray-800">{product.name}</h3>
                  <p className="text-black">{product.price}</p>
                </div>
                <motion.button
                  className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
