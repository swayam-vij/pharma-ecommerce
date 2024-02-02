import React from "react";

const CardSection = () => {
  const cardsData = [
    { title: "Card 1", imageSrc: "https://dummyimage.com/100x70/000/fff" },
    { title: "Card 2", imageSrc: "https://dummyimage.com/100x70/000/fff" },
    { title: "Card 3", imageSrc: "https://dummyimage.com/100x70/000/fff" },
    { title: "Card 4", imageSrc: "https://dummyimage.com/100x70/000/fff" },
  ];

  return (
    <div className="h-screen/3 bg-gradient-to-b from-blue-600 to-white flex items-center justify-center">
      <div className="container mx-auto flex justify-between">
        {cardsData.map((card, index) => (
          <div key={index} className="w-1/5 p-4">
            <div className="bg-black bg-opacity-70 p-4 rounded-md shadow-md">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
