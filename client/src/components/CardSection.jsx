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
    <div className="h-screen/3 flex flex-col items-center justify-center mt-24">
      <h2 className="text-3xl font-bold mb-4">CERTIFIED BY</h2>
      <div className="container mx-auto flex justify-between">
        {cardsData.map((card, index) => (
          <div key={index} className="w-1/5 p-4">
            <div className="bg-black bg-opacity-70 p-4 rounded-md shadow-md relative">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
            </div>

            {/* <h3 className="text-xl font-semibold mb-2 text-white absolute top-0 left-0 w-full text-center">
              {card.title}
            </h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
