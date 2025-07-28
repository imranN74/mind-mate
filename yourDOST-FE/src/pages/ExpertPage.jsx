import { ExpertCard } from "../components/ExpertCard";
import { experts } from "../utils/data";

export function ExpertPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-5 my-5">
      {experts.map((data) => {
        return (
          <ExpertCard
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
  );
}
