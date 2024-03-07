import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import CardSection from "../components/CardSection";
import AllProducts from "./AllProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Info />
      <AllProducts />
      {/* <FAQ /> */}
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
