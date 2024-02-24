import React from "react";

const Navbar = () => {
  // Define an array of navigation items
  const navItems = [
    { id: 1, label: "Dashboard", link: "#" },
    { id: 2, label: "Users", link: "#" },
    { id: 3, label: "Products", link: "#" },
    { id: 4, label: "Orders", link: "#" },
    { id: 5, label: "Settings", link: "#" },
    { id: 6, label: "Profile", link: "#" },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <a href="/" className="text-white font-bold">
            Admin Panel
          </a>
        </div>
        <ul className="flex space-x-4">
          {/* Map over the navItems array to render each navbar item */}
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="text-white hover:text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
