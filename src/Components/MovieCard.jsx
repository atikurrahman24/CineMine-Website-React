

const MovieCard = ({movie}) => {
  return (
    <div className='font-mon transition-transform duration-300 hover:scale-105'>
        <img src={movie.card_picture} alt={movie.title} />
        
    </div>
  )
}

export default MovieCard
