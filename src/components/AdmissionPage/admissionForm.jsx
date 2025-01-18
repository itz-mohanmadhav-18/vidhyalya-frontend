import React, { useState } from "react";

export default function StudentAdmissionPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    gradeLevel: "",
    address: "",
    parentGuardianName: "",
    parentGuardianContact: "",
    previousSchool: "",
    termsAccepted: false,
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    alert("Admission form submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      gradeLevel: "",
      address: "",
      parentGuardianName: "",
      parentGuardianContact: "",
      previousSchool: "",
      termsAccepted: false,
      additionalInfo: "",
    });
  };

  const chalkboardText = {
    fontFamily: "'Permanent Marker', cursive",
    letterSpacing: "1px",
    textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div
      className="w-full mb-20 mt-10 sm:w-[80%] mx-auto bg-[#383838] border-[12px] border-t-[#bda27e] border-l-[#b19876] border-b-[#c9ad86] border-r-[#b19876] rounded-lg p-6 overflow-y-auto scrollbar-hide"
      style={{
        boxShadow:
          "0px 0px 6px 5px rgba(58, 18, 13, 0), 0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5)",
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACmGA8nAAAAEElEQVQImWP4//8/wygAAgAB/xwVO9YAAAAASUVORK5CYII=")',
        backgroundBlendMode: "overlay",
      }}
    >
      <h2
        className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white tracking-wider scrollbar-hide"
        style={chalkboardText}
      >
        <i className="fas fa-user-graduate mr-3"></i>
        Student Admission Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <input
            type="date"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white text-black border rounded-md"
          />
        </div>

        {/* Gender and Grade Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white text-black border rounded-md"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="gradeLevel"
            value={formData.gradeLevel}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white text-black border rounded-md"
            required
          >
            <option value="" disabled>
              Select Grade Level
            </option>
            <option value="Elementary">Elementary</option>
            <option value="Middle School">Middle School</option>
            <option value="High School">High School</option>
          </select>
        </div>

        {/* Address Field */}
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white text-black border rounded-md"
          rows="3"
          maxLength="300"
          required
        />

        {/* Parent/Guardian Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="parentGuardianName"
            placeholder="Parent/Guardian Name"
            required
            value={formData.parentGuardianName}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white text-black border rounded-md"
          />
          <input
            type="tel"
            name="parentGuardianContact"
            placeholder="Parent/Guardian Contact Number"
            required
            value={formData.parentGuardianContact}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white text-black border rounded-md"
          />
        </div>

        {/* Previous School */}
        <textarea
          name="previousSchool"
          placeholder="Previous School (if any)"
          value={formData.previousSchool}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white text-black border rounded-md"
          rows="2"
          maxLength="200"
        />

        {/* Additional Info and Terms */}
        <textarea
          name="additionalInfo"
          placeholder="Additional Information (optional)"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white text-black border rounded-md"
          rows="3"
          maxLength="300"
        />

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="h-4 w-4"
            required
          />
          <label className="text-white">I accept the terms and conditions</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#c2a782] text-black py-3 px-4 rounded-md hover:bg-[#a58e6f] transition duration-200 font-bold mt-6"
          style={chalkboardText}
        >
          <i className="fas fa-paper-plane mr-2"></i>
          Submit Admission Form
        </button>
      </form>
    </div>
  );
}