import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-center">
      {/* Subscription Section */}
      <section className="bg-[#7C4EE4] text-white py-20 px-6">
        <h2 className="text-2xl font-semibold text-center">
          Subscribe to our newsletter and stay updated!
        </h2>
        <p className="mt-2 text-sm text-gray-200">
          Join our mailing list for weekly updates and exclusive content.
        </p>
        <form
          className="mt-6 flex justify-center"
          aria-label="Subscribe to our newsletter"
        >
          <label htmlFor="email" className="sr-only">
            Enter your email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-80 rounded-l-lg text-white border border-white outline-none bg-transparent placeholder-gray-300"
            required
            aria-required="true"
          />
          <button
            type="submit"
            className="bg-white text-[#7C4EE4] font-semibold px-6 py-3 rounded-r-lg hover:bg-gray-200 transition focus:ring focus:ring-white"
            aria-label="Subscribe"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer Navigation */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Vedanta Times</h3>
        <nav className="flex justify-center space-x-6 mt-4" aria-label="Footer navigation">
          <a
            href="#"
            className="text-gray-700 hover:text-[#7C4EE4] focus:outline-none focus:ring focus:ring-[#7C4EE4] px-2 py-1 rounded"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#7C4EE4] focus:outline-none focus:ring focus:ring-[#7C4EE4] px-2 py-1 rounded"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#7C4EE4] focus:outline-none focus:ring focus:ring-[#7C4EE4] px-2 py-1 rounded"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#7C4EE4] focus:outline-none focus:ring focus:ring-[#7C4EE4] px-2 py-1 rounded"
          >
            Contact Us
          </a>
        </nav>
      </section>

      {/* Social Media Links */}
      <section className="mt-6 flex justify-center space-x-4" aria-label="Social media links">
        <a
          href="#"
          aria-label="Facebook"
          className="bg-[#7C4EE4] text-white p-3 rounded-full hover:bg-[#5a3db5] transition focus:ring focus:ring-[#5a3db5]"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="bg-[#7C4EE4] text-white p-3 rounded-full hover:bg-[#5a3db5] transition focus:ring focus:ring-[#5a3db5]"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="bg-[#7C4EE4] text-white p-3 rounded-full hover:bg-[#5a3db5] transition focus:ring focus:ring-[#5a3db5]"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="bg-[#7C4EE4] text-white p-3 rounded-full hover:bg-[#5a3db5] transition focus:ring focus:ring-[#5a3db5]"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </section>

      {/* Copyright Section */}
      <section className="mt-8 text-gray-500 text-sm">
        <hr className="w-full border-gray-300 mb-4" />
        <p className="mb-4">Copyright © 2024-25 vedantatimes.com | All Rights Reserved</p>
      </section>
    </footer>
  );
}
