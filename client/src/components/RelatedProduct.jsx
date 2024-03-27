import React from "react";
import allProducts from "../assets/allProducts";
import ItemCard from "./ItemCard";

const RelatedProduct = () => {
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
