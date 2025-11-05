import React, { useEffect, useState } from 'react'
import CategoriesNav from './CategoriesNav';
import toast from 'react-hot-toast';
import MovieCard from './MovieCard';

const MovieGalary = () => {
    const [movies, setMovies] = useState([]);

    // A loading theme when fetching movies data
    const [loading, setLoading] = useState(true);

    // Keep the value of selected Category
    const [selectCategory, setSelectCategory] = useState("All");

    // Movie data card showing limitation 8/all
    const [showAll, setShowAll] = useState(false)

    useEffect(()=>{
        fetch('/Movies.json')
        .then(res => res.json())
        .then(data => setMovies(data))

        // If failed to fetch data then a toast message
        .catch((error)=>{
            toast.error("Failed to load Movie Data!!!")
        })

        // After fetching data successfully no needs to Loading
        .finally(() => setLoading(false))

    },[])

    const categories =["All", ...new Set(movies.map(m => m.category))]
    const filterMovies = selectCategory === "All" ? movies : movies.filter(m => m.category === selectCategory)
    const visibleMovies = showAll ? filterMovies : filterMovies.slice(0,10)

  return (
    <div className='w-11/12 mx-auto py-10'>
        <p className='text-lg lg:text-xl'>RECOMANDED FOR YOU</p>
        <CategoriesNav 
        categories={categories}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
        ></CategoriesNav>
        {
          loading ? 
          (<div className='flex justify-center items-center h-64'>
            <span className="loading loading-dots loading-xl text-yellow-500"></span>
          </div>)
          : filterMovies.length > 0 ?
          (
            <>
              <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                {
                  visibleMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                  ))
                }
              </div>
            </>
          ) : (
            <p className='text-gray-400 text-center'>No Movies Found</p>
          )
        }
    </div>
  )
}

export default MovieGalary
