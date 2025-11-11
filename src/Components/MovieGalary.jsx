import React, { useEffect, useState } from 'react'
import CategoriesNav from './CategoriesNav';
import toast from 'react-hot-toast';
import MovieCard from './MovieCard';
import FeaturedSlide from './FeaturedSlide';

const MovieGalary = () => {
  const [movies, setMovies] = useState([]);

  // A loading theme when fetching movies data
  const [loading, setLoading] = useState(true);

  // Keep the value of selected Category
  const [selectCategory, setSelectCategory] = useState("All");

  // Movie data card showing limitation 8/all
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch('/Movies.json')
      .then(res => res.json())
      .then(data => setMovies(data))

      // If failed to fetch data then a toast message
      .catch((error) => {
        toast.error("Failed to load Movie Data!!!")
      })

      // After fetching data successfully no needs to Loading
      .finally(() => setLoading(false))

  }, [])

  const categories = ["All", ...new Set(movies.map(m => m.category))]
  const filterMovies = selectCategory === "All" ? movies : movies.filter(m => m.category === selectCategory)
  const visibleMovies = showAll ? filterMovies : filterMovies.slice(0, 12)

  return (
    <div className='w-11/12 mx-auto py-10'>

      {/* Featureed Slider  */}
      <div className="py-4">
        <p className='text-lg lg:text-2xl pb-8'>FEATURED MOVIES</p>
        <div className=' pb-8'>
          {
            <FeaturedSlide key={movies.id} movies={movies}></FeaturedSlide>
          }
        </div>
      </div>

      {/* Category Navbar  */}
      <p className='text-lg lg:text-2xl'>RECOMANDED FOR YOU</p>
      <CategoriesNav
        categories={categories}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      ></CategoriesNav>

      {/* Movie Card  */}
      {
        loading ?
          (<div className='flex justify-center items-center h-64'>
            <span className="loading loading-dots loading-xl text-orange-500"></span>
          </div>)
          : filterMovies.length > 0 ?
            (
              <>
                <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 mx-8'>
                  {
                    visibleMovies.map(movie => (
                      <MovieCard key={movie.id} movie={movie}></MovieCard>
                    ))
                  }
                </div>
                {
                  filterMovies.length > 10 && (
                    <div className='flex justify-center mt-8'>
                      <button
                      className='px-6 py-2 bg-orange-500 text-black font-bold rounded-full hover:bg-orange-400 transition-all duration-300'
                      onClick={()=>setShowAll(!showAll)}
                      >{showAll?"Show Less":"Show More"}</button>
                    </div>
                  )
                }
              </>
            ) : (
              <p className='text-gray-400 text-center'>No Movies Found</p>
            )
      }

    </div>
  )
}

export default MovieGalary
