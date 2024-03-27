import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import CardSection from "../components/CardSection";
import AllProducts from "./AllProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <AllProducts />
      <AboutUs />
      <ContactUs />
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
