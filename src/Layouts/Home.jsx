import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../Components/BannerCarousel'
import NewsGalary from '../Components/News/NewsGalary'
import NavLogBar from '../Components/NavBar/NavLogBar'


const Home = () => {
  return (
    <div>
      <NavLogBar></NavLogBar>
      <Toaster position='top-right'></Toaster>
      <BannerCarousel></BannerCarousel>
      <main className="bg-[url('/Banners/banner3.jpg')] bg-black/80 bg-blend-overlay bg-cover">
        <NewsGalary></NewsGalary>
      </main>

    </div>
  )
}

export default Home
