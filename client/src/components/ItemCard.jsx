import React from "react";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  return (
    <div className="flex items-center justify-center w-80">
      <div className="w-full p-4">
        <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
          <div>
            <p className="text-xl font-bold text-gray-900 uppercase">
              {props.name}
            </p>
          </div>
          <div>
            <Link to={`/products/${props.id}`}>
              <img
                src={props.image}
                className="object-cover object-center w-full py-5"
              />
            </Link>
          </div>
          <div className="grid gap-10 prod-info">
            {/* Price section */}
            <div className="flex items-center text-gray-900 md:flex-row">
              {/* New price */}
              {props.specialPrice && (
                <div className="text-lg font-semibold">
                  <p>{props.specialPrice}</p>
                </div>
              )}
              {/* Old price */}
              <div className="text-lg font-semibold line-through text-gray-500 ml-4">
                {props.price}
              </div>
            </div>

            {/* Add to cart button */}
            <div className="flex flex-col items-center justify-between md:flex-row">
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
