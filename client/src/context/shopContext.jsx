import React, { createContext, useState } from "react";
import allProducts from "../assets/allProducts";

export const ShopContext = createContext(null);
const getCart = () => {
  let cart = {};
  for (let i = 0; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getCart());

  const addToCart = (itemID) => {
    setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };
  const removeFromCart = (itemID) => {
    setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const getTotal = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        total += itemInfo.discount * cartItem[item];
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    allProducts,
    cartItem,
    addToCart,
    removeFromCart,
    getTotal,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
