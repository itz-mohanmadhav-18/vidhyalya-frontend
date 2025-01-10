import React from 'react';

// Custom SVG icons as components
const Icons = {
  Admission: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  Profile: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Fee: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  ),
  Complaint: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  Timetable: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Career: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
};

const ActionCard = ({ icon: Icon, title, description, onClick, colorClass }) => (
  <div 
    onClick={onClick}
    className="group relative flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
  >
    {/* Background gradient overlay */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${colorClass}`} />
    
    {/* Icon container with gradient background */}
    <div className={`p-4 rounded-full mb-6 ${colorClass} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
      <div className={`${colorClass.replace('bg-', 'text-')}`}>
        <Icon />
      </div>
    </div>
    
    {/* Content */}
    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 text-center text-sm leading-relaxed">
      {description}
    </p>
    
    {/* Subtle arrow indicator */}
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

export default function EaseOfAccessSection() {
  const handleAction = (action) => {
    // Handle different actions here
    console.log(`${action} clicked`);
  };

  const actions = [
    {
      icon: Icons.Admission,
      title: "Apply for Admission",
      description: "Begin your educational journey with our streamlined online admission process",
      onClick: () => handleAction("admission"),
      colorClass: "bg-blue-500"
    },
    {
      icon: Icons.Profile,
      title: "Student Profile",
      description: "Access and manage your academic profile, achievements, and personal information",
      onClick: () => handleAction("profile"),
      colorClass: "bg-purple-500"
    },
    {
      icon: Icons.Fee,
      title: "Fee Management",
      description: "View fee structure, make payments, and download payment receipts easily",
      onClick: () => handleAction("fee"),
      colorClass: "bg-green-500"
    },
    {
      icon: Icons.Complaint,
      title: "Support & Feedback",
      description: "Share your concerns or suggestions to help us serve you better",
      onClick: () => handleAction("complaint"),
      colorClass: "bg-red-500"
    },
    {
      icon: Icons.Timetable,
      title: "Class Schedule",
      description: "Stay updated with your class timings, events, and academic calendar",
      onClick: () => handleAction("timetable"),
      colorClass: "bg-yellow-500"
    },
    {
      icon: Icons.Career,
      title: "Careers",
      description: "Explore teaching and staff positions. Join our team of dedicated educators and professionals",
      onClick: () => handleAction("careers"),
      colorClass: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <ActionCard key={index} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
}