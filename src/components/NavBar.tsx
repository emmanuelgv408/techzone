import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Product from "../pages/Product";
import ProductCard from "./ProductCard";

const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [mobileDropdown, setMobileDropdown] = useState<Record<string, boolean>>(
    {
      laptops: false,
      smartphones: false,
      wearables: false,
      gaming: false,
      audio: false,
      camaras: false,
    }
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { cartCount } = useContext(ShopContext);

  const toggleMobileDropdown = (category: keyof Record<string, boolean>) => {
    setMobileDropdown((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const { products } = useContext(ShopContext);
  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative z-50 flex justify-between w-screen md:px-10 py-4 px-3 md:py-8 bg-dark text-white items-center uppercase tracking-wider text-xs">
      <div className="text-xl">
        <Link
          to="/"
          className="cursor-pointer text-white uppercase font-extrabold"
        >
          Techzone
        </Link>
      </div>

      <div className="hidden md:block">
        <ul className="flex flex-wrap justify-center items-center gap-5 text-sm px-3">
          <li className="relative min-w-[17%] group">
            <Link to="/laptops" className="cursor-pointer flex gap-1 ">
              Laptops
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current text-white"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>

            {/* Dropdown Desktop Menu */}
            <ul className="absolute hidden group-hover:block text-black bg-white w-[100%] py-3 px-2 space-y-3">
              <li>
                <Link to="/laptops/apple">Apple</Link>
              </li>
              <li>
                <Link to="/laptops/dell">Dell</Link>
              </li>
            </ul>
          </li>
          <li className="relative min-w-[17%] group">
            <Link
              to="/smartphones"
              className="cursor-pointer flex gap-1 text-white"
            >
              Smartphones
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current text-white"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
            <ul className="absolute hidden group-hover:block text-black bg-white w-[100%] py-3 px-2 space-y-3">
              <li>
                <Link to="/smartphones/apple">Apple</Link>
              </li>
              <li>
                <Link to="/smartphones/samsung">Samsung</Link>
              </li>
            </ul>
          </li>
          <li className="relative min-w-[17%] group ">
            <Link
              to="/wearables"
              className="cursor-pointer flex gap-1 text-white"
            >
              Wearables
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current text-white"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
            <ul className="absolute hidden group-hover:block text-black bg-white w-[100%] py-3 px-2 space-y-3">
              <li>
                <Link to="/wearables/apple">Apple</Link>
              </li>
            </ul>
          </li>

          <li className="relative min-w-[20%] group">
            <Link to="/gaming" className="cursor-pointer flex gap-1 text-white">
              Gaming
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current text-white "
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
            <ul className="absolute hidden group-hover:block text-black bg-white w-[100%] py-3 px-2 space-y-3">
              <li>
                <Link to="/gaming/nintendo">Nintendo</Link>
              </li>
              <li>
                <Link to="/gaming/sony">Sony</Link>
              </li>
            </ul>
          </li>
          <li className="relative min-w-[17%] group">
            <Link to="/audio" className="cursor-pointer flex gap-1 text-white">
              Audio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current text-white"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
            <ul className="absolute hidden group-hover:block text-black bg-white w-[100%] py-3 px-2 space-y-3">
              <li>
                <Link to="/audio/bose">Bose</Link>
              </li>
            </ul>
          </li>
          <li className="relative min-w-[20%] group">
            <Link
              to="/cameras"
              className="cursor-pointer flex gap-1 text-white"
            >
              Cameras
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current text-white"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
            <ul className="absolute hidden group-hover:block text-black bg-white w-[100%] py-3 px-2 space-y-3">
              <li>
                <Link to="/cameras/canon">Canon</Link>
              </li>
            </ul>
          </li>
          <li className="min-w-[17%]">
            <Link
              to="/all-products"
              className="cursor-pointer flex gap-1 text-white"
            >
              All Products
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex mr-3">
        <ul className="flex items-center gap-3  ">
          <li className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 cursor-pointer fill-current text-white"
              onClick={() => setSearchVisible(!searchVisible)}
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </li>

          {/* Visible on medium screens */}
          <li className="flex-shrink-0 hidden md:block">
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6 h-6 cursor-pointer fill-current text-white"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
            </Link>
          </li>

          <li className="flex-shrink-0 relative ">
            <Link to="/cart" className="cursor-pointer">
              {cartCount > 0 && (
                <div className="absolute left-3 bottom-3 border-2 border-white bg-tan text-white rounded-full w-5 h-5 inline-flex justify-center items-center text-sm">
                  {cartCount}
                </div>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-6 h-6 fill-current text-white"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </Link>
          </li>

          {/* Hidden on medium screens*/}
          <li className="flex-shrink-0 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 cursor-pointer fill-current text-white"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      {searchVisible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col items-center">
          <div className="w-full max-w-4xl flex flex-col items-center px-4 py-4 bg-slate-700">
            <div className="w-full flex justify-between items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search"
                className="text-left px-4 py-2 border border-black w-[80%] text-black"
                aria-label="Search"
              />
              <img
                src={assets.x_icon}
                alt="x"
                className="cursor-pointer fill-current text-white"
                onClick={() => setSearchVisible(!searchVisible)}
              />
            </div>

            {/* Product Cards */}
            <div className="w-full mt-4 bg-white text-black overflow-auto px-4 py-4 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product: Product) => (
                    <ProductCard product={product} key={product.id} />
                  ))
                ) : (
                  <p className="text-center text-gray-600">
                    No products found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}

      {menuVisible && (
        <div
          className={`w-[90%] fixed top-0 right-0 bottom-0 z-10 bg-dark  flex flex-col items-center transition-all  duration-300 transform ${
            menuVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex w-screen justify-end p-3 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              onClick={() => setMenuVisible(!menuVisible)}
              className="w-[25px] mr-9 cursor-pointer text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <ul className="text-white mt-10 w-[80%] text-sm">
            <li className="border-t border-white pt-4 pb-4 flex flex-row justify-between items-center">
              <div>
                <Link to="/laptops" className="cursor-pointer text-white">
                  Laptops
                </Link>
              </div>
              <div className="border-l pl-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-3 h-3 fill-current text-white transition-transform duration-300 ${
                    mobileDropdown.laptops ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleMobileDropdown("laptops")}
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </div>
            </li>
            {mobileDropdown.laptops && (
              <ul className="text-xs pt-2 pb-6 flex flex-col justify-evenly gap-4">
                <li>
                  <Link to="/laptops/apple">Apple</Link>
                </li>
                <li>
                  <Link to="/laptops/dell">Dell</Link>
                </li>
              </ul>
            )}

            <li className="border-t border-white pt-4 pb-4 flex flex-row justify-between items-center">
              <div>
                <Link to="/smartphones" className="cursor-pointer text-white">
                  Smartphones
                </Link>
              </div>
              <div className="border-l pl-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-3 h-3 fill-current text-white transition-transform duration-300 ${
                    mobileDropdown.smartphones ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleMobileDropdown("smartphones")}
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </div>
            </li>
            {mobileDropdown.smartphones && (
              <ul className="text-xs pt-2 pb-6 flex flex-col justify-evenly gap-4">
                <li>
                  <Link to="/smartphones/apple">Apple</Link>
                </li>
                <li>
                  <Link to="/smartphones/samsung">Samsung</Link>
                </li>
              </ul>
            )}
            <li className="border-t border-white pt-4 pb-4 flex flex-row justify-between items-center">
              <div>
                <Link to="/wearables" className="cursor-pointer text-white">
                  Wearables
                </Link>
              </div>
              <div className="border-l pl-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-3 h-3 fill-current text-white transition-transform duration-300 ${
                    mobileDropdown.wearables ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleMobileDropdown("wearables")}
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </div>
            </li>
            {mobileDropdown.wearables && (
              <ul className="text-xs pt-2 pb-6 flex flex-col justify-evenly gap-4">
                <li>
                  <Link to="/wearables/apple">Apple</Link>
                </li>
              </ul>
            )}
            <li className="border-t border-white pt-4 pb-4 flex flex-row justify-between items-center">
              <div>
                <Link to="/gaming" className="cursor-pointer text-white">
                  Gaming
                </Link>
              </div>
              <div className="border-l pl-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-3 h-3 fill-current text-white transition-transform duration-300 ${
                    mobileDropdown.gaming ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleMobileDropdown("gaming")}
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </div>
            </li>
            {mobileDropdown.gaming && (
              <ul className="text-xs pt-2 pb-6 flex flex-col justify-evenly gap-4">
                <li>
                  <Link to="/gaming/nintendo">Nintendo</Link>
                </li>
                <li>
                  <Link to="/gaming/sony">Sony</Link>
                </li>
              </ul>
            )}
            <li className="border-t border-white pt-4 pb-4 flex flex-row justify-between items-center">
              <div>
                <Link to="/audio" className="cursor-pointer text-white">
                  Audio
                </Link>
              </div>
              <div className="border-l pl-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-3 h-3 fill-current text-white transition-transform duration-300 ${
                    mobileDropdown.audio ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleMobileDropdown("audio")}
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </div>
            </li>
            {mobileDropdown.audio && (
              <ul className="text-xs pt-2 pb-6 flex flex-col justify-evenly gap-4">
                <li>
                  <Link to="/audio/bose">Bose</Link>
                </li>
              </ul>
            )}

            <li className="border-t border-white pt-4 pb-4 flex flex-row justify-between items-center">
              <div>
                <Link to="/cameras" className="cursor-pointer text-white">
                  Cameras
                </Link>
              </div>
              <div className="border-l pl-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  onClick={() => toggleMobileDropdown("cameras")}
                  className={`w-3 h-3 fill-current text-white transition-transform duration-300 ${
                    mobileDropdown.cameras ? "rotate-180" : ""
                  }`}
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </div>
            </li>
            {mobileDropdown.cameras && (
              <ul className="text-xs pt-2 pb-6 flex flex-col justify-evenly gap-4">
                <li>
                  <Link to="/cameras/canon">Canon</Link>
                </li>
              </ul>
            )}

            <li className="border-t border-b border-white pt-4 pb-4 flex flex-row justify-between items-center">
              <div>
                <Link to="/all-products" className="cursor-pointer text-white">
                  All Products
                </Link>
              </div>
            </li>
            <li className="mt-4 text-xs">
              <Link to="/login" className="cursor-pointer text-white text-sm">
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
