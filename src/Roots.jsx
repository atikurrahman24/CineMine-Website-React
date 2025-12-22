import { Outlet } from 'react-router'
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
