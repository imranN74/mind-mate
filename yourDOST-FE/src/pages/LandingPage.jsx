import { Logo } from "../components/Logo";
import CountUp from "react-countup";
import { Users, UserCheck, MessageCircle, Award } from "lucide-react";

export function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-pink-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 py-16 px-4 text-center">
        <Logo />
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 max-w-2xl leading-tight">
          Your Emotional Wellness{" "}
          <span className="text-indigo-600">Companion</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl">
          Connect with experts to discuss complexities and challenges in your
          personal, professional, and academic life. Get guidance, support, and
          a happier you.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/signup"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
          >
            Get Started Free
          </a>
          <a
            href="/login"
            className="px-8 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-lg font-semibold shadow hover:bg-indigo-50 transition"
          >
            Login
          </a>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-50 to-pink-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <span className="text-2xl text-indigo-600">📝</span>
              </div>
              <h4 className="font-semibold mb-2">Sign Up</h4>
              <p className="text-gray-600 text-sm">
                Create your free, confidential account in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <span className="text-2xl text-pink-500">💬</span>
              </div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <p className="text-gray-600 text-sm">
                Chat with expert counsellors and get guidance instantly.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <span className="text-2xl text-yellow-500">🌱</span>
              </div>
              <h4 className="font-semibold mb-2">Grow</h4>
              <p className="text-gray-600 text-sm">
                Access resources and track your personal growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data/Stats Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-100 via-pink-100 to-indigo-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
                <Users className="w-7 h-7 text-indigo-600" />
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-indigo-700">
              <CountUp
                end={2000000}
                duration={2.5}
                separator=","
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div className="mt-2 text-gray-700 font-medium text-sm md:text-base">
              Users Helped
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100">
                <UserCheck className="w-7 h-7 text-pink-600" />
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-pink-600">
              <CountUp
                end={900}
                duration={2.5}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div className="mt-2 text-gray-700 font-medium text-sm md:text-base">
              Experts
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100">
                <MessageCircle className="w-7 h-7 text-yellow-500" />
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-yellow-500">
              <CountUp
                end={2500000}
                duration={2.5}
                separator=","
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div className="mt-2 text-gray-700 font-medium text-sm md:text-base">
              Sessions
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                <Award className="w-7 h-7 text-blue-500" />
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-blue-500">
              <CountUp
                end={10}
                duration={2.5}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              />
            </div>
            <div className="mt-2 text-gray-700 font-medium text-sm md:text-base">
              Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-white shadow-inner">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <span className="text-3xl text-indigo-600">💬</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Confidential Chat</h3>
            <p className="text-gray-600 text-sm">
              Talk to experts anonymously and get guidance for your emotional
              wellness.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
              <span className="text-3xl text-pink-500">🧑‍⚕️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Counsellors</h3>
            <p className="text-gray-600 text-sm">
              Connect with certified psychologists, life coaches, and career
              guides.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
              <span className="text-3xl text-yellow-500">🌱</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Personal Growth</h3>
            <p className="text-gray-600 text-sm">
              Access resources and support to build resilience, confidence, and
              happiness.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl shadow flex flex-col items-center">
              <p className="text-gray-700 italic mb-4">
                “YourDOST helped me find clarity and peace during a tough time.
                The experts are so supportive!”
              </p>
              <span className="font-semibold text-indigo-700">
                — Priya, Student
              </span>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl shadow flex flex-col items-center">
              <p className="text-gray-700 italic mb-4">
                “I love the confidentiality and ease of connecting with a
                counsellor. Highly recommended!”
              </p>
              <span className="font-semibold text-pink-700">
                — Rahul, Working Professional
              </span>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl shadow flex flex-col items-center">
              <p className="text-gray-700 italic mb-4">
                “The resources and expert advice have helped me grow and manage
                stress better.”
              </p>
              <span className="font-semibold text-yellow-700">
                — Ananya, Entrepreneur
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Panel Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-indigo-200 flex items-center justify-center mb-4">
                <span className="text-4xl">👩‍⚕️</span>
              </div>
              <h4 className="font-semibold mb-1">Dr. Archana Tyagi</h4>
              <span className="text-gray-600 text-sm mb-2">
                Behavioural Trainer
              </span>
              <p className="text-gray-500 text-xs">
                ICF (PCC) Life Coach, Science of Happiness
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-pink-200 flex items-center justify-center mb-4">
                <span className="text-4xl">🧑‍⚕️</span>
              </div>
              <h4 className="font-semibold mb-1">Richa Singh</h4>
              <span className="text-gray-600 text-sm mb-2">
                Co-founder & CEO
              </span>
              <p className="text-gray-500 text-xs">
                Emotional Wellness, Career Counselling
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center mb-4">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <h4 className="font-semibold mb-1">Puneet Manuja</h4>
              <span className="text-gray-600 text-sm mb-2">Co-founder</span>
              <p className="text-gray-500 text-xs">
                Relationship Counselling, Psychotherapy
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto text-center mt-10">
            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              BECOME AN EXPERT
            </button>
          </div>
        </div>
      </section>

      <section></section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                Is my conversation confidential?
              </h4>
              <p className="text-gray-600 text-sm">
                Absolutely. All conversations are 100% confidential and
                anonymous.
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                Who are the experts?
              </h4>
              <p className="text-gray-600 text-sm">
                Our experts are certified psychologists, counsellors, and life
                coaches with years of experience.
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                How do I get started?
              </h4>
              <p className="text-gray-600 text-sm">
                Just sign up for free and start chatting with an expert right
                away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-50 to-pink-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest tips, resources, and
            updates from YourDOST.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm flex-1"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} YourDOST. All rights reserved.
      </footer>
    </div>
  );
}
