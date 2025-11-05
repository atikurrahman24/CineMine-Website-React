import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerCarousel() {
  const totalSlides = 13;

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper w-full h-[60vh] md:h-[70vh] lg:h-[90vh]"
    >
      {[...Array(totalSlides)].map((_, i) => (
        <SwiperSlide key={i}>
          <img
            src={`/Banners/banner${i + 1}.jpg`}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
