import React, { useState } from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="flex justify-between w-screen mt-3">
      <div className="text-xl">Techzone</div>
      <div>
        <ul className="flex gap-2.5 ">
          <li>
            <img
              className="w-5"
              src={assets.search_icon}
              alt="search"
              onClick={() => setSearchVisible(!searchVisible)}
            />
          </li>
          <li>
            <img
              className="w-5"
              src={assets.bars_icon}
              alt="bars"
              onClick={() => setMenuVisible(!menuVisible)}
            />
          </li>
          <li>
            <img className="w-5" src={assets.cart_icon} alt="cart" />
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      {searchVisible && (
        <div className="absolute w-screen bg-slate-500 flex justify-around items-center py-4">
          <input type="text" placeholder="Search" className="text-left px-2 py-1 border w-[80%]"/>
          <img src={assets.x_icon} alt="x" className="mr-3" onClick={ () => setSearchVisible(!searchVisible)}/>
        </div>
      )}
    </div>
  );
};

export default NavBar;
