import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 transform transition-transform duration-200 hover:scale-105"
          >
            <Logo />
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "Experts", "Blogs", "Login"].map((item, index) => (
              <a
                key={index}
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="relative group text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-sm px-1 py-0.5"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full duration-300 ease-out"></span>
              </a>
            ))}
            <a
              href="/signup"
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md p-1 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pb-4 transition-all duration-300 ease-in-out origin-top animate-fade-in-down">
          {["Home", "Experts", "Blogs", "Login"].map((item, index) => (
            <a
              key={index}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="block py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-sm px-1"
            >
              {item}
            </a>
          ))}
          <a
            href="/signup"
            className="block py-2.5 mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center rounded-full font-semibold shadow-md hover:brightness-110 active:scale-[0.98] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
