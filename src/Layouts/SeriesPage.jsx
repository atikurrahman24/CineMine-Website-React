import React from 'react'
import Series from '../Components/Series'
import NavBar from '../Components/NavBar/NavBar'

const SeriesPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='mt-10'>
        <Series></Series>
      </div>
    </div>
  )
}

export default SeriesPage
