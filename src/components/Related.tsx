import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCard from "./ProductCard";

// Define the Product type
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

interface RelatedProps {
  category: string;
  product: Product;
}

const Related: React.FC<RelatedProps> = ({ category, product }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    const relatedProducts = products.filter(
      (p: Product) => p.category === category && p.id !== product.id
    );
    setRelated(relatedProducts);
  }, [category, products, product]);

  // Only render if related products exist
  if (related.length === 0) {
    return null; // Return nothing if no related products
  }

  return (
    <div className="block md:hidden px-5 text-center mt-3">
      <h1 className="uppercase text-xl">You may also like</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2.5}
        className="my-3"
      >
        {related.map((relatedProduct) => (
          <SwiperSlide key={relatedProduct.id}>
            <ProductCard product={relatedProduct} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Related;
