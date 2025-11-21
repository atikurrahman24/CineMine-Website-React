import { Outlet } from 'react-router'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer'

const Roots = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Roots
