import React from 'react';
import { Camera, Briefcase, FileText, DollarSign, Clock, Send } from 'lucide-react';
import { div } from 'framer-motion/client';

const JobCard = ({ title, description, salary, experience, applyLink }) => {
  return (
    <div className='shadow-[0_0_4px_maroon]'>
        <div className=" rounded-xl overflow-visible p-6 w-full">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <div className="bg-amber-600 rounded-xl p-4 shadow-lg">
            <Briefcase className="text-white" size={24} />
          </div>
        </div>
        <div className="flex-grow min-w-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 tracking-tight truncate">{title}</h2>
          <p className="text-gray-600 mb-5 flex items-start group">
            <FileText className="mr-3 mt-1 flex-shrink-0 text-amber-600" size={20} />
            <span className="leading-relaxed line-clamp-2">{description}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <p className="flex items-center text-gray-700 bg-green-50 py-2 px-4 rounded-lg">
              <DollarSign className="mr-3 text-green-600" size={20} />
              <span className="font-medium">{salary}</span>
            </p>
            <p className="flex items-center text-gray-700 bg-blue-50 py-2 px-4 rounded-lg">
              <Clock className="mr-3 text-blue-600" size={20} />
              <span className="font-medium">{experience}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <a
          href={applyLink}
          className="bg-amber-600 text-white py-2.5 px-6 rounded-lg 
                   hover:bg-amber-700 transition duration-300 inline-flex items-center
                   shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Send className="mr-2" size={20} />
          <span className="font-medium">Apply Now</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default JobCard;