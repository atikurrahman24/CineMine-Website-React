import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { IoMdArrowDropright } from "react-icons/io";

const SearchResults = ({ results = "", movies = [] }) => {

  const query = results.toLowerCase();

  if (!query) {
    return null;
  }

  const filterData = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );

  if (filterData.length === 0) {
    return <p className="text-gray-400 text-3xl font-met text-center py-6">No results found 😢</p>;
  }

  return (
    // main desing 
    <div>
      <p className="text-lg lg:text-2xl font-met pb-8">HERE YOUR RESULTS...</p>
      <div className="flex flex-wrap gap-4 p-4 justify-center">

        {filterData.map((movie) => (
          <div key={movie.id} className='p-2 w-60'>
            <div className='bg-[#20171083] font-mon flex flex-col border border-gray-700 rounded-2xl gap-3 py-3 transition-transform duration-300 hover:scale-105'>

              <img src={movie.card_picture} alt={movie.title} className=' h-50 mx-auto object-contain rounded-lg' />
              <div className='py-1 flex flex-col gap-1 px-10 sm:px-6 md:px-6 lg:px-6 xl:px-6'>
                <h3 className='text-lg  line-clamp-1 overflow-hidden'>{movie.title}</h3>
                <p className="text-xs line-clamp-3 overflow-hidden text-gray-500">{movie.description}</p>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
