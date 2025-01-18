import React from 'react'
import image1 from '../../assets/children.png';
import image2 from '../../assets/children2.png';

const cutouts = () => {
  return (
    <div className='flex justify-center items-baseline md:-mb-4 overflow-visible'>
        <img src={image2} alt="children" className="drop-shadow-[-4px_-4px_0_brown] hidden md:block" />
        <img src={image1} alt="children" className="drop-shadow-[0_2px_50px_beige]" />
        <img src={image2} alt="children" className="scale-x-[-1] drop-shadow-[-4px_-4px_0_brown] hidden md:block" />
    </div>
  )
}

export default cutouts;
