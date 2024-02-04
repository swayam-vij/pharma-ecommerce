import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { allProducts } = useContext(ShopContext);
  const { productID } = useParams();

  console.log("Product ID from URL:", productID);

  const product = allProducts.find((e) => e.id === Number(productID));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      {/* Display other details about the product */}
    </div>
  );
};

export default ProductInfo;
