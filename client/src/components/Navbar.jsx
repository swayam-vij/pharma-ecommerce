import { Link } from "react-router-dom";
import react, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { getTotalCartItems } = useContext(ShopContext);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const navItems = [
    { name: "Vitamins", path: "/vitamins" },
    { name: "Protein Powder", path: "/protein" },
    { name: "Calcium", path: "/calcium" },
    { name: "Omega 3", path: "/omega" },
  ];

  return (
    <div className="flex justify-between px-4 py-3 shadow">
      {/* Navbar logo*/}
      <Link to="/">
        <div className="flex justify-center items-center gap-2">
          <img src="https://dummyimage.com/125x70/000/fff" alt="" />
          <p className="text-2xl font-semibold">pharma</p>
        </div>
      </Link>
      {/* nav list */}
      <ul className="flex items-center justify-center font-semibold space-x-6">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={`cursor-pointer ${
              index === selectedItem ? "border-b-2 border-blue-600" : ""
            }`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* login/cart */}
      <div className="flex items-center gap-5">
        <Link to="/login">
          <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-blue-600 hover:text-white focus:outline-none">
            LOGIN
          </button>
        </Link>
        <Link to="/cart">
          <FaShoppingCart size={24} />
        </Link>
        <div className="flex bottom-0 right-0 bg-red-500 text-white p-1 rounded-full">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
