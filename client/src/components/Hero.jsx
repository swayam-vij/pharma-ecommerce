import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../assets/hero-banner.jpg";
const Hero = () => {
  const images = [
    "https://dummyimage.com/800x400/000/fff",
    "https://dummyimage.com/800x400/000/fff",
    "https://dummyimage.com/800x400/000/fff",
    "https://dummyimage.com/800x400/000/fff",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    touchMove: true,
  };

  return (
    // <div className="bg-gradient-to-b from-blue-600 to-white flex items-center justify-center py-2">
    //   <div className="w-[80%]">
    //     <Slider {...settings} className="">
    //       {images.map((image, index) => (
    //         <div key={index} className="slide flex items-center justify-center">
    //           <img
    //             src={image}
    //             alt={`Slide ${index}`}
    //             className="w-full rounded-2xl"
    //           />
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>

    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex flex-col  h-screen justify-center mx-10">
        <div className="flex flex-col  ">
          <div className="text-6xl font-semibold font-MW">KRIPT PHARMA</div>
          <div className="text-2xl py-10">
            Empowering Health and Wellness:
            <br />
            Your Premium Destination for Pharma Solutions
          </div>

          <button className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-3xl w-36 outline">
            View Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
