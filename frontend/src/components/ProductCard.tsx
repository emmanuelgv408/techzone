import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="cursor-pointer" to={`/product/${product.id}`}>
      <div className="flex flex-col items-center w-full h-full overflow-hidden">
        <div className="relative w-full h-48 sm:h-60 lg:h-72">
          <img
            src={product.image}
            alt="product"
            className=" w-full h-full object-contain md:object-cover"
          />
        </div>
        <h1 className="text-center font-bold">{product.name}</h1>
        <p>{product.brand}</p>
        <p className="text-tan">
          {currency}
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
