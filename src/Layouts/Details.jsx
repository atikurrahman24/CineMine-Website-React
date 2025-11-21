import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        const m = data.find((item) => item.id === parseInt(id));
        setMovie(m);
      });
  }, [id]);

  if (!movie) return <p className="p-5">Loading...</p>;

  return (
    <div className="p-5 max-w-4xl mx-auto bg-[#051e3d85] rounded-2xl shadow-md font-mon">
      <img src={movie.card_picture} alt={movie.title} className="w-full h-96 object-cover rounded-lg mb-5" />
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-400 mb-3">{movie.description}</p>
      <div className="flex flex-wrap gap-4 text-sm mb-3">
        <p className="bg-orange-400 text-black font-bold px-2 rounded">Platform: {movie.platform}</p>
        <p className="bg-gray-700 text-white px-2 rounded">Director: {movie.director}</p>
        <p className="bg-gray-700 text-white px-2 rounded">Genre: {movie.genre}</p>
        <p className="bg-gray-700 text-white px-2 rounded">Duration: {movie.duration}</p>
        <p className="flex items-center gap-1 bg-gray-700 text-white px-2 rounded">Rating: {movie.rating} ⭐</p>
        <p className="bg-gray-700 text-white px-2 rounded">Released: {movie.released_date}</p>
      </div>
    </div>
  );
};

export default Details;
