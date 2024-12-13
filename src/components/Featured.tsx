import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import ProductCard from './ProductCard';
import data from '../data/products.json';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  brand: string;
}

function Featured() {
  const featuredProducts = data.slice(0, 4);

  return (
    <div className="bg-charcoal text-white flex flex-col items-center pt-12 px-4 bg-gradient-to-b from-gray-800 to-black">
      <h1 className="text-2xl font-bold uppercase">Featured</h1>

      <div className="w-full mt-2 hover:cursor-pointer">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={1.5}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {featuredProducts.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Featured;
