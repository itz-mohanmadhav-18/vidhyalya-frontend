import React, { useState } from "react";
import JobCard from "./JobCard";
// import React from "react";
import TeacherApplicationForm from "./TeacherApplicationForm";

const Searchbar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for a job title..."
      className="bg-peach h-12 w-1/2 px-5 pr-10 rounded-full text-md focus:outline-none shadow-[4px_6px_0_maroon]"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

const JobListings = ({id}) => {
const [searchQuery, setSearchQuery] = useState("");

const [isContactFormOpen, setContactFormOpen] = useState(false);

const openContactForm = () => {
  setContactFormOpen(true);
};

const closeContactForm = () => {
  setContactFormOpen(false);
};

  const jobs = [
    {
      title: "Software Developer",
      description: "Develop and maintain web applications using modern technologies.",
      salary: "$80,000 - $120,000 per year",
      experience: "3-5 years of experience"
    },
    {
      title: "UX Designer",
      description: "Create intuitive and visually appealing user interfaces for web and mobile applications.",
      salary: "$70,000 - $100,000 per year",
      experience: "2-4 years of experience"
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data sets to derive insights and drive business decisions.",
      salary: "$90,000 - $130,000 per year",
      experience: "4-6 years of experience"
    },
  ];

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
    <div id={`${id}`} className="bg-light-brown shadow-[0_0_30px_rgba(0,0,0,0.3)] py-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="headings mt-6 !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
          Job Openings
        </h1>

        {/* Searchbar */}
        <div className="flex justify-center my-10 overflow-visible">
          <Searchbar onSearch={setSearchQuery} />
        </div>

        {/* Job Cards */}
        <div className="flex flex-col gap-4 overflow-visible my-20 items-center">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="w-full lg:w-[70%] overflow-visible">
                <JobCard {...job} openContactForm={openContactForm} />
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg">No jobs match your search.</p>
          )}
        </div>
      </div>
    </div>
    < TeacherApplicationForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default JobListings;
