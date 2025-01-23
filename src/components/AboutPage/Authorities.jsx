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
    <div className="h-screen px-4 py-5 md:py-16 bg-dark-brown">
        <h1 className="headings !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit bg-gradient-to-r from-[#fff] to-[#fff]">
        Guiding Lights
        </h1>
      <Slider {...settings} className='overflow-visible px-10 my-10'>
        {testimonials.map((testimonial, index) => (
          <div>
            <div key={index} className="h-full flex flex-col md:flex-row items-center rounded-lg p-6">
            {/* Left: Image */}
            <div className="flex-shrink-0 overflow-visible">
              <img
                src={testimonial.photo}
                alt={testimonial.author}
                className="w-32 h-32 md:w-full md:h-full object-cover rounded-2xl shadow-[5px_5px_0_beige]"
              />
            </div>
            {/* Right: Content */}
            <div className="mt-4 md:mt-0 md:ml-10 text-center md:text-left h-5/6 flex flex-col justify-between drop-shadow-[0_0_30px_beige]">
              <h3 className="text-peach font-bold font-times text-4xl m-0">{testimonial.author}</h3>
              <p className="text-beige text-lg italic my-10">"{testimonial.quote}"</p>
              <p className="text-beige font-medium text-base align-baseline">{testimonial.designation}</p>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
