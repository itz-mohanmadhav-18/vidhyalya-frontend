import React from "react";
import image from '../../assets/teacher1.jpg';

const FacultyCard = ({ image, name, designation, qualifications }) => {
  return (
    <div className="flex bg-white shadow-md rounded-2xl overflow-hidden mb-3 max-w-sm mx-auto p-4">
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="h-40 w-40 object-cover rounded-full"
        />
      </div>
      <div className="p-6 flex flex-col justify-center w-2/3">
        <h2 className="text-xl font-semibold text-light-black">{name}</h2>
        <p className="text-light-black mt-2">{designation}</p>
        <p className="text-gray mt-4">{qualifications}</p>
      </div>
    </div>
  );
};

const FacultySection = () => {
  const facultyData = [
    {
      image: image,
      name: "Dr. John Doe",
      designation: "Professor of Mathematics",
      qualifications: "Ph.D. in Applied Mathematics, M.Sc., B.Sc.",
    },
    {
      image: image,
      name: "Ms. Jane Smith",
      designation: "Assistant Professor of Physics",
      qualifications: "M.Sc. in Physics, B.Ed.",
    },
    {
      image: image,
      name: "Mr. William Brown",
      designation: "Lecturer in Computer Science",
      qualifications: "M.Tech in CS, B.Tech.",
    },
    {
      image: image,
      name: "Ms. Jane Smith",
      designation: "Assistant Professor of Physics",
      qualifications: "M.Sc. in Physics, B.Ed.",
    },
    {
      image: image,
      name: "Mr. William Brown",
      designation: "Lecturer in Computer Science",
      qualifications: "M.Tech in CS, B.Tech.",
    },
    {
      image: image,
      name: "Mr. William Brown",
      designation: "Lecturer in Computer Science",
      qualifications: "M.Tech in CS, B.Tech.",
    },
  ];

  return (
    <section className="px-4 mb-6">
      <div>
        <h1 className="headings mt-5 !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
          Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {facultyData.map((faculty) => (
            <FacultyCard
              key={faculty.name}
              image={faculty.image}
              name={faculty.name}
              designation={faculty.designation}
              qualifications={faculty.qualifications}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
