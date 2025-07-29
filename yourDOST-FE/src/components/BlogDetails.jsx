import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../utils/blog";

export function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentId = parseInt(id);
  const blog = blogs.find((b) => b.id === currentId);
  const currentIndex = blogs.findIndex((b) => b.id === currentId);

  const hasNext = currentIndex < blogs.length - 1;
  const nextBlog = hasNext ? blogs[currentIndex + 1] : null;

  const hasPrevious = currentIndex > 0;
  const prevBlog = hasPrevious ? blogs[currentIndex - 1] : null;

  if (!blog)
    return <div className="p-10 text-center text-gray-600">Blog not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-lg mb-6 w-full h-64 object-cover shadow"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        {blog.date} · {blog.readTime} read · By{" "}
        <span className="font-medium">{blog.author}</span>
      </div>
      <div className="prose max-w-none text-gray-800 mb-10">{blog.content}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4 mt-10">
        <button
          onClick={() =>
            hasPrevious ? navigate(`/blog/${prevBlog.id}`) : navigate("/blogs")
          }
          className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          {hasPrevious ? "← Previous Blog" : "← Back to Blogs"}
        </button>

        {hasNext && (
          <button
            onClick={() => navigate(`/blog/${nextBlog.id}`)}
            className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Next Blog →
          </button>
        )}
      </div>
    </div>
  );
}
