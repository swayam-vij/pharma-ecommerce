import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const ItemCard = (props) => {
  const { addToCart } = useContext(ShopContext);

  const handleImageClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full p-4 flex">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
        <Link to={`/products/${props.id}`}>
          <img
            src={props.thumbnail}
            className="object-cover object-center w-full h-48"
            alt={props.name}
            onClick={handleImageClick}
          />
        </Link>
        <div className="p-4">
          <p className="text-xl font-semibold text-gray-900 uppercase overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full pt-3">
            {props.name}
          </p>
          <div className="flex justify-between items-center mt-3">
            {/* Price section */}
            <div className="text-gray-900">
              {props.discount && (
                <p className="text-lg font-semibold">Rs. {props.discount}</p>
              )}
              <p className="text-lg font-semibold line-through text-gray-500">
                {props.mrp}
              </p>
            </div>
            {/* Add to cart button */}
            <button
              onClick={() => addToCart(props.id)}
              className="px-6 py-2 uppercase transition duration-200 ease-in rounded-full hover:bg-black hover:text-white outline"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
