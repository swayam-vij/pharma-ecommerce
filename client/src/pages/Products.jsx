import React, { useContext } from "react";
import ItemCard from "../components/ItemCard";
import { ShopContext } from "../context/shopContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = (props) => {
  const { allProducts } = useContext(ShopContext);
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center min-h-screen">
        {allProducts.map((item, i) =>
          props.category === item.category ? (
            <ItemCard
              key={i}
              id={item.id}
              name={item.name}
              thumbnail={item.thumbnail}
              mrp={item.mrp}
              discount={item.discount}
            />
          ) : null
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
