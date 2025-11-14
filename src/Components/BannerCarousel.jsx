import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerCarousel() {
  const totalSlides = 13;

  return (
    <div className="relative w-full">
      {/* Background Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        className="mySwiper w-full h-[60vh] md:h-[70vh] lg:h-[90vh]"
      >
        {[...Array(totalSlides)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={`/Banners/banner${i + 1}.jpg`}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Layer */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-met mb-6 drop-shadow-lg"
            style={{
              WebkitTextStroke: "1.5px black", // 🔹 Black Stroke
              textShadow: "2px 2px 18px rgba(0,0,0,1)", // 🔹 Deep shadow for visibility
            }}
          >
           Welcome to <span className="text-blue-400">CineMine</span>
          </h1>

          <div className="bg-white/20 backdrop-blur-md rounded-full flex items-center px-3 py-2 w-[90%] sm:w-[80%] max-w-sm sm:max-w-md shadow-md">
            <input
              type="text"
              placeholder="Search for movies or series..."
              className="flex-1 bg-transparent text-white placeholder-gray-200 outline-none px-2 text-sm sm:text-base "
            />
            <button className="text-white font-semibold hover:text-blue-400 transition text-sm sm:text-base">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
