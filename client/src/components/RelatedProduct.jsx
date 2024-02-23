import React from "react";
import allProducts from "../assets/allProducts";
import ItemCard from "./ItemCard";

const RelatedProduct = () => {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold mb-4">More Similar Products</h1>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allProducts.map((item, i) => (
          <ItemCard
            key={i}
            id={item.id}
            name={item.name}
            thumbnail={item.thumbnail}
            mrp={item.mrp}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
