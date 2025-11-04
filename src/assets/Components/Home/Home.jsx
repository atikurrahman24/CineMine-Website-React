import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../Banner/BannerCarousel'
import MovieGalary from '../MovieGalary/MovieGalary'
import NavBar from '../NavBar/NavBar'

const Home = () => {
  return (
    <div>
      <Toaster position='top-right'></Toaster>
      <NavBar></NavBar>
      <BannerCarousel></BannerCarousel>
      <main>
        <MovieGalary></MovieGalary>
      </main>

    </div>
  )
}

export default Home
