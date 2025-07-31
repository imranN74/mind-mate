import Select from "react-select";

const specializationOptions = [
  { value: "Anxiety", label: "Anxiety" },
  { value: "Self Help", label: "Self Help" },
  { value: "Anger Issues", label: "Anger Issues" },
  { value: "Depression", label: "Depression" },
  { value: "Relationship Issues", label: "Relationship Issues" },
  { value: "Career Guidance", label: "Career Guidance" },
];

export function SpecializationSelect({ formData, setFormData }) {
  const handleMultiChange = (selectedOptions) => {
    const selectedValues = selectedOptions?.map((option) => option.value) || [];
    setFormData((prev) => ({
      ...prev,
      specialization: selectedValues,
    }));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Specializations <span className="text-red-500">*</span>{" "}
        <span className="text-xs text-gray-500">(Select Multiple)</span>
      </label>
      <Select
        isMulti
        name="specialization"
        options={specializationOptions}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="Select specialization"
        value={specializationOptions.filter((option) =>
          formData.specialization.includes(option.value)
        )}
        onChange={handleMultiChange}
      />
    </div>
  );
}
