import { experts } from "../utils/data";

// Extract unique specializations
const specializations = Array.from(
  new Set(experts.flatMap((e) => e.specializations))
);
const categories = ["All", ...specializations];

export function Category({ selected, onSelect }) {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex gap-3 whitespace-nowrap px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category === "All" ? "" : category)}
            className={`px-4 py-2 rounded-full border font-medium text-sm transition cursor-pointer 
              ${
                selected === category || (selected === "" && category === "All")
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
