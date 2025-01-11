import React from 'react'
import pic1 from '../../assets/pic1.jpeg';
import pic2 from '../../assets/pic2.jpeg';
import pic3 from '../../assets/pic3.jpeg';
import pic4 from '../../assets/pic4.jpeg';
import pic5 from '../../assets/pic5.jpeg';
import pic6 from '../../assets/pic6.jpeg';
import pic7 from '../../assets/pic7.jpeg';
import pic8 from '../../assets/pic8.jpeg';
import pic9 from '../../assets/pic9.jpeg';

const Section5 = () => {
  return (
    <div className="bg-beige py-10"> 
        <h1 className="headings justify-self-center w-fit bg-gradient-to-r from-[#fff] to-[#fff]">
          Gallery
        </h1>
        <div className="flex justify-center items-center gap-8 flex-wrap m-3 ">
            <div className="gallery">
                <img src={pic1} alt="a forest after an apocalypse" />
                <img src={pic2} alt="a waterfall and many rocks" />
                <img src={pic3} alt="a house on a mountain" />
                <img src={pic4} alt="sime pink flowers" />
                <img src={pic5} alt="big rocks with some trees" />
                <img src={pic6} alt="a waterfall, a lot of tree and a great view from the sky" />
                <img src={pic7} alt="a cool landscape" />
                <img src={pic8} alt="inside a town between two big buildings" />
                <img src={pic9} alt="a great view of the sea above the mountain" />
            </div>
            <div className="gallery !hidden md:!grid ">
                <img src={pic1} alt="a forest after an apocalypse" />
                <img src={pic2} alt="a waterfall and many rocks" />
                <img src={pic3} alt="a house on a mountain" />
                <img src={pic4} alt="sime pink flowers" />
                <img src={pic5} alt="big rocks with some trees" />
                <img src={pic6} alt="a waterfall, a lot of tree and a great view from the sky" />
                <img src={pic7} alt="a cool landscape" />
                <img src={pic8} alt="inside a town between two big buildings" />
                <img src={pic9} alt="a great view of the sea above the mountain" />
            </div>
        </div>
    </div>
  )
}

export default Section5