import React from "react";
import Sidebar from "../Components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../Components/AddProduct";
import ListProduct from "../Components/ListProduct";

function BlankPage() {
  return <div>{/* This is a blank page */}</div>;
}

const Admin = () => {
  return (
    <div className="flex max-lg:flex-col">
      <Sidebar />
      <Routes>
        <Route exact path="/" component={BlankPage} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
