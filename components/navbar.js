'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/">
          <Image src="/Gostick.png" alt="Gostick Logo" width={125} height={44} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center space-x-6 bg-white border rounded-full px-6 py-2 shadow-sm">
          <Link href="/" className="text-black font-medium hover:text-[#ED5B1C]">
            Home
          </Link>
          <Link href="/cars" className="text-black hover:text-[#ED5B1C]">
            Cars
          </Link>
          <Link href="/about" className="text-black hover:text-[#ED5B1C]">
            About Us
          </Link>
          <Link href="/testimonials" className="text-black hover:text-[#ED5B1C]">
            Testimonials
          </Link>
          <Link href="/blog" className="text-black hover:text-[#ED5B1C]">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-[#ED5B1C]">
            Contact
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/signin" className="text-black hover:text-[#ED5B1C]">
            Sign In
          </Link>
          <Link
            href="/register"
            className="bg-[#ED5B1C] text-white px-5 py-2 rounded-md hover:bg-[#DF4617] transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white space-y-3">
          <Link href="/" className="block text-[#ED5B1C]">
            Home
          </Link>
          <Link href="/cars" className="block text-black hover:text-[#ED5B1C]">
            Cars
          </Link>
          <Link href="/about" className="block text-black hover:text-[#ED5B1C]">
            About Us
          </Link>
          <Link href="/testimonials" className="block text-black hover:text-[#ED5B1C]">
            Testimonials
          </Link>
          <Link href="/blog" className="block text-black hover:text-[#ED5B1C]">
            Blog
          </Link>
          <Link href="/contact" className="block text-black hover:text-[#ED5B1C]">
            Contact
          </Link>
          <Link href="/signin" className="block text-black hover:text-[#ED5B1C]">
            Sign In
          </Link>
          <Link
            href="/register"
            className="block text-white bg-[#ED5B1C] text-center px-4 py-2 rounded-md hover:bg-[#d33c0f]"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
