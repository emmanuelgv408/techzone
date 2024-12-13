import { useParams } from "react-router-dom";
import data from "../data/products.json";
import React from 'react';


interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  brand: string;
}

function ProductDetail() {
  const products: Product[] = data;
  const { productId } = useParams<{ productId: string }>();

  const product = products.find(
    (product) => product.id.toString() === productId
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="px-3 py-3 flex flex-col bg-charcoal">
      {/* Image Section */}
      <img
        className="w-full h-72 object-cover"
        src={product.image}
        alt={product.name}
      />
      
      {/* Product Details Section */}
      <div className="bg-gray-100 mt-2 border flex flex-col items-center space-y-2 py-8">
        <p className="text-sm text-gray-600">{product.brand}</p>
        <h1 className="text-3xl font-bold text-center">{product.name}</h1>
        <p className="text-lg font-semibold text-center">{product.price}</p>
        <p className="text-sm text-gray-700 text-center">{product.description}</p>
        <br />
        <button className=" border border-black w-[95%] py-3 text-sm bg-white hover:bg-gray-200 rounded-md hover:cursor-pointer transition-all">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
