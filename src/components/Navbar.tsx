"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [subscribeOpen, setSubscribeOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md px-6 sm:px-14 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Vedanta Times"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="ml-3 text-2xl font-semibold text-gray-900">
            Vedanta Times
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-[#7C4EE4] text-lg">
            Trending
          </a>
          <a href="#" className="text-gray-700 hover:text-[#7C4EE4] text-lg">
            About
          </a>

          {/* Search Icon */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-700 hover:text-[#7C4EE4] transition-all cursor-pointer"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Search Box Pop-up */}
            {searchOpen && (
              <div className="absolute top-10 right-0 bg-white shadow-lg p-3 rounded-lg w-64 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border border-[#7C4EE4] rounded-lg outline-none"
                />
                <button className="bg-[#7C4EE4] text-white px-4 py-2 rounded-lg hover:bg-[#6235c6] cursor-pointer">
                  Search
                </button>
              </div>
            )}
          </div>

          {/* Subscribe Button */}
          <button
            onClick={() => setSubscribeOpen(true)}
            className="bg-[#7C4EE4] text-white px-5 py-2 rounded-lg text-lg hover:bg-[#6235c6] transition-all cursor-pointer"
          >
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center gap-5 py-5">
            <a href="#" className="text-gray-700 hover:text-[#7C4EE4] text-lg">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7C4EE4] text-lg">
              About
            </a>
            <button
              onClick={() => setSubscribeOpen(true)}
              className="bg-[#7C4EE4] text-white px-5 py-2 rounded-lg text-lg"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Subscribe Modal */}
      {subscribeOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Subscribe to Newsletter
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-lg outline-none"
                required
              />
              <div className="flex items-center">
                <input type="checkbox" id="consent" className="mr-2" required />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I agree to receive newsletters and email promotions.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#7C4EE4] text-white py-2 rounded-lg hover:bg-[#6235c6] cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            <button
              onClick={() => setSubscribeOpen(false)}
              className="mt-4 text-gray-600 hover:text-gray-900 block mx-auto cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
