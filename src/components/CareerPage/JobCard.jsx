import React from 'react';
import { Briefcase, FileText, DollarSign, Clock, Send } from 'lucide-react';

const JobCard = ({ title, description, salary, experience, applyLink }) => {
  return (
    <div className="relative p-8 rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 w-full">
      {/* Icon Section */}
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 shadow-lg transform hover:scale-110 hover:rotate-1 transition-transform duration-300">
            <Briefcase className="text-white" size={28} />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow min-w-0">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-tight truncate hover:text-amber-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 mb-6 flex items-start">
            <FileText className="mr-3 mt-1 flex-shrink-0 text-amber-600" size={20} />
            <span className="leading-relaxed line-clamp-2 hover:line-clamp-none transition-all duration-300">
              {description}
            </span>
          </p>

          {/* Salary and Experience */}
          <div className="flex flex-wrap gap-4">
            <p className="flex items-center text-gray-700 bg-gradient-to-r from-green-50 to-green-100 py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
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
      <div className="mt-8 flex justify-end">
        <a
          href={applyLink}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-10 rounded-full 
                   hover:from-amber-600 hover:to-amber-700 transition-all duration-300 
                   inline-flex items-center shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
          <Send className="mr-3" size={20} />
          <span className="font-semibold">Apply Now</span>
        </a>
      </div>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-amber-100 opacity-30 pointer-events-none"></div>
    </div>
  );
};

export default JobCard;