import React from 'react'
import { products } from '../assets/assets';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { assets } from '../assets/assets';

const Featured = () => {
  const featuredProducts = products.slice(5)
  return (
    <div className='h-[50vh]'>
         <Swiper
 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
    
    </Swiper>
      </div>
  )
}

export default Featured