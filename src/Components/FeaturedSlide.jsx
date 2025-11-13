import Slider from 'react-slick'
import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';

const FeaturedSlide = ({ movies }) => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 100, // 1 sec
    speed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // md screen
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='w-full px-4'>
      <Slider {...settings}>
        {movies
          .filter(movie => movie.rating > 7)
          .map(movie => (
            <div key={movie.id} className='p-2 '>
              <div className='bg-[#085e6483] w-50 font-mon border border-gray-700 rounded-2xl py-3 transition-transform duration-300 hover:scale-105'>

                <img src={movie.card_picture} alt={movie.title} className='h-40 md:h-40 lg:h-50 mx-auto object-contain rounded-lg' />
                <div className='py-1 flex flex-col gap-1 px-2'>
                  <div className='details flex justify-between'>
                    <h3 className='line-clamp-1 overflow-hidden'>{movie.title}</h3>
                    <div className='flex gap-2 py-1'>
                      <FaEye className='text-gray-300' />
                      <FaHeartCircleCheck className='text-rose-700' />
                    </div>
                  </div>
                  <p className='text-sm text-gray-400'>{movie.released_date}</p>
                  <div className='flex justify-between'>
                    <p className='text-sm text-black font-extrabold bg-orange-400 rounded px-2'>{movie.platform}</p>
                    <p className='flex justify-center items-center gap-2 text-sm text-gray-400'>
                      <FaStarHalfAlt className='text-orange-400' />
                      {movie.rating}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default FeaturedSlide
