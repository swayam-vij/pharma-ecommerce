import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignUp";
import Footer from "./components/Footer";
import ProductInfo from "./components/ProductInfo";
import HamburgerMenu from "./components/HamburgerMenu";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitamins" element={<Products category="vitamin" />} />
          <Route path="/protein" element={<Products category="protein" />} />
          <Route path="/calcium" element={<Products category="calcium" />} />
          <Route path="/omega" element={<Products category="omega" />} />
          {/* Remove the nested Routes for ProductInfo */}
          <Route path="/products" element={<ProductInfo />} />
          <Route path="/products/:productID" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
