import { Logo } from "./Logo";

export function SignupForm() {
  return (
    <div className="h-screen flex items-center justify-center px-5 bg-gradient-to-br from-blue-50 via-pink-50 to-indigo-100 bg-[url('data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23c7d2fe\'/></svg>')]">
      <div className="shadow-2xl rounded-xl flex ">
        {/* Left Section */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-100 items-center justify-center p-10 rounded-xl">
          <div className="max-w-md text-center">
            <div className="flex justify-center mb-6">
              <Logo />
            </div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">
              Join Our Community!
            </h2>
            <p className="text-indigo-800 text-sm">
              Create your account to access expert guidance, connect with professionals, and start your journey to better mental well-being.
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white rounded-xl">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
              Create Your Account
            </h2>
            <form className="space-y-4">
              <div className="grid gap-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>
              {/* Email */}
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>
              {/* Phone Number */}
              <div className="grid gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-indigo-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm text-center mt-6 text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-600 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
