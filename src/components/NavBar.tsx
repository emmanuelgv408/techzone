import React, { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-charcoal text-white px-4 py-3">
      <div className="flex flex-wrap justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-2xl font-mono">TechZone</h1>

        {/* Hamburger Button (Visible on Mobile, Hidden on Large Screens) */}
        <button
          className="md:hidden text-4xl"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <span>&times;</span> 
          ) : (
            <span>&#9776;</span> 
          )}
        </button>

        {/* Desktop Navbar Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-6">
          <a href="/" className="hover:text-cyan-500 focus-visible:outline-none">
            Home
          </a>
          <a href="/shop" className="hover:text-cyan-500 focus-visible:outline-none">
            Shop
          </a>
          <a href="/cart" className="hover:text-cyan-500 focus-visible:outline-none">
            Cart
          </a>
        </div>

        {/* Mobile Menu with Smooth Transition */}
        {isMenuOpen && (
          <div className="flex flex-col items-center w-full h-screen bg-charcoal bg-opacity-80 pt-16 transition-all ease-in-out duration-300">
            <a href="/" className="hover:text-cyan-500 py-4 text-2xl focus-visible:outline-none">
              Home
            </a>
            <a href="/shop" className="hover:text-cyan-500 py-4 text-2xl focus-visible:outline-none">
              Shop
            </a>
            <a href="/cart" className="hover:text-cyan-500 py-4 text-2xl focus-visible:outline-none">
              Cart
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
