import React from "react";

// Custom SVG icons as components
const Icons = {
  Admission: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 sm:w-7 sm:h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  Profile: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 sm:w-7 sm:h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Fee: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 sm:w-7 sm:h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  ),
  Complaint: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 sm:w-7 sm:h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  Timetable: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 sm:w-7 sm:h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Career: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 sm:w-7 sm:h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
};

// ActionCard Component
const ActionCard = ({ icon: Icon, title, onClick, colorClass }) => (
  <div
    onClick={onClick}
    className={`group flex flex-col items-center p-4 rounded-xl shadow-sm transition-all duration-300 cursor-pointer my-2 sm:my-5 ${colorClass} bg-opacity-10 hover:${colorClass} hover:bg-opacity-20`}
  >
    {/* Icon container */}
    <div className={`p-4 rounded-full mb-3 bg-white`}>
      <div className={`${colorClass.replace("bg-", "text-")}`}>
        <Icon />
      </div>
    </div>

    {/* Heading */}
    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 text-center">
      {title}
    </h3>
  </div>
);

// EaseOfAccessSection Component
export default function EaseOfAccessSection() {
  const handleAction = (action) => {
    console.log(`${action} clicked`);
  };

  const actions = [
    {
      icon: Icons.Admission,
      title: "Apply for Admission",
      onClick: () => handleAction("admission"),
      colorClass: "bg-blue-500",
    },
    {
      icon: Icons.Profile,
      title: "Student Profile",
      onClick: () => handleAction("profile"),
      colorClass: "bg-purple-500",
    },
    {
      icon: Icons.Fee,
      title: "Fee Management",
      onClick: () => handleAction("fee"),
      colorClass: "bg-green-500",
    },
    {
      icon: Icons.Complaint,
      title: "Support & Feedback",
      onClick: () => handleAction("complaint"),
      colorClass: "bg-red-500",
    },
    {
      icon: Icons.Timetable,
      title: "Class Schedule",
      onClick: () => handleAction("timetable"),
      colorClass: "bg-yellow-500",
    },
    {
      icon: Icons.Career,
      title: "Careers",
      onClick: () => handleAction("careers"),
      colorClass: "bg-indigo-500",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 -mt-20 md:-mt-0">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center my-10 px-6">
        <h1 className="headings bg-gradient-to-r from-maroon-text to-maroon-text !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl">
          Quick Actions
        </h1>
      </div>

      {/* Action Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <ActionCard key={index} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
}