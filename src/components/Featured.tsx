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
  const featuredProducts = products?.slice(0,4) || [];
  console.log(featuredProducts);


  return (
    <div className="h-[60vh] px-3 py-5">
      <h1 className="text-2xl text-center">Featured Tech</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2.5} 
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="my-3"
        breakpoints={{
          640: {
            slidesPerView: 1.5, 
          },
          768: {
            slidesPerView: 2.5, 
          },
          1024: {
            slidesPerView: 3, 
            slidesPerGroup: 3, 
          },
        }}
      >
        {featuredProducts.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
