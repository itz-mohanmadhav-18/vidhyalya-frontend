import { useState } from 'react';
import image from '../../assets/teacher1.jpg';

const FacultyCard = ({ image, name, designation, qualifications }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={image}
          alt={`${name}'s profile`}
          className={`h-full w-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          } brightness-75 group-hover:brightness-90`}
        />
        <div className="absolute left-0 top-0 h-full right-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100" />
        
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}> 
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="font-medium mb-3">{designation}</p>
          <p className="text-sm">{qualifications}</p>
        </div>
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
    <section className="px-4 flex justify-center items-center flex-col gap-6 mb-9">
      <h1 className="headings mt-5 !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
          Our Team
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {facultyData.map((faculty, index) => (
          <FacultyCard
            key={index}
            image={faculty.image}
            name={faculty.name}
            designation={faculty.designation}
            qualifications={faculty.qualifications}
          />
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
