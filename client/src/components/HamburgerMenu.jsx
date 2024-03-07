import React from "react";
import { Menu } from "lucide-react";

const HamburgerMenu = () => {
  return (
    <div className="flex items-end">
      <Menu className="absolute" />
    </div>
  );
};

export default HamburgerMenu;
