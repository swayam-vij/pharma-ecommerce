import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../context/shopContext";
import { Home } from "lucide-react";
import { AlignLeft } from "lucide-react";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="text-xl p-6 absolute top-0 left-0 w-full z-50">
      {/* Navbar for Large and Medium devices */}
      <div className="flex justify-between items-center hidden lg:flex">
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
            Protein Powder
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
      </div>

      {/* Navbar for Mobile devices */}
      <div className="lg:hidden">
        <button
          className="flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <AlignLeft size={24} className="mr-2" />
        </button>
        {isExpanded && (
          <div className="mt-2 absolute bg-black left-0 w-60 rounded-md shadow-lg">
            <Link to="/" className="block px-4 py-2 text-white">
              <span className="flex space-x-5">
                <Home /> Home
              </span>
            </Link>
            <Link to="/vitamins" className="block px-4 py-2 text-white">
              Vitamins
            </Link>
            <Link to="/protein" className="block px-4 py-2 text-white">
              Protein Powder
            </Link>
            <Link to="/calcium" className="block px-4 py-2 text-white">
              Calcium
            </Link>
            <Link to="/omega" className="block px-4 py-2 text-white">
              Omega 3
            </Link>
            <Link to="/login" className="block px-4 py-2 text-white">
              LOGIN
            </Link>
            <Link to="/cart" className="block px-4 py-2 text-white">
              <span className="flex space-x-5">
                <FaShoppingCart size={24} color="white" />
                {getTotalCartItems()}
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
