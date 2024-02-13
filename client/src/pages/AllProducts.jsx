import React, { useContext } from "react";
import ItemCard from "../components/ItemCard";
import { ShopContext } from "../context/shopContext";

const AllProducts = (props) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-white">
      <h2 className="text-3xl font-bold mb-4">All Products</h2>
      <div className="flex flex-wrap justify-center">
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

export default AllProducts;
