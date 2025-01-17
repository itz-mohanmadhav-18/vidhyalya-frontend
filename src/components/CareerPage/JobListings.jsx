import React from 'react';
import JobCard from './JobCard';

const JobListings = () => {
  const jobs = [
    {
      title: "Software Developer",
      description: "Develop and maintain web applications using modern technologies.",
      salary: "$80,000 - $120,000 per year",
      experience: "3-5 years of experience",
      applyLink: "https://example.com/apply1"
    },
    {
      title: "UX Designer",
      description: "Create intuitive and visually appealing user interfaces for web and mobile applications.",
      salary: "$70,000 - $100,000 per year",
      experience: "2-4 years of experience",
      applyLink: "https://example.com/apply2"
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data sets to derive insights and drive business decisions.",
      salary: "$90,000 - $130,000 per year",
      experience: "4-6 years of experience",
      applyLink: "https://example.com/apply3"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">Job Listings</h1>
        <div className="flex flex-col gap-6 items-center">
          {jobs.map((job, index) => (
            <div key={index} className="w-full lg:w-[70%]">
              <JobCard {...job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;