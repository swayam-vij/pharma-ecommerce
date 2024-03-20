import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const ItemCard = (props) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-center w-80">
      <div className="w-full p-4">
        <div className="flex flex-col justify-center p-4 bg-white hover:bg-blue-300 rounded-lg shadow-2xl card">
          <div>
            <Link to={`/products/${props.id}`}>
              <img
                onClick={window.scrollTo(0, 0)}
                src={props.thumbnail}
                className="object-cover object-center w-full rounded"
              />
            </Link>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-900 uppercase overflow-hidden overflow-ellipsis whitespace-nowrap max-w-full pt-3">
              {props.name}
            </p>
          </div>
          <div className="grid gap-5 prod-info">
            {/* Price section */}
            <div className="flex items-center text-gray-900 md:flex-row">
              {/* New price */}
              {props.discount && (
                <div className="text-lg font-semibold">
                  <p>Rs. {props.discount}</p>
                </div>
              )}
              {/* Old price */}
              <div className="text-lg font-semibold line-through text-gray-500 ml-4">
                {props.mrp}
              </div>
            </div>

            {/* Add to cart button */}
            <div className="flex flex-col items-center justify-between md:flex-row">
              <button
                onClick={() => {
                  addToCart(props.id);
                }}
                className="px-6 py-2 uppercase transition duration-200 ease-in rounded-full hover:bg-black hover:text-white outline"
              >
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
