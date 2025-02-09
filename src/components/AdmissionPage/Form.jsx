// AdmissionForm.jsx
import React from "react";

const AdmissionForm = () => {
  return (
    <div className="bg-white py-12 px-6 flex justify-center">
      <form className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Admission Form</h2>
        <label className="block mb-2">Student's Name</label>
        <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Enter name" />
        
        <label className="block mb-2">Father's Name</label>
        <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Enter father's name" />
        
        <label className="block mb-2">Mother's Name</label>
        <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Enter mother's name" />
        
        <label className="block mb-2">DOB</label>
        <input className="w-full p-2 border rounded mb-4" type="date" />
        
        <label className="block mb-2">Gender</label>
        <select className="w-full p-2 border rounded mb-4">
          <option>Male</option>
          <option>Female</option>
        </select>
        
        <label className="block mb-2">Class Applying For</label>
        <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Enter class" />
        
        <label className="block mb-2">Email Address</label>
        <input className="w-full p-2 border rounded mb-4" type="email" placeholder="Enter email" />
        
        <button className="w-full bg-maroon text-white py-2 rounded-lg hover:bg-red-700">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;