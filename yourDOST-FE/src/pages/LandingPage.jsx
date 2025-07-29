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
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
            How It <span className="text-indigo-600">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <span className="text-3xl text-indigo-600">📝</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Sign Up
              </h4>
              <p className="text-gray-600 text-sm">
                Create your free, confidential account in just a few seconds and
                take the first step toward self-care.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <span className="text-3xl text-pink-500">💬</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Connect
              </h4>
              <p className="text-gray-600 text-sm">
                Instantly connect with certified counsellors who are ready to
                listen and guide you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <span className="text-3xl text-yellow-500">🌱</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Grow</h4>
              <p className="text-gray-600 text-sm">
                Explore personalized resources, set goals, and track your
                emotional growth with MindMate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data/Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-pink-100 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            <span className="text-indigo-600">Trusted</span> by Millions,&nbsp;
            <span className="text-pink-600">Guided</span> by Experts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {/* Users Helped */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 shadow-md">
                  <Users className="w-8 h-8 text-indigo-600" />
                </span>
              </div>
              <div className="text-5xl font-extrabold text-indigo-700">
                <CountUp
                  end={2000000}
                  duration={3}
                  separator=","
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="mt-3 text-gray-700 font-medium text-base">
                Users Helped
              </div>
            </div>

            {/* Experts */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 shadow-md">
                  <UserCheck className="w-8 h-8 text-pink-600" />
                </span>
              </div>
              <div className="text-5xl font-extrabold text-pink-600">
                <CountUp
                  end={900}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="mt-3 text-gray-700 font-medium text-base">
                Verified Experts
              </div>
            </div>

            {/* Sessions */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 shadow-md">
                  <MessageCircle className="w-8 h-8 text-yellow-500" />
                </span>
              </div>
              <div className="text-5xl font-extrabold text-yellow-500">
                <CountUp
                  end={2500000}
                  duration={3}
                  separator=","
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="mt-3 text-gray-700 font-medium text-base">
                Sessions Conducted
              </div>
            </div>

            {/* Years of Experience */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 shadow-md">
                  <Award className="w-8 h-8 text-blue-500" />
                </span>
              </div>
              <div className="text-5xl font-extrabold text-blue-500">
                <CountUp
                  end={10}
                  duration={3}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="mt-3 text-gray-700 font-medium text-base">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Why MindMate Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Confidential Chat */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <span className="text-3xl text-indigo-600">🔒</span>{" "}
                {/* lock for privacy */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Confidential Chat
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Speak freely and securely. Our chats are private and anonymous,
                always.
              </p>
            </div>

            {/* Expert Counsellors */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <span className="text-3xl text-pink-500">🧠</span>{" "}
                {/* brain icon for expertise */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Counsellors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Talk to certified psychologists, life coaches, and mentors who
                care.
              </p>
            </div>

            {/* Personal Growth */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <span className="text-3xl text-yellow-500">🚀</span>{" "}
                {/* rocket for growth */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personal Growth
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Build confidence, emotional strength, and a happier version of
                yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-white via-blue-50 to-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-indigo-50 p-6 rounded-2xl shadow-md transition hover:shadow-lg flex flex-col items-center text-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Priya"
                className="w-16 h-16 rounded-full object-cover border-4 border-indigo-200 mb-4"
              />
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “YourDOST helped me find clarity and peace during a tough time.
                The experts are so supportive!”
              </p>
              <span className="font-semibold text-indigo-700 mt-auto">
                — Priya, Student
              </span>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-pink-50 p-6 rounded-2xl shadow-md transition hover:shadow-lg flex flex-col items-center text-center">
              <img
                src="https://randomuser.me/api/portraits/men/35.jpg"
                alt="Rahul"
                className="w-16 h-16 rounded-full object-cover border-4 border-pink-200 mb-4"
              />
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “I love the confidentiality and ease of connecting with a
                counsellor. Highly recommended!”
              </p>
              <span className="font-semibold text-pink-700 mt-auto">
                — Rahul, Working Professional
              </span>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-yellow-50 p-6 rounded-2xl shadow-md transition hover:shadow-lg flex flex-col items-center text-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Ananya"
                className="w-16 h-16 rounded-full object-cover border-4 border-yellow-200 mb-4"
              />
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “The resources and expert advice have helped me grow and manage
                stress better.”
              </p>
              <span className="font-semibold text-yellow-700 mt-auto">
                — Ananya, Entrepreneur
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Panel Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-50 via-yellow-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Meet Our Experts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Expert 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Dr. Archana Tyagi"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-indigo-200"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Dr. Archana Tyagi
              </h4>
              <span className="text-sm text-indigo-600 block mt-1 mb-1">
                Behavioural Trainer
              </span>
              <p className="text-xs text-gray-600">
                ICF (PCC) Life Coach, Science of Happiness
              </p>
            </div>

            {/* Expert 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Richa Singh"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Richa Singh
              </h4>
              <span className="text-sm text-pink-600 block mt-1 mb-1">
                Co-founder & CEO
              </span>
              <p className="text-xs text-gray-600">
                Emotional Wellness, Career Counselling
              </p>
            </div>

            {/* Expert 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="Puneet Manuja"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-yellow-200"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Puneet Manuja
              </h4>
              <span className="text-sm text-yellow-600 block mt-1 mb-1">
                Co-founder
              </span>
              <p className="text-xs text-gray-600">
                Relationship Counselling, Psychotherapy
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              BECOME AN EXPERT
            </button>
          </div>
        </div>
      </section>

      <section></section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="border-b pb-6">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                Is my conversation confidential?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely. All conversations are completely confidential and
                anonymous. Your privacy is our top priority.
              </p>
            </div>

            <div className="border-b pb-6">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                Who are the experts?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our experts are licensed psychologists, certified counsellors,
                and life coaches with years of real-world experience.
              </p>
            </div>

            <div className="border-b pb-6">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                How do I get started?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sign up for free in just a few seconds. Once registered, you can
                immediately connect with an expert of your choice.
              </p>
            </div>

            <div className="border-b pb-6">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                Is this platform mobile-friendly?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, our platform works seamlessly on all devices — mobile,
                tablet, and desktop — without requiring any additional apps.
              </p>
            </div>

            <div className="border-b pb-6">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                Are the services free?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer both free and premium support options. Many resources
                and chats are available at no cost, with additional services for
                subscribers.
              </p>
            </div>

            <div className="border-b pb-6">
              <h4 className="font-semibold text-lg text-indigo-700 mb-2">
                Can I switch experts if needed?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely. You’re in control. You can switch experts at any
                time if you feel the need for a different perspective or
                specialty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
