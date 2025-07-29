import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <div>
      {/* Newsletter Signup Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-pink-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Join our newsletter to receive expert tips, tools, and updates from
            MindMate.
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-5 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Follow Us Section */}
          <div className="mt-10">
            <h3 className="text-md font-semibold text-gray-800 mb-3">
              Follow Us
            </h3>
            <div className="flex justify-center gap-6 text-indigo-600">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="w-6 h-6 hover:text-indigo-800 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="w-6 h-6 hover:text-indigo-800 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="w-6 h-6 hover:text-indigo-800 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="w-6 h-6 hover:text-indigo-800 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Base */}
      <footer className="py-6 px-4 border-t bg-white text-center text-sm text-gray-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>
            © {new Date().getFullYear()} MindMate. All rights reserved.
          </span>
          <div className="flex gap-4 text-gray-400 text-xs">
            <a
              href="/privacy-policy"
              className="hover:text-gray-600 transition"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-600 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
