import React, { useEffect, useRef, useState } from "react";
import schoolImage from '../../assets/school.jpg';
import director from '../../assets/director.png';

const Section4 = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`p-3 -z-20 relative h-screen bg-center flex items-center justify-evenly text-white ${
        isVisible ? "animate-visible" : ""
      }`}
      style={{
        backgroundImage: `url(${schoolImage})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-maroon opacity-50"></div>
      <div className="relative text-left px-8 py-8 w-96 max-w-3xl leading-tight h-fit backdrop-blur-md">
        <h4
          className={`text-beige relative text-lg -mb-2 font-extrabold ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          Welcome Message from Principal
        </h4>
        <h1
          className={`text-6xl font-black mb-6 leading-tight ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          We Innovate, We Execute
        </h1>
        <p
          className={`text-lg leading-relaxed text-justify font-serif italic ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          We bring deep, functional expertise, but are known for our holistic
          perspective: we capture value across boundaries and between the silos
          of any organization.
        </p>
        <p
          className={`mt-6 font-extrabold text-xl text-beige ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          ~ Dr. John Doe
        </p>
      </div>
      <div className="relative">
        <img src={director} className="drop-shadow-[0_0_3px_beige] rounded-full scale-[0.7] floating-animation" alt="" />
        <div style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", }}
          className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-maroon via-brown to-beige animated-gradient">
        </div>
      </div>

      <style>
        {`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s ease-out forwards;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-visible {
            opacity: 1;
          }
          @keyframes border-radius-change {
            0% {
              border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              background: linear-gradient(90deg, #d8a48f, #d8a48f, #885053, #16001e);
            }
            50% {
              border-radius: 67% 33% 74% 26% / 30% 62% 38% 70% ;
              background: linear-gradient(90deg, #d8a48f, #d8a48f, #885053, #16001e);
            }
            100% {
              border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              background: linear-gradient(90deg, #d8a48f, #d8a48f, #885053, #16001e);
            }
          }
          .animated-gradient {
            animation: border-radius-change 3s ease-in-out infinite;
          }
            @keyframes float {
            0% {
              transform: scale(0.7) translateY(0);
            }
            50% {
              transform: scale(0.7) translateY(-10px); /* Move up */
            }
            100% {
              transform: scale(0.7) translateY(0);
            }
          }
          .floating-animation {
            animation: float 4s ease-in-out infinite; /* Adjust duration as needed */
          }
        `}
      </style>
    </section>
  );
};

export default Section4;
