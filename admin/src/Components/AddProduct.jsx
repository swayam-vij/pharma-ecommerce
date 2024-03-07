import React from "react";
import { ImageUp } from "lucide-react";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="mx-auto max-w-md p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block mb-1" htmlFor="name">
          Product Name
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          type="text"
          id="name"
          name="name"
          placeholder="Type name of product"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="MRP">
          Price
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          type="text"
          id="MRP"
          name="MRP"
          placeholder="Type..."
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="sp">
          Selling Price
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          type="text"
          id="sp"
          name="sp"
          placeholder="Type..."
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="Category">
          Category
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          id="Category"
          name="Category"
        >
          <option value="vitamin">Vitamin</option>
          <option value="calcium">Calcium</option>
          <option value="omega">Omega</option>
          <option value="protein">Protein</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 cursor-pointer" htmlFor="file-input">
          <div onClick={() => document.getElementById("file-input").click()}>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="w-16 h-16"
              />
            ) : (
              <ImageUp className="w-16 h-16" />
            )}
          </div>
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          className="hidden"
          onChange={imageHandler}
        />
      </div>
      <button className="w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
