import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Search.css'
import Footer from '../../components/Footer/Footer'

const Search = () => {
  return (
    <div className='search'>
        <Navbar />
        <div className="search-container">
            <input type="text" placeholder='Search' />
        </div>
        <Footer />
    </div>
  )
}

export default Search