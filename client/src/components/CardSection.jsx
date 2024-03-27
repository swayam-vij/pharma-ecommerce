import React from "react";
import iso from "../assets/isoStamp.png";
import fda from "../assets/fda.jpg";
import who from "../assets/who-emblem.png";
import msme from "../assets/msme.jpeg";

const CardSection = () => {
  const cardsData = [
    { title: "ISO", imageSrc: iso },
    { title: "FDA", imageSrc: fda },
    { title: "WHO", imageSrc: who },
    { title: "MSME", imageSrc: msme },
  ];

  return (
    <div className="py-8 md:py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">CERTIFIED BY</h2>
      <div className="container mx-auto flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2 md:p-4">
            <div className="bg-black bg-opacity-70 p-2 md:p-4 rounded-md shadow-md relative aspect-square">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
