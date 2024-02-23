import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { FaTrash } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CartItem = () => {
  const { allProducts, cartItem, removeFromCart, getTotal } =
    useContext(ShopContext);

  return (
    <div>
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-4 min-h-screen">
        <div className="grid grid-cols-6 gap-4 text-center">
          <p className="col-span-1">Product</p>
          <p className="col-span-1">Title</p>
          <p className="col-span-1">Price</p>
          <p className="col-span-1">Quantity</p>
          <p className="col-span-1">Total</p>
          <p className="col-span-1">Remove</p>
        </div>
        <hr className="my-4" />
        {allProducts.map((product) => {
          if (cartItem[product.id] > 0) {
            return (
              <div
                key={product.id}
                className="grid grid-cols-6 gap-4 items-center"
              >
                <div className="col-span-1">
                  <img
                    src={product.thumbnail}
                    alt="Product"
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div className="col-span-1">{product.name}</div>
                <div className="col-span-1">{product.discount}</div>
                <div className="col-span-1">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    {cartItem[product.id]}
                  </button>
                </div>
                <div className="col-span-1">
                  {product.discount * cartItem[product.id]}
                </div>
                <div className="col-span-1">
                  <FaTrash
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
        <hr className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="">
              <p className="font-bold">Subtotal</p>
              <p>{getTotal()}</p>
            </div>
            <hr />
            <div className="">
              <p className="font-bold">Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="">
              <h3 className="font-bold">Total</h3>
              <h3>{getTotal()}</h3>
            </div>
          </div>
          <div className="flex items-end justify-end col-span-1">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartItem;
