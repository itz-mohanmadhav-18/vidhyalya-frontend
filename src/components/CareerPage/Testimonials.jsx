import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import teacher1 from '../../assets/teacher1.jpg';
import teacher2 from '../../assets/teacher2.jpg';
import teacher3 from '../../assets/teacher3.jpg';
import teacher4 from '../../assets/teacher4.jpg';
import teacher5 from '../../assets/teacher5.jpg';


const testimonials = [
  { 
    quote: "Working here has been an incredibly fulfilling experience. The support from management and fellow teachers is unparalleled.", 
    author: "Rajni Shrivastava", 
    photo: `${teacher1}` 
  },
  { 
    quote: "The school's emphasis on holistic development and innovative teaching methods makes it a joy to work here.", 
    author: "Anjali Verma", 
    photo: `${teacher2}` 
  },
  { 
    quote: "It's inspiring to be part of a team that genuinely cares about the students' overall growth and success.", 
    author: "Neeraj Gupta", 
    photo: `${teacher3}` 
  },
  { 
    quote: "The resources and training provided here empower us to continuously improve our teaching and inspire our students.", 
    author: "Sangeeta Mishra", 
    photo: `${teacher4}` 
  },
  { 
    quote: "This school fosters a collaborative environment, where both teachers and students are encouraged to thrive.", 
    author: "Priya Pandey", 
    photo: `${teacher5}` 
  },
];

const Testimonials = () => {
  const settings = { dots: true, infinite: true, autoplay: true, speed: 500 };

  return (
    <div className="w-screen h-[70vh] text-beige mb-14 my-10 md:!my-32 flex flex-col justify-center items-center overflow-visible">
      <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-maroon-text to-maroon-text">
        Testimonials
      </h1>
      <Slider {...settings} className="w-2/3 p-3 md:my-6 rounded-lg text-center overflow-visible">
        {testimonials.map((t, index) => (
          <div key={index} className="p-4 bg-white shadow-sm rounded-lg flex flex-col justify-center items-center">
            <div className="relative flex items-center w-full justify-center">
              {/* Fading Line Before */}
              <span className="absolute w-1/4 h-0.5 bg-gradient-to-l from-brown to-transparent left-0"></span>
              {/* Image */}
              <img 
                src={t.photo} 
                alt={`Photo of ${t.author}`} 
                className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-4 object-cover shadow-md z-10"
              />
              {/* Fading Line After */}
              <span className="absolute w-1/4 h-0.5 bg-gradient-to-l from-transparent to-brown right-0"></span>
            </div>
            <div>
              <p className="md:text-2xl italic mt-4">"{t.quote}"</p>
              <p className="mt-3 text-md font-semibold text-gray-600">- {t.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
