import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faProjectDiagram,
  faChalkboardTeacher,
  faPeopleCarry,
  faSmile,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

const InfrastructureMetrics = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setStartAnimation(true);
      }, 300);
    }
  }, [inView]);

  const metrics = [
    { id: 1, target: 232, description: 'Happy Parents praising growth and problem-solving skills.', icon: faUsers },
    { id: 2, target: 521, description: 'Hands-on projects fostering creative thinking.', icon: faProjectDiagram },
    { id: 3, target: 1463, description: 'Teachers offering full support and guidance.', icon: faChalkboardTeacher },
    { id: 4, target: 15, description: 'Dedicated teamwork with excellent collaboration.', icon: faPeopleCarry },
    { id: 5, target: 890, description: 'High student satisfaction with quality education.', icon: faSmile },
    { id: 6, target: 42, description: 'Awards recognizing academic excellence.', icon: faTrophy },
  ];

  return (
    <div ref={ref} className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto overflow-visible">
        <h1 className="headings mt-5 !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
          Infrastructure
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="border-2 border-dashed border-red-200 rounded-lg p-8 bg-white hover:bg-red-50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex items-center justify-between gap-6">
                <div className="text-light-brown mb-4 text-2xl">
                  <FontAwesomeIcon icon={metric.icon} />
                </div>
                <div className="text-4xl font-bold text-maroon-text mb-4 leading-tight">+
                  {startAnimation && (
                    <CountUp
                      start={0}
                      end={metric.target}
                      duration={2.5}
                      separator=","
                    />
                  )}
                </div>
                </div>
                <p className="text-gray text-center text-lg leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfrastructureMetrics;
