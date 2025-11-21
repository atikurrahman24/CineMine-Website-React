import React from 'react';
import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router';

const MovieCard = ({ movie }) => {

    const { card_picture, title, released_date, platform, rating } = movie;


    return (
        <Link to={`/details/${movie.id}`}>
            <div className='bg-[#051e3d85] font-mon transition-transform duration-300 hover:scale-105 flex flex-col border border-gray-700 rounded-2xl gap-3 py-3'>
                <img src={card_picture} alt={title} className=' h-60 mx-auto object-contain rounded-lg' />
                <div className='py-1 flex flex-col gap-1 px-16 sm:px-10 md:px-6 lg:px-6 xl:px-6'>
                    <div>
                        <div className='details flex justify-between'>
                            <h3 className='line-clamp-1 overflow-hidden'>{title}</h3>
                            <div className='flex gap-2 py-1'>
                                <FaEye className='text-gray-300' />
                                <FaHeartCircleCheck className='text-rose-700' />
                            </div>
                        </div>
                    </div>
                    <p className='text-sm text-gray-400 '>{released_date}</p>
                    <div className='flex justify-between '>
                        <p className='text-sm text-black font-extrabold bg-orange-400 rounded px-2'>{platform}</p>
                        <p className='flex justify-center items-center gap-2 text-sm text-gray-400'>
                            <FaStarHalfAlt className='text-orange-400' />
                            {rating}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;
