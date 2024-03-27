import React from "react";
import allProducts from "../assets/allProducts";
import ItemCard from "./ItemCard";

const RelatedProduct = () => {
  // Check if the device is large
  const isLargeDevice = window.innerWidth >= 1024; // Adjust the width based on your definition of a large device

  // Render content for large devices
  if (isLargeDevice) {
    const renderItemCards = () => {
      return allProducts.map((item, i) => (
        <ItemCard
          key={i}
          id={item.id}
          name={item.name}
          thumbnail={item.thumbnail}
          mrp={item.mrp}
          discount={item.discount}
          className="inline-block" // Add this line to make each ItemCard inline-block
        />
      ));
    };

    return (
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4 pl-4">More Similar Products</h1>
        <hr className="mb-4" />
        <div className="overflow-x-auto whitespace-nowrap flex">
          {renderItemCards()}
        </div>
      </div>
    );
  }

  // Render content for small or medium devices
  const renderItemCards = () => {
    return allProducts.map((item, i) => (
      <div key={i} className="w-64 sm:w-auto flex-shrink-0 mr-4">
        <ItemCard
          id={item.id}
          name={item.name}
          thumbnail={item.thumbnail}
          mrp={item.mrp}
          discount={item.discount}
          className="inline-block"
        />
      </div>
    ));
  };

  return (
    <div className="mt-8 px-4 sm:px-0">
      <h1 className="text-3xl font-bold mb-4 pl-4">More Similar Products</h1>
      <hr className="mb-4" />
      <div className="overflow-x-auto whitespace-nowrap flex flex-no-wrap sm:flex-wrap justify-start">
        {renderItemCards()}
      </div>
    </div>
  );
};

export default RelatedProduct;
