import { Logo } from "../components/Logo";
import CountUp from "react-countup";
import { Users, UserCheck, MessageCircle, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-pink-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-screen py-16 px-4 text-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Background elements for visual interest */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center flex-1">
          <Logo />
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 max-w-3xl leading-tight tracking-tight drop-shadow-md animate-fade-in-up">
            Your Emotional Wellness{" "}
            <span className="text-indigo-600">Companion</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed animate-fade-in-up animation-delay-500">
            Connect with experts to discuss complexities and challenges in your
            personal, professional, and academic life. Get guidance, support,
            and a happier you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up animation-delay-1000">
            <a
              href="/signup"
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Get Started Free
            </a>
            <a
              href="/login"
              className="px-10 py-4 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold shadow-lg hover:bg-indigo-50 hover:border-indigo-700 hover:text-indigo-700 active:scale-[0.98] transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-slow animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-800 drop-shadow-sm animate-fade-in-up">
            How It <span className="text-indigo-600">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center border border-gray-100 animate-fade-in-up animation-delay-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center mb-6 shadow-inner">
                <span className="text-4xl text-indigo-600">📝</span>
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Sign Up</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Create your free, confidential account in just a few seconds and
                take the first step toward self-care.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center border border-gray-100 animate-fade-in-up animation-delay-600">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center mb-6 shadow-inner">
                <span className="text-4xl text-pink-500">💬</span>
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Connect</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Instantly connect with certified counsellors who are ready to
                listen and guide you.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center border border-gray-100 animate-fade-in-up animation-delay-900">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center mb-6 shadow-inner">
                <span className="text-4xl text-yellow-500">🌱</span>
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-800">Grow</h4>
              <p className="text-gray-600 text-base leading-relaxed">
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
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-pink-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-16 drop-shadow-sm animate-fade-in-up">
            Why MindMate <span className="text-indigo-600">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Confidential Chat */}
            <div className="flex flex-col items-center bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl text-indigo-600">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Confidential Chat
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Speak freely and securely. Our chats are private and anonymous,
                always.
              </p>
            </div>

            {/* Expert Counsellors */}
            <div className="flex flex-col items-center bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-600">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl text-pink-500">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Expert Counsellors
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Talk to certified psychologists, life coaches, and mentors who
                care.
              </p>
            </div>

            {/* Personal Growth */}
            <div className="flex flex-col items-center bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up animation-delay-900">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl text-yellow-500">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Personal Growth
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Build confidence, emotional strength, and a happier version of
                yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-pink-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-16 drop-shadow-sm animate-fade-in-up">
            What Our Users <span className="text-indigo-600">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-indigo-50 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col items-center text-center border border-indigo-100 animate-fade-in-up animation-delay-300">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Priya"
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-300 mb-6 shadow-md"
              />
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                “MindMate helped me find clarity and peace during a tough time.
                The experts are so supportive!”
              </p>
              <span className="font-bold text-indigo-700 text-lg mt-auto">
                — Priya, Student
              </span>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-pink-50 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col items-center text-center border border-pink-100 animate-fade-in-up animation-delay-600">
              <img
                src="https://randomuser.me/api/portraits/men/35.jpg"
                alt="Rahul"
                className="w-24 h-24 rounded-full object-cover border-4 border-pink-300 mb-6 shadow-md"
              />
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                “I love the confidentiality and ease of connecting with a
                counsellor. Highly recommended!”
              </p>
              <span className="font-bold text-pink-700 text-lg mt-auto">
                — Rahul, Working Professional
              </span>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-yellow-50 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col items-center text-center border border-yellow-100 animate-fade-in-up animation-delay-900">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Ananya"
                className="w-24 h-24 rounded-full object-cover border-4 border-yellow-300 mb-6 shadow-md"
              />
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                “The resources and expert advice have helped me grow and manage
                stress better.”
              </p>
              <span className="font-bold text-yellow-700 text-lg mt-auto">
                — Ananya, Entrepreneur
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Panel Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 via-yellow-50 to-indigo-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-800 drop-shadow-sm animate-fade-in-up">
            Meet Our <span className="text-indigo-600">Experts</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Expert 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center border border-gray-100 animate-fade-in-up animation-delay-300">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Dr. Archana Tyagi"
                className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-indigo-300 shadow-md"
              />
              <h4 className="text-xl font-bold text-gray-800">
                Dr. Archana Tyagi
              </h4>
              <span className="text-base text-indigo-600 block mt-2 mb-1 font-semibold">
                Behavioural Trainer
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                ICF (PCC) Life Coach, Science of Happiness
              </p>
            </div>

            {/* Expert 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center border border-gray-100 animate-fade-in-up animation-delay-600">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Richa Singh"
                className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-pink-300 shadow-md"
              />
              <h4 className="text-xl font-bold text-gray-800">Richa Singh</h4>
              <span className="text-base text-pink-600 block mt-2 mb-1 font-semibold">
                Co-founder & CEO
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Emotional Wellness, Career Counselling
              </p>
            </div>

            {/* Expert 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center border border-gray-100 animate-fade-in-up animation-delay-900">
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="Puneet Manuja"
                className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-yellow-300 shadow-md"
              />
              <h4 className="text-xl font-bold text-gray-800">Puneet Manuja</h4>
              <span className="text-base text-yellow-600 block mt-2 mb-1 font-semibold">
                Co-founder
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Relationship Counselling, Psychotherapy
              </p>
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-16">
            <button
              onClick={() => router.push("/expert-registeration")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              BECOME AN EXPERT
            </button>
          </div>
        </div>
      </section>

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
