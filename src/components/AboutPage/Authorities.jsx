import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import teacher from '../../assets/teacher1.jpg';

const testimonials = [
  {
    quote: "The challenges presented by COVID-19 have caused us to reflect on who we are and what, through education, we are capable of doing. An education can unlock the prison of ignorance.",
    author: "Dr. Rajesh Kumar",
    designation: "School Director",
    photo: teacher,
  },
  {
    quote: "Our goal is to provide a safe space where each kid feels heard, appreciated, and cared for. Science labs, computer labs, and an audio-visual studio are just some of the cutting-edge amenities available to our students.",
    author: "Mrs. Anjali Sharma",
    designation: "Principal",
    photo: teacher,
  },
  {
    quote: "There is an effort to shape the public's personality and instil in them a passion for morals, as well as to instil in them a sense of kindness, teach them the value of cleanliness, instil in them an appreciation for good manners.",
    author: "Mr. Vikram Mehta",
    designation: "Co-Founder",
    photo: teacher,
  },
  {
    quote: "Like a seed, a child has the ability to flourish given the correct amount of love, care, and direction.",
    author: "Ms. Priya Patel",
    designation: "Founder",
    photo: teacher,
  },
  {
    quote: "I encourage the principal, faculty, and respected parents to devote this year to getting a better grasp on the true meaning of education and reap the rewards of that clarity.",
    author: "Mr. Arun Gupta",
    designation: "Board Member",
    photo: teacher,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div>
            <div key={index} className="flex flex-col md:flex-row items-center bg-light-white rounded-lg shadow-lg p-6">
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <img
                src={testimonial.photo}
                alt={testimonial.author}
                className="w-32 h-32 md:w-48 md:h-48 object-cover"
              />
            </div>
            {/* Right: Content */}
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h3 className="text-indigo-600 font-bold text-xl mt-4">{testimonial.author}</h3>
              <p className="text-gray font-medium">{testimonial.designation}</p>
              <p className="text-gray text-lg italic">"{testimonial.quote}"</p>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
