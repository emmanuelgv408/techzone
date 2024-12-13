import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  brand: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="text-white flex flex-col items-center relative">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <p className="text-center mt-2 text-sm font-semibold">{product.name}</p>
        <p className="text-center text-xs text-gray-500">{product.brand}</p>
        <p className="text-center mt-1 text-lg font-bold text-gwhite">
          {product.price}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
