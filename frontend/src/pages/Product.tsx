import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
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
  const { products, addToCart } = useContext(ShopContext);
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p: Product) => p.id.toString() === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="w-screen flex flex-col items-center px-4 md:px-0">
  
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row md:h-screen md:items-center md:justify-center">
        <div className="md:w-1/2 h-auto flex justify-center items-center px-5 my-4 md:my-0">
          <img
            src={product.image}
            alt={product.name || "Product image"}
            className="w-full max-w-[500px] h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 px-6 py-6 flex flex-col items-center justify-around bg-[#fafafa] shadow-md rounded-md max-w-[550px] md:max-w-[500px] h-auto">
          <p className="text-xs">{product.brand}</p>
          <h1 className="text-2xl">{product.name}</h1>
          <p className="text-sm mt-3 text-tan">${parseFloat(product.price).toFixed(2)}</p>
          <hr className="my-4 w-full border-gray-300" />
          <p className="text-center">{product.description}</p>
          <Link
            to="/cart"
            className="mt-4 w-60 uppercase border px-20 py-2.5 text-[0.6rem] tracking-wider font-semibold hover:text-white hover:bg-black text-center"
            onClick={() => addToCart(product.id)}
          >
            Add To Cart
          </Link>
          <Link
            to="/checkout"
            className="mt-4 w-60 uppercase border px-20 py-2.5 text-[0.6rem] tracking-wider font-semibold hover:text-white hover:bg-black text-center"
          >
            Buy Now
          </Link>
        </div>
      </div>

    
      <div className="w-full max-w-screen-xl mx-auto mt-10 px-4">
        <Related category={product.category} product={product} />
      </div>
    </div>
  );
};

export default Product;
