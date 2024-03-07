import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Trash2 } from "lucide-react";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:3000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="mx-auto">
      <h1>All PRODUCt</h1>
      <div>
        <p>products</p>
        <p>title</p>
        <p>mrp</p>
        <p>sp</p>
        <p>category</p>
        <p>remove</p>
      </div>
      <div>
        <hr />
        {allProducts.map((product, index) => {
          return (
            <div key={index}>
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>{product.mrp}</p>
              <p>{product.disocunt}</p>
              <p>{product.category}</p>
              <p>
                <Trash2 />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
