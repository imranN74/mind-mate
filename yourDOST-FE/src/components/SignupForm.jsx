import { Logo } from "./Logo";

export function SignupForm() {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex">
      {/* Left Side */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 items-center justify-center px-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <h2 className="text-4xl font-bold text-indigo-800 mb-4 leading-tight drop-shadow">
            Join Our Community!
          </h2>
          <p className="text-indigo-700 text-lg max-w-sm mx-auto">
            Create your account to access expert guidance, connect with
            professionals, and start your journey to better mental well-being.
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="md:hidden flex justify-center mb-5">
            <Logo />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2 text-gray-900">
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
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
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
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
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
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 bg-indigo-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Signup Buttons */}
          <div className="flex flex-col space-y-3">
            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 rounded-lg py-2.5 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 transition duration-200"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 533.5 544.3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.3h147.3c-6.3 34.1-25.1 62.7-53.4 81.9v67h86.3c50.4-46.5 81.3-115 81.3-193.8z"
                  fill="#4285F4"
                />
                <path
                  d="M272 544.3c72.9 0 134.1-24.1 178.8-65.5l-86.3-67c-24.1 16.1-54.8 25.5-92.5 25.5-71 0-131.2-47.9-152.7-112.1H29.6v70.4c44.7 88.3 136.8 148.7 242.4 148.7z"
                  fill="#34A853"
                />
                <path
                  d="M119.3 324.8c-10.5-30.9-10.5-64.2 0-95.1V159.3H29.6c-37.8 74.9-37.8 162.8 0 237.7l89.7-72.2z"
                  fill="#FBBC05"
                />
                <path
                  d="M272 107.7c39.6-.6 77.7 13.5 107 39.6l80.1-80.1C406.1 24.7 340.9-.2 272 0 166.4 0 74.3 60.3 29.6 148.6l89.7 70.4C140.8 155.6 201 107.7 272 107.7z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full bg-[#1877F2] text-white rounded-lg py-2 text-sm font-semibold shadow hover:bg-[#145dbf] transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="white"
                className="w-4 h-4"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V127.45c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.43 0 225.36 0c-73.22 0-121.13 44.38-121.13 124.72V195.3H22.89V288h81.33v224h100.2V288z" />
              </svg>
              <span>Continue with Facebook</span>
            </button>
          </div>

          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
