import { ExpertCard } from "../components/ExpertCard";
import { experts } from "../utils/data";
import { Category } from "../components/Category";

export function ExpertPage() {
  return (
    <div>
      {/* Category Filter */}
      <div className="">
        <Category />
      </div>

      {/* Expert Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-5 my-5">
        {experts.map((data) => {
          return (
            <ExpertCard
              key={data.id}
              id={data.id}
              name={data.name}
              designation={data.designation}
              rating={data.rating}
              experience={data.experience}
              sessions={data.sessions}
              image={data.image}
              bio={data.bio}
            />
          );
        })}
      </div>

      {/* Informative Section */}
      <section className="w-full bg-gradient-to-br from-pink-50 via-white to-indigo-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
            Connect with Trusted Experts
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At <span className="font-semibold text-pink-600">MindMate</span>, we
            collaborate with certified mental health professionals who are
            deeply committed to your emotional well-being. Whether you're facing{" "}
            <span className="font-medium text-gray-800">stress</span>,{" "}
            <span className="font-medium text-gray-800">
              relationship issues
            </span>
            ,{" "}
            <span className="font-medium text-gray-800">academic pressure</span>
            , or simply need someone to talk to — our experts are here to guide
            you with compassion and understanding.
            <br className="hidden sm:block" />
            <br />
            <span className="text-pink-700 font-semibold">
              Take the first step toward healing and growth today.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
