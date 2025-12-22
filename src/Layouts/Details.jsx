import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

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
    <div className="p-5 w-11/12 mx-auto bg-[url('/Banners/banner6.jpg')] bg-black/80 bg-blend-overlay bg-cover rounded-2xl shadow-md font-mon">
      <NavBar></NavBar>
      <div className="grid grid-cols-4 mt-24">

        {/* image  */}
        <div>
          <img src={movie.card_picture} alt={movie.title} className="w-full h-[70vh] object-cover rounded-lg mb-5 border-2 border-gray-500" />
        </div>

        {/* details  */}
        <div className="col-span-2 pl-5">
          <h1 className="text-3xl font-met mb-2">{movie.title}</h1>
          <div className="flex gap-6">
            <p className="text-yellow-400 font-bold  mb-3">{movie.audio.join(" | ")}</p>
            <p className="font-semibold">Quality: <span className="hover:text-orange-500">{movie.video_quality.join(" | ")}</span></p>
          </div>
          <p className="text-gray-300 mb-5">{movie.description}</p>
          <div className="border-b border-white mr-2 my-2"></div>
          <div className="flex flex-wrap gap-4 text-sm my-3">
            <p className="bg-orange-400 text-black font-bold px-2 rounded">Platform: {movie.platform}</p>
            <p className="bg-gray-700 text-white px-2 rounded">Genre: <span className="text-green-400">{movie.genres.join(" | ")}</span></p>
            <p className="bg-gray-700 text-white px-2 rounded">From: <span className="text-green-400 font-bold">{movie.category}</span></p>
            <p className="flex items-center gap-1 bg-gray-700 text-white px-2 rounded">Rating: <span className="text-yellow-500">{movie.rating} ⭐</span></p>
            <p className="bg-gray-700 text-white px-2 rounded">Released: {movie.released_date}</p>
          </div>
          <div className="border-b border-white mr-2 my-2"></div>
          <p className="text-gray-100 mt-3">Cast: <span className="text-blue-400 font-semibold">RDJ , Crish Evan , Crish Hemsworth , Natasa Romanof</span></p>
          <p className="text-md font-semibold text-white">Description: <span className="text-sm text-gray-400 line-clamp-12 overflow-hidden">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni in commodi similique maxime nobis autem exercitationem tempora aut consectetur! Suscipit iure adipisci, veritatis, dolore reprehenderit excepturi eveniet esse error voluptas cupiditate labore facere fugit est! Vel veritatis reprehenderit nostrum voluptatem ex laborum consectetur et! Sequi debitis explicabo labore at corrupti a amet fugit dignissimos consequatur dicta quaerat repellendus cupiditate ipsum reprehenderit, hic veniam! Corrupti aut natus voluptatibus ducimus, iste, placeat sequi blanditiis nemo magni rem sed quos vel pariatur minima vero dolores, eveniet reprehenderit fugit itaque asperiores quaerat nisi molestias animi incidunt. Recusandae velit omnis provident tenetur illum eveniet optio doloribus doloremque ad vel, quisquam quaerat dolorem cum excepturi eaque dignissimos fugiat pariatur nemo modi officia voluptates tempora possimus. Qui, temporibus dolorem. Necessitatibus officia molestiae sint voluptatem, corporis optio libero a esse alias! Voluptates, veniam maxime? Eligendi maxime voluptas repudiandae ipsum dicta impedit ratione molestiae cumque pariatur nihil voluptatum, quaerat quae assumenda amet cupiditate inventore officia totam explicabo ut ad esse laboriosam? Dignissimos cupiditate voluptates quae, enim, aliquam repellat explicabo nisi, et ipsum consequatur eos? Nesciunt beatae nulla quae, nostrum reiciendis fugit quis labore corrupti culpa! Autem exercitationem expedita sint repellendus nesciunt illo, eligendi, nihil enim, laudantium animi ratione. Dolorem.</span></p>
          <div>

          </div>
        </div>

        {/* buttons  */}
        <div className="flex flex-col justify-start items-end gap-4 mt-20 mx-6">
          <button className="border border-orange-400 bg-black/50 text-white font-bold w-full py-2 rounded hover:bg-orange-500 transition">
            Watch Now
          </button>
          <button className="border border-orange-400 bg-black/50 text-white font-bold w-full py-2 rounded hover:bg-orange-500 transition">
            Stream Now
          </button>
          <button className="border border-orange-400 bg-black/50 text-white font-bold w-full py-2 rounded hover:bg-orange-500 transition">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
