import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import CardSection from "../components/CardSection";
import AllProducts from "./AllProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Accordion from "../components/Accordion";
import accordionData from "../assets/faqData";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    fetch("/accordionData.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Accordion />
      <AllProducts />
      <Info />
      <AboutUs items={items} />
      <ContactUs />
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
