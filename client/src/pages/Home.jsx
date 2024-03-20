import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import CardSection from "../components/CardSection";
import AllProducts from "./AllProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <FAQ />
      <AllProducts />
      <AboutUs />
      <ContactUs />
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
