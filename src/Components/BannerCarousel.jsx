import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function BannerCarousel() {
  const totalSlides = 13;

  const images = {
    1: "/Banners/banner1.jpg",
    2: "/Banners/banner2.jpg",
    3: "/Banners/banner3.jpg",
    4: "/Banners/banner4.jpg",
    5: "/Banners/banner5.jpg",
    6: "/Banners/banner6.jpg",
    7: "/Banners/banner7.jpg",
    8: "/Banners/banner8.jpg",
    9: "/Banners/banner9.jpg",
    10: "/Banners/banner10.jpg",
    11: "/Banners/banner11.jpg",
    12: "/Banners/banner12.jpg",
    13: "/Banners/banner13.jpg",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [allContent, setAllContent] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesResponse, seriesResponse] = await Promise.all([
          fetch("/Movies.json"),
          fetch("/Series.json"),
        ]);

        const moviesData = await moviesResponse.json();
        const seriesData = await seriesResponse.json();

        const mergedData = [
          ...moviesData.map((item) => ({ ...item, contentType: "movie" })),
          ...seriesData.map((item) => ({ ...item, contentType: "series" })),
        ];

        setAllContent(mergedData);
        setLoading(false);
      } catch (error) {
        console.error("Error in Data fetch :", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // search handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = allContent.filter((item) =>
        item.title?.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative w-full">
      {/* Background Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        loop
        className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh]"
      >
        {[...Array(totalSlides)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={images[i + 1]}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <div className="relative z-10 w-full flex flex-col items-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-met mb-6"
            style={{
              WebkitTextStroke: "1.5px black",
              textShadow: "2px 2px 18px rgba(0,0,0,1)",
            }}
          >
            Welcome to <span className="text-blue-400">CineMine</span>
          </h1>

          {/* Search Box */}
          <div className="relative bg-white/20 backdrop-blur-md rounded-full flex items-center px-3 py-2 w-[90%] sm:w-[80%] max-w-md shadow-md">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for movies or series..."
              className="flex-1 bg-transparent text-white placeholder-gray-200 outline-none px-2"
            />
            <button className="text-white font-semibold hover:text-blue-400 transition">
              Search
            </button>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-slate-900/95 mt-2 rounded-xl overflow-hidden shadow-2xl border border-white/10 max-h-60 overflow-y-auto z-50">
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    className="px-4 py-3 hover:bg-blue-600 cursor-pointer flex justify-between items-center border-b border-white/5 last:border-none"
                  >
                    <div className="flex items-center">
                      <img src={item.card_picture} alt={item.title} className="w-10 h-10 rounded-md object-cover mr-2" />
                      <span>{item.title}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {item.released_date}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
