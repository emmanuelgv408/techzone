import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Related from "../components/Related";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  brand: string;
  backgroundImage: string;
}

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p: Product) => p.id.toString() === productId);


  return (
    <div className="w-screen  flex flex-col md:flex-row md:h-screen md:items-center">
      <div>
        {" "}
        <img
          src={product?.image}
          alt="productimage"
          className="w-screen  object-cover h-80 md:h-screen md:w-[80%]"
        />{" "}
      </div>
      <div className="px-2 ">
        <div className="px-6 py-9 mt-6 flex flex-col items-center bg-[#fafafa]  ">
          <p className="text-xs">{product?.brand}</p>
          <h1 className="text-2xl">{product?.name}</h1>
          <p className="text-sm mt-3 text-amber-600">${product?.price}</p>
          <hr className="my-4  w-full border-gray-300" />
          <button className="mt-4 uppercase border px-20 py-2.5 text-[0.6rem] tracking-wider font-semibold">
            Add To Cart
          </button>
        </div>
      </div>
      <Related category={product.category} product={product}/>
    </div>
  );
};

export default Product;
