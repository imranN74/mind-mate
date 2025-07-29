import { Logo } from "./Logo";

export function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-50 via-pink-50 to-indigo-100 bg-[url('data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23c7d2fe\'/></svg>')]">
      <div className="w-full max-w-5xl shadow-2xl rounded-xl flex flex-col md:flex-row bg-white overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex md:w-1/2 bg-blue-100 items-center justify-center p-10">
          <div className="max-w-md text-center">
            <div className="flex justify-center mb-6">
              <Logo />
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Welcome Back!
            </h2>
            <p className="text-blue-800 text-sm">
              Access expert guidance, talk to professionals, and take control of
              your mental well-being.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 sm:px-8">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
              Login to Your Account
            </h2>
            <form className="space-y-4">
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>
            <p className="text-sm text-center mt-6 text-gray-500">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
