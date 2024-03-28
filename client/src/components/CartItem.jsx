import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { FaTrash } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CartItem = () => {
  const { allProducts, cartItem, removeFromCart, getTotal } =
    useContext(ShopContext);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h1 className="text-xl font-bold text-gray-900 mt-10 sm:text-3xl">
            Your Cart
          </h1>
        </header>

        <div className="mt-8">
          <ul className="space-y-4">
            {allProducts.map((product) => {
              if (cartItem[product.id] > 0) {
                return (
                  <li
                    key={product.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <img
                      src={product.thumbnail}
                      alt="Product"
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="">
                      <h3 className="text-bold text-xl text-gray-900">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex flex-row space-x-2">
                      {product.discount && (
                        <h3 className="text-bold text-xl text-gray-900">
                          ₹{product.discount}
                        </h3>
                      )}
                      {product.discount && (
                        <h3 className="text-bold text-xl text-gray-900 line-through">
                          {product.mrp}
                        </h3>
                      )}
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <form>
                        <label
                          htmlFor={`quantity-${product.id}`}
                          className="sr-only"
                        >
                          {" "}
                          Quantity{" "}
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={cartItem[product.id]}
                          id={`quantity-${product.id}`}
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600"
                        />
                      </form>
                      <button className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>
                        <FaTrash
                          onClick={() => removeFromCart(product.id)}
                          className="h-4 w-4"
                        />
                      </button>
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div className="w-screen max-w-lg space-y-4">
              <dl className="space-y-0.5 text-sm text-gray-700">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>₹{getTotal()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd>Free</dd>
                </div>
                <div className="flex justify-between font-medium">
                  <dt>Total</dt>
                  <dd>₹{getTotal()}</dd>
                </div>
              </dl>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="rounded-2xl px-3 py-2 transition hover:bg-black hover:text-white outline"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartItem;
