import { blogs } from "../utils/blog";
import { BlogCard } from "../components/BlogCard";

export function BlogPage() {
  return (
    <div>
      <section className="py-12 px-4 md:px-12 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          MindMate Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              image={blog.image}
              author={blog.author}
              date={blog.date}
              readTime={blog.readTime}
            />
          ))}
        </div>
      </section>
      <section className="w-full bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
            Empowering Young Minds
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At <span className="font-semibold text-indigo-600">MindMate</span>,
            we believe that mental well-being starts with awareness and empathy.
            Our curated blog content is written by experienced professionals to
            help students and young individuals confidently navigate through
            life’s <span className="font-medium text-gray-800">emotional</span>,{" "}
            <span className="font-medium text-gray-800">academic</span>, and{" "}
            <span className="font-medium text-gray-800">social</span>{" "}
            challenges.
            <br className="hidden sm:block" />
            <br />
            <span className="text-indigo-700 font-semibold">
              Learn. Reflect. Grow. Stay informed and empowered with every read.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
