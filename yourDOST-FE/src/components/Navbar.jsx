import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Logo />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Home
            </a>
            <a
              href="experts"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Experts
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Blog
            </a>
            <a
              href="#selftest"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Self Test
            </a>
            <a
              href="/login"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Login
            </a>
            <a
              href="/signup"
              className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
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
        <div className="md:hidden bg-white shadow px-4 pb-4">
          <a
            href="/"
            className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            Home
          </a>
          <a
            href="#experts"
            className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            Experts
          </a>
          <a
            href="#blog"
            className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            Blog
          </a>
          <a
            href="#selftest"
            className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            Self Test
          </a>
          <a
            href="/login"
            className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block py-2 mt-2 bg-indigo-600 text-white rounded-lg font-semibold text-center hover:bg-indigo-700 transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
