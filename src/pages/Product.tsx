import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Related from "../components/Related";
import { Link } from "react-router-dom";

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
  const { addToCart } = useContext(ShopContext);
  const product = products.find((p: Product) => p.id.toString() === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="w-screen flex flex-col md:flex-row md:h-screen ">
      <div className="md:w-1/2 h-full flex justify-center items-center px-5 my-2 md:my-0">
        <img
          src={product.image}
          alt={product.name || "Product image"}
          className="w-full max-w-[500px] h-auto object-cover"
        />
      </div>

      <div className="px-2 md:h-full md:w-1/2 flex justify-center items-center">
        <div className="px-6 py-6 flex flex-col items-center bg-[#fafafa] w-full max-w-[500px] shadow-md rounded-md">
          <p className="text-xs">{product.brand}</p>
          <h1 className="text-2xl">{product.name}</h1>
          <p className="text-sm mt-3 text-amber-600">${product.price}</p>
          <hr className="my-4 w-full border-gray-300" />
          <p className="text-center">{product.description}</p>
          <button
            className="mt-4 w-60 uppercase border px-20 py-2.5 text-[0.6rem] tracking-wider font-semibold hover:text-white hover:bg-black"
            onClick={() => addToCart(product.id)}
          >
            <Link to="/cart"> Add To Cart</Link>
          </button>
          <button className="mt-4 w-60 uppercase border px-20 py-2.5 text-[0.6rem] tracking-wider font-semibold hover:text-white hover:bg-black">
            <Link to="/checkout"> Buy now</Link>
          </button>
        </div>
      </div>

      <Related category={product.category} product={product} />
    </div>
  );
};

export default Product;
