import React, { useContext } from "react";
import ItemCard from "../components/ItemCard";
import { ShopContext } from "../context/shopContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = (props) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="my-16">
      <Navbar />
      <div className="flex flex-wrap justify-center min-h-screen">
        {allProducts.map((item, i) =>
          props.category === item.category ? (
            <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <ItemCard
                id={item.id}
                name={item.name}
                thumbnail={item.thumbnail}
                mrp={item.mrp}
                discount={item.discount}
              />
            </div>
          ) : null
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
