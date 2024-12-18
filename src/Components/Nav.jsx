import React, { useState } from "react";
import xoraImage from "../assets/xora_public/public/images/xora.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden xl:flex text-white text-lg justify-center p-6 gap-20">
        <a href="" className="hover:text-p1 delay-200">
          Features
        </a>
        <a href="" className="hover:text-p1">
          Pricing
        </a>
        <img
          src={xoraImage}
          alt="Xora Logo"
          className="max-w-32 max-h-32 object-cover"
        />
        <a href="" className="hover:text-p1">
          FAQ
        </a>
        <a href="" className="hover:text-p1">
          Downloads
        </a>
      </nav>

      {/* Mobile Navigation */}
      <div className="xl:hidden flex justify-between items-center p-6">
        <img
          src={xoraImage}
          alt="Xora Logo"
          className="max-w-28 max-h-28 object-cover"
        />
        <button onClick={handleMenu}>
          <GiHamburgerMenu className="text-white text-3xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="bg-s2 text-white p-6 flex flex-col gap-4">
          <a href="" className="hover:text-p1">
            Features
          </a>
          <a href="" className="hover:text-p1">
            Pricing
          </a>
          <a href="" className="hover:text-p1">
            FAQ
          </a>
          <a href="" className="hover:text-p1">
            Downloads
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
