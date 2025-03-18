"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-14 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.jpg" alt="Vedanta Times" width={36} height={36} className="rounded-lg" />
        <span className="ml-2 text-xl font-bold text-gray-900">Vedanta Times</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-700 hover:text-[#7C4EE4]">Blog</a>
        <a href="#" className="text-gray-700 hover:text-[#7C4EE4]">About</a>
        <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
        <button className="bg-[#7C4EE4] text-white px-4 py-2 rounded-lg hover:text-[#7C4EE4]">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-4">
          <a href="#" className="text-gray-700 hover:text-purple-600">Blog</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
