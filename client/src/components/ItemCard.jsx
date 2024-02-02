import React from "react";

const ItemCard = (props) => {
  return (
    <div className="flex items-center justify-center w-80">
      <div className="w-full p-4">
        <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
          <div>
            <p className="text-2xl font-bold text-gray-900 uppercase">
              {props.name}
            </p>
          </div>
          <div>
            <img
              src={props.image}
              className="object-cover object-center w-full py-5"
            />
          </div>
          <div className="grid gap-10 prod-info">
            <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
              <p className="text-xl font-bold">{props.price}</p>
              <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-blue-600 hover:text-white focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
