import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="relative z-50 flex justify-between w-screen md:px-10 py-4 px-3 md:py-8 bg-slate-600 text-white ">
      <div className="text-xl">
        <Link to="/" className="cursor-pointer text-white">
          Techzone
        </Link>
      </div>

      <div className="flex">
        <ul className="flex items-center gap-3 md:gap-7 ">
          <li className="flex-shrink-0">
            <img
              className="w-6 h-6 cursor-pointer fill-current text-white"
              src={assets.search_icon}
              alt="search"
              onClick={() => setSearchVisible(!searchVisible)}
            />
          </li>

          {/* Visible on medium screens */}
          <li className="flex-shrink-0 hidden md:block">
            <Link to="/login">
              <img
                className="w-6 h-6 cursor-pointer fill-current text-white"
                src={assets.user_icon}
                alt="user"
              />
            </Link>
          </li>

          <li className="flex-shrink-0">
            <Link to="/cart" className="cursor-pointer">
              <img
                className="w-6 h-6 fill-current text-white"
                src={assets.cart_icon}
                alt="cart"
              />
            </Link>
          </li>

          {/* Hidden on medium screens*/}
          <li className="flex-shrink-0 md:hidden">
            <img
              className="w-6 h-6 cursor-pointer fill-current text-white"
              src={assets.bars_icon}
              alt="bars"
              onClick={() => setMenuVisible(!menuVisible)}
            />
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      {searchVisible && (
        <div className="absolute left-0 right-0 top-0 z-10 bg-slate-500 md:py-10 flex justify-around items-center py-2">
          <input
            type="text"
            placeholder="Search"
            className="text-left px-2 py-1 border border-b-1 border-black w-[80%]"
            aria-label="Search"
          />
          <img
            src={assets.x_icon}
            alt="x"
            className="mr-3 md:mr-20 cursor-pointer fill-current text-white"
            onClick={() => setSearchVisible(!searchVisible)}
          />
        </div>
      )}

      {/* Mobile Menu */}
      {menuVisible && (
        <div
          className={`w-[80%] fixed top-0 right-0 bottom-0 z-10 bg-slate-600  flex flex-col items-center transform transition-transform duration-300 ease-in-out ${
            menuVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex w-screen justify-end p-3">
            <img
              src={assets.x_icon}
              alt="x"
              onClick={() => setMenuVisible(!menuVisible)}
              className="w-[25px] mr-9 cursor-pointer fill-current text-white"
            />
          </div>

          <ul className="text-white mt-10 w-[80%]">
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/laptops" className="cursor-pointer text-white">
                Laptops
              </Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/smartphones" className="cursor-pointer text-white">
                Smartphones
              </Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/wearables" className="cursor-pointer text-white">
                Wearables
              </Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/accessories" className="cursor-pointer text-white">
                Accessories
              </Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/gaming" className="cursor-pointer text-white">
                Gaming
              </Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/audio" className="cursor-pointer text-white">
                Audio
              </Link>
            </li>
            <li className="border-t border-white pt-4 pb-4">
              <Link to="/cameras" className="cursor-pointer text-white">
                Cameras
              </Link>
            </li>
            <li className="border-t border-b border-white pt-4 pb-4">
              <Link to="/all-products" className="cursor-pointer text-white">
                All Products
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/login" className="cursor-pointer text-white text-sm ">
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
