import React, { useState } from 'react';
import { Trophy, Rocket, Brain, Medal, ChevronRight, Menu, X, ChevronDown } from 'lucide-react';

const achievementsData = [
  {
    category: "Academic",
    icon: Brain,
    accentColor: "border-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    items: [
      {
        title: "National Science Olympiad",
        description: "First place in state-level competition",
        year: 2023,
        student: "Emily Johnson",
        highlight: "Gold Medal"
      },
      {
        title: "Perfect Board Score",
        description: "100% in all major subjects",
        year: 2023,
        student: "Emily Johnson",
        highlight: "Top 1%"
      },
    ],
  },
  {
    category: "Sports",
    icon: Medal,
    accentColor: "border-amber-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    items: [
      {
        title: "Basketball Champions",
        description: "State tournament victory",
        year: 2023,
        student: "John Doe",
        highlight: "MVP"
      },
      {
        title: "Swimming Finals",
        description: "National freestyle category",
        year: 2023,
        student: "Michael Chen",
        highlight: "Gold"
      },
    ],
  },
  {
    category: "Innovation",
    icon: Rocket,
    accentColor: "border-emerald-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    items: [
      {
        title: "Robotics Innovation",
        description: "Regional competition winner",
        year: 2023,
        highlight: "First Prize"
      },
      {
        title: "Debate Championship",
        description: "National tournament victory",
        year: 2023,
        highlight: "Champions"
      },
    ],
  },
];

const AchievementsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(achievementsData[0]);
  const [selectedAchievement, setSelectedAchievement] = useState(achievementsData[0].items[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
            Achievements
          </h1>
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar for categories */}
          <div className={`lg:w-72 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <nav className="space-y-2 sticky top-24">
              {achievementsData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedAchievement(category.items[0]);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full p-4 rounded-xl flex items-center justify-between group 
                    transition-all duration-200 ease-in-out
                    hover:shadow-md hover:scale-102
                    ${selectedCategory.category === category.category 
                      ? `${category.bgColor} shadow-sm` 
                      : 'bg-white hover:bg-zinc-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <category.icon className={`w-5 h-5 
                      ${selectedCategory.category === category.category ? category.textColor : 'text-zinc-400'}`} 
                    />
                    <span className={`font-medium
                      ${selectedCategory.category === category.category ? 'text-zinc-900' : 'text-zinc-600'}`}>
                      {category.category}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1
                    ${selectedCategory.category === category.category ? category.textColor : 'text-zinc-400'}`} 
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Main content area */}
          <div className="flex-1 min-w-0">
            <div className="lg:grid lg:grid-cols-2 gap-6">
              {/* Achievement Items */}
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
                  <selectedCategory.icon className={`w-5 h-5 ${selectedCategory.textColor}`} />
                  {selectedCategory.category} Achievements
                </h2>
                <div className="space-y-3">
                  {selectedCategory.items.map((achievement) => (
                    <button
                      key={achievement.title}
                      onClick={() => setSelectedAchievement(achievement)}
                      className={`w-full p-4 rounded-xl text-left border transition-all duration-200
                        hover:shadow-md hover:scale-102
                        ${selectedAchievement.title === achievement.title 
                          ? `${selectedCategory.accentColor} ${selectedCategory.bgColor} border-transparent` 
                          : 'border-zinc-100 hover:border-transparent'}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-zinc-900">
                          {achievement.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${selectedCategory.bgColor} 
                          ${selectedCategory.textColor}`}>
                          {achievement.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500">
                        {achievement.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Achievement Details */}
              <div className="bg-white rounded-xl shadow-sm p-6 mt-6 lg:mt-0">
                <div className="space-y-6">
                  {/* Title Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full
                        ${selectedCategory.bgColor} ${selectedCategory.textColor}`}>
                        {selectedAchievement.year}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-zinc-900 mb-3">
                      {selectedAchievement.title}
                    </h2>
                    <p className="text-zinc-600">
                      {selectedAchievement.description}
                    </p>
                  </div>

                  {/* Student Details */}
                  {selectedAchievement.student && (
                    <div className="bg-zinc-50 rounded-xl p-4">
                      <h3 className="text-sm font-medium text-zinc-900 mb-4">Achievement Holder</h3>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 
                          flex items-center justify-center text-zinc-700 font-medium shadow-sm">
                          {selectedAchievement.student.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-zinc-900">
                            {selectedAchievement.student}
                          </div>
                          <div className="text-sm text-zinc-500">
                            {selectedCategory.category} Achievement
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Additional Details */}
                  <div className="prose prose-zinc prose-sm max-w-none">
                    <p className="text-zinc-500">
                      This achievement demonstrates exceptional performance and dedication 
                      in {selectedCategory.category.toLowerCase()} activities, setting a benchmark 
                      for excellence in our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;