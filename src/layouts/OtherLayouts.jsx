import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'

const OtherLayouts = ({children}) => {
  return (
    <div>
      <NavBar />
      {children}
      <Pagination />
      <Footer />
    </div>
  )
}

export default OtherLayouts