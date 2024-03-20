import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Home } from "lucide-react";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="text-xl flex justify-between items-center p-6 absolute top-0 left-0 w-full z-50">
      <div className="mr-4">
        <Link to="/" className="flex items-center">
          <Home size={24} className="mr-2" />
        </Link>
      </div>
      <div>
        <Link to="/vitamins" className="mx-4 ml-10">
          Vitamins
        </Link>
        <Link to="/protein" className="mx-4">
          Protien Powder
        </Link>
        <Link to="/calcium" className="mx-4">
          Calcium
        </Link>
        <Link to="/omega" className="mx-4">
          Omega 3
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          to="/login"
          className="mr-4 px-6 py-2 uppercase rounded-full bg-white hover:bg-black hover:text-white outline"
        >
          LOGIN
        </Link>
        <Link to="/cart" className="mr-4 flex">
          <FaShoppingCart size={24} />
          <span className="ml-2">{getTotalCartItems()}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
