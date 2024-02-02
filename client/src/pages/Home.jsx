import React from "react";
import Hero from "../components/Hero";
import ItemCard from "../components/ItemCard";
import Info from "../components/Info";
import CardSection from "../components/CardSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <CardSection />
    </div>
  );
};

export default Home;
