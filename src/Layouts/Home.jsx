import { Toaster } from 'react-hot-toast'
import NavBar from '../Components/NavBar/NavBar'
import BannerCarousel from '../Components/BannerCarousel'
import MovieGalary from '../Components/MovieGalary'
import Footer from '../Components/Footer'
import { useState } from 'react'


const Home = () => {
  const [results, setResults] = useState ("")
  return (
    <div>
      <Toaster position='top-right'></Toaster>
      <NavBar results={results} setResults={setResults}></NavBar>
      <BannerCarousel></BannerCarousel>
      <main>
        <MovieGalary results={results}></MovieGalary>
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  )
}

export default Home
