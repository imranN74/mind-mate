import { useState } from "react";
import { toast } from "react-toastify";
import { SpecializationSelect } from "./SelectOption"; // Make sure this component is JSX too

const steps = ["Personal Info", "Professional Info", "Availability", "Review"];
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function ExpertRegistrationForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    profileImage: "",
    specialization: [],
    designation: "",
    experience: "",
    license: "",
    education: "",
    bio: "",
    fromDay: "",
    toDay: "",
    fromHour: "",
    fromPeriod: "AM",
    toHour: "",
    toPeriod: "PM",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecializationChange = (selected) => {
    setFormData((prev) => ({ ...prev, specialization: selected }));
  };

  const isStepValid = (step) => {
    switch (step) {
      case 0:
        return (
          formData.name.trim() &&
          formData.email.trim() &&
          formData.phone.trim() &&
          formData.gender.trim()
        );
      case 1:
        return (
          formData.specialization.length > 0 &&
          formData.designation.trim() &&
          formData.experience.trim() &&
          formData.education.trim() &&
          formData.bio.trim()
        );
      case 2:
        return (
          formData.fromDay &&
          formData.toDay &&
          formData.fromHour &&
          formData.fromPeriod &&
          formData.toHour &&
          formData.toPeriod
        );
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!isStepValid(step)) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    toast.success("Form submitted successfully!");
    console.log("Final Data:", formData);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getStepIcon = (stepIndex) => {
    const icons = ["👤", "💼", "🕒", "✅"];
    return icons[stepIndex];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
                <span className="text-4xl">🎯</span>
                Expert Registration
              </h2>
              <p className="text-blue-100 mt-2">
                Join our network of professional experts
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Enhanced Step Indicators */}
            <div className="mb-8">
              <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 rounded-full z-0">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                  />
                </div>

                {steps.map((s, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center relative z-10"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 text-lg font-bold ${
                        i <= step
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 border-blue-500 text-white shadow-lg transform scale-110"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                    >
                      {i < step ? "✓" : getStepIcon(i)}
                    </div>
                    <span
                      className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                        i <= step ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[500px]">
              {/* Step 0: Personal Info */}
              {step === 0 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-600">
                      Let's start with your basic details
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-6 mb-6">
                    {/* Profile Image Upload Section */}
                    <div className="relative flex flex-col items-center mb-6">
                      <input
                        id="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            profileImage: e.target.files?.[0] || null,
                          }))
                        }
                        className="hidden"
                      />
                      <label
                        htmlFor="profileImage"
                        className="cursor-pointer group"
                      >
                        <div className="relative w-36 h-36 rounded-full border-4 border-dashed border-gray-300 group-hover:border-blue-400 transition-all duration-200 overflow-hidden shadow-lg">
                          {formData.profileImage ? (
                            <img
                              src={
                                URL.createObjectURL(formData.profileImage) ||
                                "/placeholder.svg"
                              }
                              alt="Profile Preview"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                              {formData.name ? (
                                <span className="text-white text-3xl font-bold">
                                  {getInitials(formData.name)}
                                </span>
                              ) : (
                                <img
                                  src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                                  alt="Placeholder"
                                  className="w-24 h-24 opacity-80"
                                />
                              )}
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-200">
                            <div className="text-center">
                              <span className="text-white text-2xl block mb-1">
                                📷
                              </span>
                              <span className="text-white text-xs font-medium">
                                Click to Upload
                              </span>
                            </div>
                          </div>
                        </div>
                      </label>
                      <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                          Click to upload your profile photo
                        </p>
                        <p className="text-xs text-gray-500">
                          Recommended: Square image, max 5MB
                        </p>
                      </div>
                    </div>

                    {/* Name, Email, Phone, Gender Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-blue-500">👤</span>
                          Full Name *
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-blue-500">📧</span>
                          Email Address *
                        </label>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-blue-500">📱</span>
                          Phone Number *
                        </label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-blue-500">⚧</span>
                          Gender *
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Professional Info */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Professional Information
                    </h3>
                    <p className="text-gray-600">
                      Tell us about your expertise and qualifications
                    </p>
                  </div>

                  <div className="grid gap-6">
                    <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6">
                      <SpecializationSelect
                        formData={formData}
                        setFormData={setFormData}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-blue-500">💼</span>
                          Designation *
                        </label>
                        <input
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          placeholder="e.g., Senior Consultant, Lead Developer"
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-blue-500">🏆</span>
                          Experience *
                        </label>
                        <input
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="e.g., 5 years, 2+ years"
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-blue-500">📄</span>
                          License/Registration Number *
                        </label>
                        <input
                          name="license"
                          value={formData.license}
                          onChange={handleChange}
                          placeholder="License or registration number"
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="text-blue-500">🎓</span>
                          Educational Background *
                        </label>
                        <input
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          placeholder="e.g., MBA, PhD in Computer Science"
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <span className="text-blue-500">📖</span>
                        Brief Bio *
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Tell us about your professional background, expertise, and what makes you unique..."
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-white resize-none"
                        rows={4}
                      />
                      <p className="text-xs text-gray-500">
                        {formData.bio.length}/500 characters
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Availability */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Availability Schedule
                    </h3>
                    <p className="text-gray-600">
                      Set your weekly availability for consultations
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Available Days */}
                    <div className="bg-green-50 border-2 border-green-100 rounded-xl p-6 shadow-sm">
                      <div className="mb-4">
                        <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <span className="text-green-600">📅</span>
                          Available Days
                          <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            From
                          </label>
                          <select
                            name="fromDay"
                            value={formData.fromDay}
                            onChange={handleChange}
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white"
                          >
                            <option value="">From</option>
                            {daysOfWeek.map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex items-center justify-center pt-6">
                          <span className="text-gray-400 text-xl font-bold">
                            →
                          </span>
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            To
                          </label>
                          <select
                            name="toDay"
                            value={formData.toDay}
                            onChange={handleChange}
                            className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200 bg-white"
                          >
                            <option value="">To</option>
                            {daysOfWeek.map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mt-4 bg-white p-3 rounded-lg border border-green-200">
                        <p className="text-xs text-gray-600">
                          💡 Select your weekly availability range (e.g., Monday
                          to Friday)
                        </p>
                      </div>
                    </div>

                    {/* Available Time */}
                    <div className="bg-purple-50 border-2 border-purple-100 rounded-xl p-6 shadow-sm">
                      <div className="mb-4">
                        <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                          <span className="text-purple-600">🕒</span>
                          Available Time
                          <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="flex gap-3 items-end">
                        {/* From Time */}
                        <div className="flex gap-2 items-end">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              From
                            </label>
                            <input
                              name="fromHour"
                              type="number"
                              min={1}
                              max={12}
                              value={formData.fromHour}
                              onChange={handleChange}
                              className="w-20 h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 bg-white text-center"
                              placeholder="HH"
                            />
                          </div>
                          <select
                            name="fromPeriod"
                            value={formData.fromPeriod}
                            onChange={handleChange}
                            className="w-20 h-12 px-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 bg-white"
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-center pb-2">
                          <span className="text-gray-400 text-xl font-bold">
                            →
                          </span>
                        </div>
                        {/* To Time */}
                        <div className="flex gap-2 items-end">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              To
                            </label>
                            <input
                              name="toHour"
                              type="number"
                              min={1}
                              max={12}
                              value={formData.toHour}
                              onChange={handleChange}
                              className="w-20 h-12 px-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 bg-white text-center"
                              placeholder="HH"
                            />
                          </div>
                          <select
                            name="toPeriod"
                            value={formData.toPeriod}
                            onChange={handleChange}
                            className="w-20 h-12 px-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200 bg-white"
                          >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4 bg-white p-3 rounded-lg border border-purple-200">
                        <p className="text-xs text-gray-600">
                          ⏰ Set a time range you're available each day (e.g., 9
                          AM to 6 PM)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Review Your Information
                    </h3>
                    <p className="text-gray-600">
                      Please review all details before submitting
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white border-2 border-blue-100 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-blue-50 px-6 py-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                          <span className="text-blue-600">👤</span>
                          Personal Information
                        </h4>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <strong className="text-sm font-medium text-gray-500">
                              Name:
                            </strong>
                            <p className="text-lg font-semibold text-gray-900">
                              {formData.name}
                            </p>
                          </div>
                          <div>
                            <strong className="text-sm font-medium text-gray-500">
                              Email:
                            </strong>
                            <p className="text-lg font-semibold text-gray-900">
                              {formData.email}
                            </p>
                          </div>
                          <div>
                            <strong className="text-sm font-medium text-gray-500">
                              Phone:
                            </strong>
                            <p className="text-lg font-semibold text-gray-900">
                              {formData.phone}
                            </p>
                          </div>
                          <div>
                            <strong className="text-sm font-medium text-gray-500">
                              Gender:
                            </strong>
                            <p className="text-lg font-semibold text-gray-900">
                              {formData.gender}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="bg-white border-2 border-green-100 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-green-50 px-6 py-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                          <span className="text-green-600">💼</span>
                          Professional Information
                        </h4>
                      </div>
                      <div className="p-6 space-y-4">
                        <div>
                          <strong className="text-sm font-medium text-gray-500">
                            Specialization:
                          </strong>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {formData.specialization.map((spec, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <strong className="text-sm font-medium text-gray-500">
                              Designation:
                            </strong>
                            <p className="text-lg font-semibold text-gray-900">
                              {formData.designation}
                            </p>
                          </div>
                          <div>
                            <strong className="text-sm font-medium text-gray-500">
                              Experience:
                            </strong>
                            <p className="text-lg font-semibold text-gray-900">
                              {formData.experience}
                            </p>
                          </div>
                          <div>
                            <strong className="text-sm font-medium text-gray-500">
                              License:
                            </strong>
                            <p className="text-lg font-semibold text-gray-900">
                              {formData.license}
                            </p>
                          </div>
                          <div>
                            <strong className="text-sm font-medium text-gray-500">
                              Education:
                            </strong>
                            <p className="text-lg font-semibold text-gray-900">
                              {formData.education}
                            </p>
                          </div>
                        </div>
                        <div>
                          <strong className="text-sm font-medium text-gray-500">
                            Bio:
                          </strong>
                          <p className="text-gray-700 mt-1 leading-relaxed">
                            {formData.bio}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="bg-white border-2 border-purple-100 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-purple-50 px-6 py-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                          <span className="text-purple-600">🕒</span>
                          Availability Schedule
                        </h4>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-center">
                          <div className="text-center space-y-3">
                            <div className="inline-flex items-center px-4 py-2 rounded-full text-lg font-medium bg-purple-100 text-purple-800 border-2 border-purple-200">
                              <strong>Availability:</strong> {formData.fromDay}{" "}
                              to {formData.toDay}, {formData.fromHour}{" "}
                              {formData.fromPeriod} - {formData.toHour}{" "}
                              {formData.toPeriod}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <div>
                {step > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm"
                  >
                    <span>←</span>
                    Back
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-medium">
                  Step {step + 1} of {steps.length}
                </span>
                {step < steps.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Next
                    <span>→</span>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>✓</span>
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
