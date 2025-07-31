import { Video, MessageCircle, CalendarCheck, Star, Info } from "lucide-react";

export function ExpertCard({
  id,
  name,
  designation,
  rating,
  experience,
  sessions,
  image,
}) {
  return (
    <div
      className="bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl hover:shadow-2xl rounded-3xl p-8 w-full max-w-sm text-center flex flex-col items-center gap-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
      key={id}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full translate-y-12 -translate-x-12 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

      {/* Avatar with enhanced styling */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        <img
          src={image || "/placeholder.svg?height=112&width=112&text=Expert"}
          alt="Expert"
          className="relative w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Info with enhanced typography */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full">
          {designation}
        </p>
      </div>

      {/* Enhanced Rating */}
      <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-orange-50 px-4 py-2 rounded-full border border-yellow-200 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
          />
        ))}
        <span className="text-sm font-semibold text-gray-700 ml-2 bg-white px-2 py-1 rounded-full">
          {rating}
        </span>
      </div>

      {/* Experience and Sessions with better styling */}
      <div className="flex flex-col sm:flex-row gap-4 text-sm relative z-10">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-xl border border-blue-200">
          <span className="font-bold text-blue-700 text-lg">{experience}</span>
          <span className="text-blue-600 ml-1 font-medium">yrs exp</span>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-xl border border-purple-200">
          <span className="font-bold text-purple-700 text-lg">{sessions}</span>
          <span className="text-purple-600 ml-1 font-medium">sessions</span>
        </div>
      </div>

      {/* Enhanced Action Buttons */}
      <div className="mt-6 flex flex-col gap-3 w-full relative z-10">
        <div className="flex gap-3">
          <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <MessageCircle className="w-4 h-4" />
            Chat
          </button>
          <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 border-2 border-violet-200 hover:border-violet-300 text-violet-700 font-semibold py-3 px-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <Video className="w-4 h-4" />
            Call
          </button>
        </div>

        <div className="flex gap-3">
          <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 border-2 border-emerald-200 hover:border-emerald-300 text-emerald-700 font-semibold py-3 px-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <CalendarCheck className="w-4 h-4" />
            Book
          </button>
          <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 border-2 border-indigo-200 hover:border-indigo-300 text-indigo-700 font-semibold py-3 px-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <Info className="w-4 h-4" />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
