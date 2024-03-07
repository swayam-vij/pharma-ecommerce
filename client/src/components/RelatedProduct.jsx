import React from "react";
import allProducts from "../assets/allProducts";
import ItemCard from "./ItemCard";

const RelatedProduct = () => {
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
};

export default RelatedProduct;
