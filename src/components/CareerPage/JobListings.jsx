import React, { useState } from "react";
import JobCard from "./JobCard";

const Searchbar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for a job title..."
      className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none shadow-md"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

const JobListings = () => {
const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      title: "Software Developer",
      description: "Develop and maintain web applications using modern technologies.",
      salary: "$80,000 - $120,000 per year",
      experience: "3-5 years of experience",
      applyLink: "https://example.com/apply1",
    },
    {
      title: "UX Designer",
      description: "Create intuitive and visually appealing user interfaces for web and mobile applications.",
      salary: "$70,000 - $100,000 per year",
      experience: "2-4 years of experience",
      applyLink: "https://example.com/apply2",
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data sets to derive insights and drive business decisions.",
      salary: "$90,000 - $130,000 per year",
      experience: "4-6 years of experience",
      applyLink: "https://example.com/apply3",
    },
  ];

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-maroon-text to-maroon-text">
          Job Openings
        </h1>

        {/* Searchbar */}
        <div className="flex justify-center mb-8">
          <Searchbar onSearch={setSearchQuery} />
        </div>

        {/* Job Cards */}
        <div className="flex flex-col gap-6 items-center">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="w-full lg:w-[70%]">
                <JobCard {...job} />
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg">No jobs match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
