import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Product } from "../assets/assets";

const Featured = () => {
  const { products } = useContext(ShopContext);
  const featuredProducts = products?.slice(0, 6) || []; // Get the first 9 products
  console.log(featuredProducts);

  return (
    <div className="px-3 py-5">
      <h1 className="text-2xl text-center mb-5">Featured Tech</h1>
      {/* Swiper for small screens */}
      <div className="block md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2.5}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="my-3"
        >
          {featuredProducts.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for medium screens and above */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {featuredProducts.map((product: Product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
