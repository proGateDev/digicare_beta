import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="bg-white shadow-md w-[90%] border border-blue-300 rounded-lg mx-auto mt-4">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Left Side Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/logo.jpg" // Replace with your logo URL
              alt="Logo"
              className="w-13 h-15 cursor-pointer rounded-md" // 50x50
            />
          </Link>
        </div>

        {/* Navigation Links for desktop */}
        <div className={`hidden md:flex space-x-6 text-[#28282B]`}>
          <Link href="#free-trial">
            <p className="text-gray-700 hover:text-blue-600">Free Trial</p>
          </Link>
          <Link href="#pricing">
            <p className="text-gray-700 hover:text-blue-600">Pricing</p>
          </Link>
          <Link href="#product">
            <p className="text-gray-700 hover:text-blue-600">Product</p>
          </Link>
          <Link href="#about">
            <p className="text-gray-700 hover:text-blue-600">About</p>
          </Link>
          <Link href="#partner">
            <p className="text-gray-700 hover:text-blue-600">Partner</p>
          </Link>
        </div>

        {/* Right Side Login Button and Mobile Menu Toggle */}
        <div className="flex items-center justify-between">
          <Link href="Admin/Auth/login" className="mx-3">
            <button className="text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"               style={{
                background: 'rgba(0, 105, 217, 1)',
                color: 'white'
              }}>
              Login
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} space-y-4 p-4`}>
        <Link href="/free-trial">
          <p className="text-gray-700 hover:text-blue-600">Free Trial</p>
        </Link>
        <Link href="/pricing">
          <p className="text-gray-700 hover:text-blue-600">Pricing</p>
        </Link>
        <Link href="/about">
          <p className="text-gray-700 hover:text-blue-600">About</p>
        </Link>
        <Link href="/product">
          <p className="text-gray-700 hover:text-blue-600">Product</p>
        </Link>
        <Link href="/partner">
          <p className="text-gray-700 hover:text-blue-600">Partner</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
