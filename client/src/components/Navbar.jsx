import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../context/shopContext";
import { Home, AlignLeft, User } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/kript-pharma-logo.png"

const Navbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const { getTotalCartItems } = useContext(ShopContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogout = () => {
    // Remove auth token from localStorage
    localStorage.removeItem("authToken");
    // Redirect to home page
    window.location.href = "/";
  };

  return (
    <nav className="text-xl p-6 absolute top-0 left-0 w-full z-50">
      {/* Navbar for Large and Medium devices */}
      <div className="flex justify-between items-center hidden lg:flex">
        <div className="mr-4">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Kript Pharma"
              className="w-30 h-20" />
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

          {isAuthenticated ? (
            <button 
              onClick={() => logout()}
              className="mr-4 px-6 py-2 uppercase rounded-full bg-white hover:bg-black hover:text-white outline"
            >
              Log Out
            </button>
          ) : (
            <button 
              onClick={() => loginWithRedirect()}
              className="mr-4 px-6 py-2 uppercase rounded-full bg-white hover:bg-black hover:text-white outline"
            >
              Log In
            </button>
          )}

          {/* {localStorage.getItem("authToken") ? (
            <>
              <User size={30} className="mr-4" />
              <button
                className="mr-4 px-6 py-2 uppercase rounded-full bg-white hover:bg-black hover:text-white outline"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="mr-4 px-6 py-2 uppercase rounded-full bg-white hover:bg-black hover:text-white outline"
            >
              LOGIN
            </Link>
          )} */}
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
            {isAuthenticated ? (
                <button
                  className="block px-4 py-2 text-white"
                  onClick={() => logout()}
                >
                  Logout
                </button>
            ) : (
              <button 
              className="block px-4 py-2 text-white"
              onClick={() => loginWithRedirect()}
              >
                LOGIN
              </button>
            )}
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
