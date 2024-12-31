import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="flex justify-between w-screen p-3">
      <div className="text-xl">
        <Link to="/">Techzone</Link>
      </div>

      <div>
        <ul className="flex gap-2.5">
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
            <Link to="/cart">
              <img className="w-5" src={assets.cart_icon} alt="cart" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      {searchVisible && (
        <div className="absolute left-0 right-0 top-0 z-10 bg-slate-500 flex justify-around items-center py-2">
          <input
            type="text"
            placeholder="Search"
            className="text-left px-2 py-1 border w-[80%]"
            aria-label="Search"
          />
          <img
            src={assets.x_icon}
            alt="x"
            className="mr-3"
            onClick={() => setSearchVisible(!searchVisible)}
          />
        </div>
      )}

      {/* Mobile Menu */}
      {menuVisible && (
        <div
          className={`w-[80%] fixed top-0 right-0 bottom-0 z-10 bg-slate-400 bg-opacity-90 flex flex-col items-center transform transition-transform duration-300 ease-in-out ${
            menuVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex w-screen justify-end p-3">
            <img
              src={assets.x_icon}
              alt="x"
              onClick={() => setMenuVisible(!menuVisible)}
              className="w-[25px] mr-9 "
            />
          </div>

          <ul className="text-white mt-10 w-[80%]">
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/laptops">Laptops</Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/smartphones">Smartphones</Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/wearables">Wearables</Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/accessories">Accessories</Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/gaming">Gaming</Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/audio">Audio</Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/cameras">Cameras</Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/all-products">All Products</Link>
            </li>
            <li>
              <Link to="/login" className="text-sm">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
