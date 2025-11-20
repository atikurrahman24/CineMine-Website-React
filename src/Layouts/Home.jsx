import { Toaster } from 'react-hot-toast'
import NavBar from '../Components/NavBar/NavBar'
import BannerCarousel from '../Components/BannerCarousel'
import Footer from '../Components/Footer'
import NewsGalary from '../Components/News/NewsGalary'


const Home = () => {
  return (
    <div>
      <Toaster position='top-right'></Toaster>
      <NavBar></NavBar>
      <BannerCarousel></BannerCarousel>
      <main>
        <NewsGalary></NewsGalary>
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  )
}

export default Home
