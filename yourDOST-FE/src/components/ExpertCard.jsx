import { Video, MessageCircle, CalendarCheck, Star, Info } from "lucide-react";
import { experts } from "../utils/data";

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
      className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm text-center flex flex-col items-center gap-4 border border-gray-100"
      key={id}
    >
      {/* Avatar */}
      <img
        src={image}
        alt="Expert"
        className="w-24 h-24 rounded-full object-cover shadow"
      />

      {/* Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{designation}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500" />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>

      {/* Experience and Sessions */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-800">{experience}</span> yrs
          experience
        </p>
        <p>
          <span className="font-medium text-gray-800">{sessions}</span> sessions
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-between gap-3 w-full flex-wrap">
        <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition">
          <MessageCircle className="w-4 h-4" />
          Chat
        </button>

        <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 border border-violet-300 text-violet-700 font-medium py-2 px-4 rounded-lg hover:bg-violet-50 transition">
          <Video className="w-4 h-4" />
          Call
        </button>

        <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 border border-emerald-300 text-emerald-700 font-medium py-2 px-4 rounded-lg hover:bg-emerald-50 transition">
          <CalendarCheck className="w-4 h-4" />
          Book
        </button>

        <button className="cursor-pointer mt-2 w-full flex items-center justify-center gap-2 border border-indigo-300 text-indigo-700 font-medium py-2 px-4 rounded-lg hover:bg-indigo-50 transition">
          <Info className="w-4 h-4" />
          View Details
        </button>
      </div>
    </div>
  );
}
