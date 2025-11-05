import React from 'react';
import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';

const MovieCard = ({ movie }) => {

    const { card_picture, title, released_date, platform, rating } = movie;


    return (
        <div className='font-mon transition-transform duration-300 hover:scale-105 flex flex-col border border-yellow-500 rounded-2xl gap-3 '>
            <img src={card_picture} alt={title} className=' h-70 mx-auto object-contain rounded-lg' />
            <div className='py-1 flex flex-col gap-1'>
                <div>
                    <div className='details flex justify-between px-16 sm:px-8 md:px-6 lg:px-10 xl:px-12'>
                        <h3>{title}</h3>
                        <div className='flex gap-2 py-1'>
                            <FaEye className='text-gray-300' />
                            <FaHeartCircleCheck className='text-rose-700' />
                        </div>
                    </div>
                </div>
                <p className='text-sm text-gray-400 px-16 sm:px-8 md:px-6 lg:px-10 xl:px-12'>{released_date}</p>
                <div className='flex justify-between px-16 sm:px-8 md:px-6 lg:px-10 xl:px-12'>
                    <p className='text-sm text-black font-extrabold bg-yellow-400 rounded px-2'>{platform}</p>
                    <p className='flex justify-center items-center gap-2 text-sm text-gray-400'>
                        <FaStarHalfAlt className='text-yellow-400' />
                        {rating}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
