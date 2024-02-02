import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { GiHypodermicTest } from "react-icons/gi";
const Info = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-600 h-screen flex flex-col">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center">
        <div className="w-full p-4">
          {/* Replace 'your-logo.png' with the actual path to your small logo */}
          <img
            src="your-logo.png"
            alt="Logo"
            className="max-w-full max-h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-black bg-opacity-70 rounded-md">
            <FaBriefcaseMedical size={50} color="white" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Lorem, ipsum.
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              dolore dolorum quaerat sit quibusdam temporibus fuga! Aliquid
              architecto praesentium placeat consequatur harum vitae unde quam
              rerum, hic eum iusto aliquam voluptatibus a rem. Ipsa, autem
              dolore commodi reprehenderit quaerat iste.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-black bg-opacity-70 rounded-md">
            <GiMedicines size={50} color="white" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Lorem, ipsum.
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              dolore dolorum quaerat sit quibusdam temporibus fuga! Aliquid
              architecto praesentium placeat consequatur harum vitae unde quam
              rerum, hic eum iusto aliquam voluptatibus a rem. Ipsa, autem
              dolore commodi reprehenderit quaerat iste.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-black bg-opacity-70 rounded-md">
            <FaUserDoctor size={50} color="white" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Lorem, ipsum.
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              dolore dolorum quaerat sit quibusdam temporibus fuga! Aliquid
              architecto praesentium placeat consequatur harum vitae unde quam
              rerum, hic eum iusto aliquam voluptatibus a rem. Ipsa, autem
              dolore commodi reprehenderit quaerat iste.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="p-4 bg-black bg-opacity-70 rounded-md">
            <GiHypodermicTest size={50} color="white" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Lorem, ipsum.
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              dolore dolorum quaerat sit quibusdam temporibus fuga! Aliquid
              architecto praesentium placeat consequatur harum vitae unde quam
              rerum, hic eum iusto aliquam voluptatibus a rem. Ipsa, autem
              dolore commodi reprehenderit quaerat iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
