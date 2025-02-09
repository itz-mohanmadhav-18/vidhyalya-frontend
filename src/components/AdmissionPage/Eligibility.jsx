import React from 'react';
import { Backpack, GraduationCap, Book, Atom } from 'lucide-react';

const Eligibility = () => {
  const classes = [
    {
      name: 'Nursey',
      age: '2yrs.6months',
      icon: Backpack,
    },
    {
      name: 'LKG',
      age: '3yrs.6months',
      icon: Book,
    },
    {
      name: 'UKG',
      age: '4yrs.6months',
      icon: GraduationCap,
    },
    {
      name: 'CLASS I',
      age: '5yrs.6months+',
      icon: Atom,
    }
  ];

  return (
    <div className="p-8">
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
        Eligibility
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
        {classes.map((classItem) => {
          const Icon = classItem.icon;
          
          return (
            <div 
              key={classItem.name}
              className="bg-beige border-4 border-dashed border-white mt-6 rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between md:flex-col items-center text-center space-y-4 text-maroon-text">
                <div className="h-16 flex items-center">
                  <Icon size={40} className="" />
                </div>
                <div>
                  <h3 className="ttext-base md:text-xl font-bold mb-2">
                    {classItem.name}
                  </h3>
                  <p className="text-sm md:text-lg font-semibold">
                    {classItem.age}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eligibility;