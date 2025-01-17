import React from 'react';
import { Briefcase, FileText, DollarSign, Clock, Send } from 'lucide-react';

const JobCard = ({ title, description, salary, experience , openContactForm }) => {
  return (
    <div className="relative p-4 rounded-2xl bg-white shadow-[0_20px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-all duration-300 w-full">
      {/* Icon Section */}
      <div className="flex items-start space-x-6 overflow-visible">
        <div className="flex-shrink-0 overflow-visible">
          <div className="bg-beige rounded-2xl p-4 shadow-[2px_2px_0_black] transform hover:scale-110 hover:rotate-3 transition-transform duration-300">
            <Briefcase className="text-maroon-text" size={24} />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow min-w-0">
          <h2 className="text-2xl font-extrabold text-maroon mb-3 tracking-tight truncate">
            {title}
          </h2>
          <p className="text-gray mb-6 flex items-center">
            <FileText className="mr-3 mt-1 flex-shrink-0 text-beige" size={20} />
            <span className="leading-relaxed line-clamp-2 hover:line-clamp-none transition-all duration-300">
              {description}
            </span>
          </p>

          {/* Salary and Experience */}
          <div className="flex flex-wrap gap-4">
            <p className="flex items-center text-gray bg-gradient-to-r from-green-50 to-green-100 py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <DollarSign className="mr-3 text-green-600" size={22} />
              <span className="font-semibold">{salary}</span>
            </p>
            <p className="flex items-center text-gray-700 bg-gradient-to-r from-blue-50 to-blue-100 py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <Clock className="mr-3 text-blue-600" size={22} />
              <span className="font-semibold">{experience}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-8 flex justify-end overflow-visible">
        <a
          onClick={() => openContactForm()}
          className="bg-gradient-to-r from-brown to-dark-brown text-white py-3 px-10 rounded-full 
                   hover:from-maroon hover:to-maroon-text transition-all duration-300 
                   inline-flex items-center shadow-lg transform hover:-translate-y-1 hover:scale-105 hover:shadow-[2px_2px_0_gray]"
        >
          <Send className="mr-3" size={20} />
          <span className="font-semibold">Apply Now</span>
        </a>
      </div>

      {/* Subtle Background Overlay */}
      <div className="absolute m-2 -inset-0 border-dashed border-light-brown border-2 rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default JobCard;