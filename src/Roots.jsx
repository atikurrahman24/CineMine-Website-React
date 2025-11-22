import { Outlet } from 'react-router'
import NavBar from './Components/NavBar/NavLogBar'
import Footer from './Components/Footer'

const Roots = () => {
  return (
    <div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Roots
