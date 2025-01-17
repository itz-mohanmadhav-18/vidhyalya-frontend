import React, { useState } from "react";

export default function TeacherApplicationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subjects: [],
    experience: "",
    education: "",
    certifications: "",
    coverLetter: "",
    hasTeachingLicense: false,
    preferredGrades: [],
    availability: "full-time",
  });

  const [showAlert, setShowAlert] = useState(false);

  const subjects = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Physical Education",
    "Art",
    "Music",
    "Computer Science",
  ];

  const grades = ["Elementary", "Middle School", "High School"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subjects: [],
      experience: "",
      education: "",
      certifications: "",
      coverLetter: "",
      hasTeachingLicense: false,
      preferredGrades: [],
      availability: "full-time",
    });
    setTimeout(() => {
      setShowAlert(false);
      onClose();
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "subjects") {
        setFormData((prev) => ({
          ...prev,
          subjects: checked
            ? [...prev.subjects, value]
            : prev.subjects.filter((subject) => subject !== value),
        }));
      } else if (name === "preferredGrades") {
        setFormData((prev) => ({
          ...prev,
          preferredGrades: checked
            ? [...prev.preferredGrades, value]
            : prev.preferredGrades.filter((grade) => grade !== value),
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const chalkboardText = {
    fontFamily: "'Permanent Marker', cursive",
    letterSpacing: "1px",
    textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50">
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] bg-[#383838] border-[12px] border-t-[#bda27e] border-l-[#b19876] border-b-[#c9ad86] border-r-[#b19876] rounded-lg z-50 max-h-[90vh] overflow-y-auto scrollbar-hide"
          style={{
            boxShadow:
              "0px 0px 6px 5px rgba(58, 18, 13, 0), 0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5)",
            backgroundImage:
              'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACmGA8nAAAAEElEQVQImWP4//8/wygAAgAB/xwVO9YAAAAASUVORK5CYII=")',
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="relative p-6 text-white scrollbar-hidden line-height-[1]">
            <h2
              className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white tracking-wider"
              style={chalkboardText}
            >
              <i className="fas fa-chalkboard-teacher mr-3"></i>
              Teacher Application
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Basic Info Section */}
              <div className="space-y-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border rounded-md"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border rounded-md"
                />
              </div>

              {/* Subjects Section */}
              <div className="space-y-2">
                <label className="block text-beige" style={chalkboardText}>
                  Subjects You Can Teach
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {subjects.map((subject) => (
                    <label
                      key={subject}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        name="subjects"
                        value={subject}
                        checked={formData.subjects.includes(subject)}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="text-sm">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Grade Levels */}
              <div className="space-y-2">
                <label className="block text-beige" style={chalkboardText}>
                  Preferred Grade Levels
                </label>
                <div className="flex space-x-4">
                  {grades.map((grade) => (
                    <label key={grade} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="preferredGrades"
                        value={grade}
                        checked={formData.preferredGrades.includes(grade)}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="text-sm">{grade}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience & Education */}
              <div className="space-y-3">
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border rounded-md"
                  required
                >
                  <option value="" disabled>Years of Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
                <textarea
                  name="education"
                  placeholder="Educational Background"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border rounded-md"
                  rows="3"
                  maxLength="500"
                  required
                />
              </div>

              {/* Certifications & License */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="hasTeachingLicense"
                    checked={formData.hasTeachingLicense}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4"
                  />
                  <label className="text-sm">
                    I have a valid teaching license
                  </label>
                </div>

                <textarea
                  name="certifications"
                  placeholder="List your certifications (optional)"
                  value={formData.certifications}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border rounded-md"
                  rows="2"
                  maxLength="300"
                />
              </div>

              {/* Availability */}
              <div className="space-y-2">
                <label className="block text-beige" style={chalkboardText}>
                  Availability
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="availability"
                      value="full-time"
                      checked={formData.availability === "full-time"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="text-sm">Full-time</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="availability"
                      value="part-time"
                      checked={formData.availability === "part-time"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="text-sm">Part-time</span>
                  </label>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <textarea
                  name="coverLetter"
                  placeholder="Tell us why you want to join our school..."
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-black border rounded-md"
                  rows="4"
                  maxLength="1000"
                  required
                />
                <div className="text-xs text-gray-400 mt-1">
                  {formData.coverLetter.length}/1000 characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-beige text-gray-900 py-3 px-4 rounded-md hover:bg-[#a58e6f] transition duration-200 font-bold mt-6"
                style={chalkboardText}
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Submit Application
              </button>
            </form>

            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-xl text-white hover:text-red-500 transition-colors duration-300 transform hover:scale-110 bg-gray-900 bg-opacity-50 rounded-full p-1"
              onClick={onClose}
              aria-label="Close application form"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Chalk dust effect */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/10 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Success Alert */}
      {showAlert && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
          <div className="font-bold text-lg mb-1" style={chalkboardText}>
            Application Submitted!
          </div>
          <div className="text-sm">
            Thank you for applying. We'll review your application and contact
            you soon.
          </div>
        </div>
      )}
    </>
  );
}
