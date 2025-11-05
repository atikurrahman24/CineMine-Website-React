import { Toaster } from 'react-hot-toast'
import NavBar from '../Components/NavBar/NavBar'
import BannerCarousel from '../Components/BannerCarousel'
import MovieGalary from '../Components/MovieGalary'

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
