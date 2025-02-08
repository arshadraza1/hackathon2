"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";

const Button = ({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
  <button onClick={onClick} className={`px-4 py-2 border rounded-md ${className}`}>
    {children}
  </button>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full shadow-md">
      {/* First Row (Announcement) */}
      <div className="bg-blue-600 text-white text-sm py-2 px-4 sm:px-16 flex justify-between items-center">
        <span>Free shipping on all orders over $50</span>
        <div className="hidden sm:flex space-x-4">
          <span>Eng</span>
          <span>USD</span>
          <span>Need Help</span>
          <span>FAQs</span>
        </div>
      </div>

      {/* Second Row (Logo & Cart Button) */}
      <div className="bg-gray-100 py-3 px-4 sm:px-16 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Brand Logo
        </Link>
        <Button> <link rel="stylesheet" href="/cart" />
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </div>

      {/* Third Row (Navigation Links) */}
      <nav className="bg-white dark:bg-gray-900 py-4 px-4 sm:px-16 flex justify-between items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
          <Link href="/shop" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Shop</Link>
          <Link href="/product" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Product</Link>
          <Link href="/pages" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pages</Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
        </div>

        {/* Mobile / Tablet Navigation */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-900 dark:text-white font-semibold">+1 234 567 890</span>

          {/* Hamburger Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 shadow-md">
          <Link href="/" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
          <Link href="/shop" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Shop</Link>
          <Link href="/product" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Product</Link>
          <Link href="/pages" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pages</Link>
          <Link href="/about" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
