import React from 'react';
import backImage from '../../assets/career-back.png'

const HeroElement = () => {
  return (
    <div className='absolute left-0 top-0 -z-10 overflow-visible'>
      <div
       className="w-screen h-[80vh] text-center bg-maroon shadow-[0_5px_6px_gray] text-beige flex items-center justify-around">
        <div>
          <div className="text-7xl font-black leading-tight"
            style={{ filter: 'drop-shadow(-2.8px 2.8px 0px rgba(22,0,10,1)) drop-shadow(-2.5px 2.5px 0px rgba(255,255,255,0.8))' }}
          >
            Work With Us
          </div>
          <div className="text-2xl my-3 text-brown"
            style={{ filter: 'drop-shadow(-1px 1px 0px rgba(255,255,255,0.75))' }}
          >
          Where passion meets purpose!
          </div>
        </div>
        <div className="flex justify-center items-center overflow-visible">
          <img src={backImage} alt="background" className="w-2/3 drop-shadow-[0_0_100px_beige]" />
        </div>
        <div className="absolute top-[70vh] rounded-md overflow-visible shadow-[5px_10px_8px_gray]">
          <div className="p-6 flex justify-center items-center flex-col bg-beige shadow-[6px_6px_0_maroon] rounded-md">
            <div className="text-dark-brown font-extrabold m-3 leading-tight text-4xl">Explore Roles At Vidyalaya</div>
            <button
            className="bg-maroon-text w-full text-2xl font-bold tracking-[2rem] text-light-white p-2 mt-6 rounded-lg cursor-pointer hover:bg-brown hover:text-beige"
            >
            Get Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroElement