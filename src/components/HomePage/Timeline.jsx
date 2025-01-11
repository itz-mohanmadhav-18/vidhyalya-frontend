import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faGraduationCap,
  faTrophy,
  faFlask,
  faChartBar,
  faTree,
  faPalette,
  faMicrophone,
  faTheaterMasks,
  faUsers,
  faBook,
  faSnowflake,
  faAward,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import useScrollAnimation from "./animation.jsx";

const events = [
    {
      date: "2024-03-01",
      time: "9:00 AM",
      title: "Admissions Open",
      description: "Start of admissions for the new academic year 2024-25.",
      icon: faCalendarDay,
    },
    {
      date: "2024-04-15",
      time: "10:00 AM",
      title: "Orientation Day",
      description: "Introduction program for new students and parents.",
      icon: faGraduationCap,
    },
    {
      date: "2024-06-05",
      time: "8:00 AM",
      title: "Annual Sports Day",
      description: "A day of competitions and activities for all grades.",
      icon: faTrophy,
    },
    {
      date: "2024-08-20",
      time: "1:00 PM",
      title: "Science Exhibition",
      description: "Showcase of students' innovative science projects.",
      icon: faFlask,
    },
    {
      date: "2024-10-10",
      time: "11:00 AM",
      title: "Mid-Term Results",
      description: "Release of mid-term examination results.",
      icon: faChartBar,
    },
    {
      date: "2024-12-25",
      time: "6:00 PM",
      title: "Christmas Carnival",
      description: "Fun, games, and performances by students and staff.",
      icon: faTree,
    },
    {
      date: "2024-01-15",
      time: "2:00 PM",
      title: "Art Festival",
      description: "Exhibition of students' artwork and creative designs.",
      icon: faPalette,
    },
    {
      date: "2024-02-28",
      time: "3:00 PM",
      title: "Debate Competition",
      description: "Interschool debate competition on current topics.",
      icon: faMicrophone,
    },
    {
      date: "2024-05-12",
      time: "7:00 PM",
      title: "Cultural Night",
      description: "An evening of cultural performances and activities.",
      icon: faTheaterMasks,
    },
    {
      date: "2024-07-10",
      time: "9:00 AM",
      title: "Parent-Teacher Meeting",
      description: "Discussion on students' progress and plans.",
      icon: faUsers,
    },
    {
      date: "2024-09-15",
      time: "4:00 PM",
      title: "Literature Week",
      description: "A week of literary activities and book discussions.",
      icon: faBook,
    },
    {
      date: "2024-11-25",
      time: "12:00 PM",
      title: "Winter Carnival",
      description: "Games, rides, and winter delicacies for all.",
      icon: faSnowflake,
    },
    {
      date: "2024-12-01",
      time: "10:00 AM",
      title: "Annual Day",
      description: "Celebration of achievements and performances.",
      icon: faAward,
    },
    {
      date: "2024-12-31",
      time: "11:59 PM",
      title: "New Year Bash",
      description: "Countdown to the new year with music and fireworks.",
      icon: faClock,
    },
  ];  

const sortEvents = (events) => {
    useScrollAnimation();
  const currentDate = new Date();
  return events.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - currentDate - (dateB - currentDate);
  });
};

export default function SchoolTimeline() {
  const sortedEvents = sortEvents(events);
  const timelineRef = useRef(null);
  const [timelineWidth, setTimelineWidth] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      setTimelineWidth(timelineRef.current.scrollWidth);
    }
  }, [sortedEvents]);

  const animationDuration = Math.max(timelineWidth / 100, 10);

  const handleScroll = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = 300;
      timelineRef.current.scrollLeft += direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="py-10 pb-20">
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
        Events
      </h1>
      <div>
        <div className="animate-on-scroll relative sm:mt-8 overflow-x-auto scrollbar-hide">
          <div
            ref={timelineRef}
            style={{
              animationDuration: `${animationDuration}s`,
            }}
            className="relative flex animate-timeline transition-transform ease items-center w-max mx-auto h-[70vh] before:w-full before:h-2 before:border-b-2 before:absolute before:top-10 before:left-0 before:border-dashed before:border-light-brown after:w-full after:h-2 after:absolute after:bottom-10 after:left-0 after:border-t-2 after:border-dashed after:border-light-brown after:-z-50 before:shadow-[0_-3px_4px_gray] after:shadow-[0_3px_4px_gray]">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-beige"></div>
            {sortedEvents.map((event, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center relative px-6 w-[250px] md:w-[435px] overflow-visible cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-[0_0_5px_gray] ${
                    index % 2 === 0
                      ? "translate-y-[30px]"
                      : "-translate-y-[30px]"
                  }`}
                >
                  {/* Circle marker */}
                  <div
                    className={`absolute left-[100px] md:left-[180px] bg-white border-4 border-beige text-brown text-lg md:text-2xl p-2 md:p-5 rounded-full ${
                      index % 2 === 0 ? "top-8 md:top-0" : "bottom-8 md:bottom-0"
                    }`}
                  >
                    <FontAwesomeIcon icon={event.icon} />
                  </div>

                  {/* Event card */}
                  <div
                    className={`relative flex items-center justify-center flex-col bg-dark-brown text-beige text-sm rounded-md px-4 py-6 overflow-visible ${
                      index % 2 === 0
                        ? "top-24 shadow-[5px_5px_0_gray]"
                        : "bottom-24 shadow-[-5px_-5px_0_gray]"
                    }`}
                  >
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 ${
                        index % 2 === 0
                          ? "-top-2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-maroon"
                          : "-bottom-2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-maroon"
                      }`}
                    ></div>
                    <div className="font-bold">{event.date}</div>
                    <div className="italic">{event.time}</div>
                    <div className="mt-1 text-base md:text-xl text-white">{event.title}</div>
                    <div className="text-light-brown text-xs mt-2 text-center italic">
                      {event.description}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex flex-col items-center justify-center relative px-6 w-[250px] md:w-[435px] overflow-visible">
              <div
                className="relative flex items-center justify-center flex-col bg-dark-brown text-beige text-sm rounded-md px-4 py-6 overflow-visible shadow-[5px_5px_0_gray]"
              >
                  <div className="text-lg md:text-2xl font-bold text-white">
                    End of Timeline
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .animate-timeline{
      animation: animatetimeline linear infinite;
      }
      @keyframes animatetimeline {
        0% { transform: translateX(0); }
        95% { transform: translateX(-100%); }
        100% { transform: translateX(0); }
      }
      .animate-timeline:hover {
        animation-play-state: paused;
      }
      `}
      </style>
    </div>
  );
}
