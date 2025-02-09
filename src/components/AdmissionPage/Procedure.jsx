import React from "react";
import { FaFileAlt, FaPenFancy, FaUserCheck, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";

const Procedure = () => {
  const steps = [
    { icon: <FaFileAlt />, text: "Fill out the registration form and submit required documents." },
    { icon: <FaPenFancy />, text: "Written entrance exam for students of Grade 3 and above." },
    { icon: <FaUserCheck />, text: "Face-to-face interview for qualified candidates." },
    { icon: <FaSchool />, text: "Final selection by school authorities." },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 text-center">
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
        Admission Procedure
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-[5px_5px_0_brown] shadow-inset-[-5px_-5px_0_beige] mt-6">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center overflow-hidden space-x-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-maroon-text text-xl md:text-3xl">{step.icon}</div>
              <p className="text-sm md:text-lg font-medium text-gray">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Procedure;