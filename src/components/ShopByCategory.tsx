import { Link } from "react-router-dom";
import React from 'react';


function ShopByCategory() {
  return (
    <div className="flex flex-col text-white bg-black py-12 px-4 items-center">
      <h1 className="text-2xl font-bold uppercase text-center">
        Shop By Category
      </h1>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <Link
          to="/category/phone"
          className="text-black flex flex-col items-center relative"
        >
          <img src="/images/smartphonescategory.jpg" alt="Phones" />
          <p className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-black text-center uppercase w-[88%] py-1 border border-black text-sm">
            Phones
          </p>
        </Link>

        <Link
          to="/category/tablet"
          className="text-black flex flex-col items-center relative"
        >
          <img src="/images/tabletscategory.jpg" alt="Tablets" />
          <p className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-black text-center uppercase w-[88%] py-1 border border-black text-sm">
            Tablets
          </p>
        </Link>

        <Link
          to="/category/laptop"
          className="text-black flex flex-col items-center relative"
        >
          <img src="/images/laptopscategory.jpg" alt="Laptops" />
          <p className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-black text-center uppercase w-[88%] py-1 border border-black text-sm">
            Laptops
          </p>
        </Link>

        <Link
          to="/category/camera"
          className="text-black flex flex-col items-center relative"
        >
          <img src="/images/camerascategory.jpg" alt="Cameras" />
          <p className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-black text-center uppercase w-[88%] py-1 border border-black text-sm">
            Cameras
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ShopByCategory;
