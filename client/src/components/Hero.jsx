import React from "react";
import { Link as ScrollLink } from "react-scroll";
import hero from "../assets/hero-banner.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero section for large devices */}
      <div
        className="hidden lg:block bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex flex-col h-screen justify-center mx-10">
          <div className="flex flex-col">
            <div className="text-6xl font-bold font-MW">
              KRIPT <br /> PHARMACEUTICALS
            </div>
            <div className="text-2xl py-5">
              Empowering Health and Wellness:
              <br />
              Your Premium Destination for Pharma Solutions
            </div>
            <div className="flex flex-row gap-5">
              <ScrollLink
                to="allProducts" // Target the AllProducts component
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-3xl w-36 outline">
                  View Products
                </button>
              </ScrollLink>
              <ScrollLink
                to="contactUs" // Target the ContactUs component
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-3xl w-36 outline">
                  Contact Us!
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Hero section for medium and mobile devices */}
      <div
        className="lg:hidden flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}
      >
        <div className="text-center w-full lg:w-1/2 lg:inline-block mt-10 px-6 lg:px-12">
          <div className="text-3xl lg:text-6xl font-bold font-MW">
            KRIPT <br /> PHARMACEUTICALS
          </div>
          <div className="text-xl leading-relaxed pt-5 lg:pt-10">
            Empowering Health and Wellness:
            <br />
            Your Premium Destination for Pharma Solutions
          </div>
          <div className="flex flex-row gap-5 mt-10 justify-center lg:justify-start items-center">
            <ScrollLink
              to="allProducts"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-3xl w-36 outline lg:static lg:w-1/2">
                View Products
              </button>
            </ScrollLink>
            <ScrollLink to="contactUs" spy={true} smooth={true} duration={500}>
              <button className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-3xl w-36 outline lg:static lg:w-1/2">
                Contact Us!
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
