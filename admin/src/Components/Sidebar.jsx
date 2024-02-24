import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ScrollText } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-800 w-48 py-4 px-2 flex flex-col justify-start items-center mt-10">
      <Link
        to={"/addproduct"}
        className="flex items-center justify-center text-white hover:bg-gray-700 py-2 px-4 rounded-lg mb-4"
      >
        <ShoppingCart className="mr-2" />
        <p>Add Product</p>
      </Link>
      <Link
        to={"/listproduct"}
        className="flex items-center justify-center text-white hover:bg-gray-700 py-2 px-4 rounded-lg"
      >
        <ScrollText className="mr-2" />
        <p>See All Products</p>
      </Link>
    </div>
  );
};

export default Sidebar;
