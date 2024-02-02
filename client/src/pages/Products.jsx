import React from "react";
import ItemCard from "../components/ItemCard";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://dummyimage.com/200x150/000/fff",
      price: "500",
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://dummyimage.com/200x150/000/fff",
      price: "1500",
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://dummyimage.com/200x150/000/fff",
      price: "1500",
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://dummyimage.com/200x150/000/fff",
      price: "1500",
    },
    {
      id: 5,
      name: "Product 5",
      image: "https://dummyimage.com/200x150/000/fff",
      price: "1500",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center min-h-screen my-8">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
