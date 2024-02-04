import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import CardSection from "../components/CardSection";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <AllProducts />
      <CardSection />
    </div>
  );
};

export default Home;
