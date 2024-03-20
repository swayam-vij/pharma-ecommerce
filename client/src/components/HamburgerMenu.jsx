import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className="flex items-center">
        <div
          className={`hamburger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <Menu className="cursor-pointer" size={40} />
        </div>
        <div className={`menu-content ${isOpen ? "open" : ""}`}>
          <Navbar isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ isOpen }) => {
  const { getTotalCartItems } = useContext(ShopContext);

  const navItems = [
    { name: "Vitamins", path: "/vitamins" },
    { name: "Protein Powder", path: "/protein" },
    { name: "Calcium", path: "/calcium" },
    { name: "Omega 3", path: "/omega" },
  ];

  return (
    <div
      className={`flex flex-col bg-white w-64 py-4 px-6 shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Navbar logo*/}
      <Link to="/" className="mb-4">
        <div className="flex justify-center items-center gap-2">
          <img src="https://dummyimage.com/125x70/000/fff" alt="" />
          <p className="text-2xl font-semibold">pharma</p>
        </div>
      </Link>
      {/* nav list */}
      <ul className="flex flex-col items-start justify-center font-semibold space-y-4">
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* login/cart */}
      <div className="flex items-center justify-center gap-5 mt-auto">
        <Link to="/login">
          <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-blue-600 hover:text-white focus:outline-none">
            LOGIN
          </button>
        </Link>
        <Link to="/cart">
          <FaShoppingCart size={24} />
        </Link>
        <div className="bg-red-500 text-white p-1 rounded-full">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
