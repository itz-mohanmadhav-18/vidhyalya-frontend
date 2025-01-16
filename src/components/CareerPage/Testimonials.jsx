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
    <div className="w-screen h-[70vh] text-beige flex flex-col justify-center items-center">
      <Slider {...settings} className="w-1/2 bg-maroon-text p-3 rounded-lg text-center overflow-visible">
        {testimonials.map((t, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
            <img 
              src={t.photo} 
              alt={`Photo of ${t.author}`} 
              className="w-24 max-h-24 rounded-full mb-4 object-cover shadow-md"
            />
            <p className="text-2xl italic text-gray-700">"{t.quote}"</p>
            <p className="mt-3 text-lg font-semibold text-gray-900">- {t.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
