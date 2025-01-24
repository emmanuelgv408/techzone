import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard'; // Ensure you import ProductCard correctly
import Product from '../pages/Product';

const AllProducts = () => {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
