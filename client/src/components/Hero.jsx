import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="bg-gradient-to-b from-blue-600 to-white flex items-center justify-center py-2">
      <div className="w-[80%]">
        <Slider {...settings} className="">
          {images.map((image, index) => (
            <div key={index} className="slide flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full rounded-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
