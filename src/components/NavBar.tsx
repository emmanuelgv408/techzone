import React from "react";

import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <div className="">
      <div className="">Techzone</div>
      <div>
        <ul>
          <li><img src={assets.search_icon} alt="search" /></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
