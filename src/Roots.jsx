import React from 'react'
import Home from './Layouts/Home'
import { Outlet } from 'react-router'
import NavBar from './Components/NavBar/NavBar'

const Roots = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}

export default Roots
