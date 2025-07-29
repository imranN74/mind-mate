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
      className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-md border border-gray-100"
      key={id}
    >
      {/* Image */}
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>

        <div className="text-xs text-gray-400 mb-4">
          By {author} • {date}
        </div>
        <div className="text-xs text-gray-400 mb-4">{readTime} Read</div>

        <Link
          to={`/blog/${id}`}
          className="inline-block text-sm font-medium text-indigo-600 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
