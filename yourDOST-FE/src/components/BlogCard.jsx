import { Link } from "react-router-dom";

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
}) {
  return (
    <div
      className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-md border border-gray-100 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
      key={id}
    >
      {/* Image */}
      {image && (
        <img
          src={image || "/placeholder.svg?height=192&width=384&text=Blog+Image"} // Using placeholder if image is not provided
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl shadow-inner"
        />
      )}
      {/* Content */}
      <div className="p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-base mb-5 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span className="font-medium">By {author}</span>
          <span className="font-medium">{date}</span>
        </div>
        <div className="text-sm text-gray-500 mb-6 font-medium">
          {readTime} Read
        </div>
        <Link
          to={`/blog/${id}`}
          className="inline-block self-start px-6 py-2.5 bg-indigo-600 text-white rounded-full font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
