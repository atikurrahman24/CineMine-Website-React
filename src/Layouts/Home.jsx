import { Toaster } from 'react-hot-toast'
import NavBar from '../Components/NavBar/NavBar'
import BannerCarousel from '../Components/BannerCarousel'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <Toaster position='top-right'></Toaster>
      <NavBar></NavBar>
      <BannerCarousel></BannerCarousel>
      
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  )
}

export default Home
