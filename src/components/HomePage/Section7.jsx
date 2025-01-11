import React, { useState, useEffect } from "react";

const Icons = {
  Academic: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7" strokeWidth="2">
      <path d="M12 2L2 8l10 6 10-6-10-6zM2 16l10 6 10-6M2 12l10 6 10-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Sports: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7" strokeWidth="2">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6v12M8 8l8 8M16 8l-8 8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Extracurricular: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Trophy: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5" strokeWidth="2">
      <path d="M8 21h8m-4-4v4M12 3c7.2 0 9 1.8 9 9H3c0-7.2 1.8-9 9-9z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const achievementsData = [
  {
    category: "Academic",
    icon: Icons.Academic,
    color: "bg-gradient-to-br from-beige via-yellow-800/70 to-yellow-900",
    bgColor: "hover:bg-yellow-900/10",
    items: [
      {
        title: "National Science Olympiad Winner",
        description: "Achieved first place in a state-level science competition.",
        year: 2023,
        student: "Emily Johnson",
        icon: Icons.Trophy,
      },
      {
        title: "100% Board Exam Pass Rate",
        description: "Outstanding academic performance across all grades.",
        year: 2023,
        student: "Emily Johnson",
        icon: Icons.Star,
      },
    ],
  },
  {
    category: "Sports",
    icon: Icons.Sports,
    color: "bg-gradient-to-br from-pink-900/75 via-pink-800/70 to-pink-950/90",
    bgColor: "hover:bg-pink-900/10",
    items: [
      {
        title: "State Basketball Championship",
        description: "Winning team in inter-school basketball tournament.",
        year: 2023,
        student: "John Doe",
        icon: Icons.Trophy
      },
      {
        title: "National Swimming Competition",
        description: "Gold medal in the freestyle category.",
        student: "Michael Chen",
        year: 2023,
        icon: Icons.Star
      },
    ],
  },
  {
    category: "Extracurricular",
    icon: Icons.Extracurricular,
    color: "bg-gradient-to-br from-red-900/75 via-red-800/70 to-red-950/90",
    bgColor: "hover:bg-red-900/20",
    items: [
      {
        title: "Robotics Club Innovation Award",
        description: "Best project in a regional robotics competition.",
        year: 2023,
        icon: Icons.Trophy
      },
      {
        title: "Debate Team National Champions",
        description: "First place in a national debate tournament.",
        year: 2023,
        icon: Icons.Star
      },
    ],
  },
];

const AchievementsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Academic");
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const activeData = achievementsData.find((cat) => cat.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-12 md:mb-20 flex flex-col items-center justify-center">
          <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl w-fit bg-gradient-to-r from-maroon-text to-maroon-text mb-4">
            Achievements
          </h1>
          <p className="text-base md:text-md text-gray max-w-2xl text-center px-4">
            Celebrating excellence and extraordinary accomplishments 
            across academics, sports, and extracurricular activities.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Navigation */}
          <div className="flex md:flex-col gap-4 md:gap-6 md:w-64 overflow-x-auto md:overflow-visible 
            px-4 md:px-0 -mx-4 md:mx-0 pb-4 md:pb-0">
            {achievementsData.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`group relative px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all duration-300 
                    flex-shrink-0 md:flex-shrink min-w-[140px] md:min-w-0 md:w-full
                    ${activeCategory === category.category 
                      ? `bg-gradient-to-r ${category.color} shadow-lg`
                      : `bg-white shadow-md hover:shadow-lg ${category.bgColor}`
                    }`}
                >
                  <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                    <span className={`transition-colors duration-300 
                      ${activeCategory === category.category ? "text-white" : "text-slate-600"}`}
                    >
                      <Icon />
                    </span>
                    <span className={`font-semibold transition-colors duration-300 whitespace-nowrap text-sm md:text-base
                      ${activeCategory === category.category ? "text-white" : "text-slate-700"}`}
                    >
                      {category.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Achievement Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 md:gap-6">
              {activeData?.items.map((achievement, index) => {
                const AchievementIcon = achievement.icon;
                return (
                  <div
                    key={achievement.title}
                    className={`transform transition-all duration-700
                      ${animateCards ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="group relative bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300">
                      {/* Top Gradient Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-xl bg-gradient-to-r ${activeData.color}`} />
                      
                      {/* Year Badge */}
                      <div className="absolute -top-4 md:-top-6 right-4 md:right-6">
                        <span className={`inline-flex items-center justify-center px-3 md:px-4 py-1 md:py-1.5 
                          bg-gradient-to-r ${activeData.color} text-white text-xs md:text-sm font-semibold 
                          rounded-full shadow-lg min-w-[70px] md:min-w-[80px]`}>
                          {achievement.year}
                        </span>
                      </div>

                      <div>
                        {/* Icon and Title Container */}
                        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                          <span className={`inline-flex items-center justify-center p-2 md:p-3 
                            rounded-xl bg-gradient-to-r ${activeData.color} text-white shadow-md
                            group-hover:shadow-lg transition-shadow`}>
                            <AchievementIcon />
                          </span>
                          <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 
                              group-hover:text-slate-600 transition-colors">
                              {achievement.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed ml-12 md:ml-16 text-sm md:text-base">
                          {achievement.description}
                        </p>

                        {/* Student Info */}
                        {achievement.student && (
                          <div className="mt-4 md:mt-6 pt-2 border-t border-slate-100 ml-12 md:ml-16">
                            <div className="flex items-center gap-1">
                              <span className="text-xs md:text-sm font-medium text-slate-500">Achieved by:</span>
                              <span className="text-xs md:text-sm text-slate-700 font-semibold">
                                {achievement.student}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${activeData.color} 
                        opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-0 w-60 md:w-80 h-60 md:h-80 
          bg-blue-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
        <div className="absolute top-40 right-0 w-60 md:w-80 h-60 md:h-80 
          bg-purple-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
        <div className="absolute -bottom-8 left-20 w-60 md:w-80 h-60 md:h-80 
          bg-pink-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
      </div>
    </div>
  );
};

export default AchievementsSection;