import React, { useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import hero_banner from '../../assets/background_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitileCards from '../../components/TitileCards/TitileCards'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Blackbuster Movies",
    "Only on Netflix",
    "Upcoming",
    "Top Pics for You"
  ];

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="Rocket Icon" className='caption-img' />
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          <div className="hero-btns">
            <button className='btn btn-primary' onClick={() => navigate('/player/1')}>
              <img src={play_icon} alt="Play Icon" className='btn-icon' />
              Play
            </button>
            <button className='btn dark-btn' onClick={() => navigate('/player/1')}>
              <img src={info_icon} alt="Info Icon" className='btn-icon' />
              Learn More
            </button>
          </div>

          <TitileCards />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="category-bar">
        {categories.map((cat, index) => (
          <button 
            key={index} 
            className={`cat-btn ${selectedCategory === cat ? "active" : ""}`} 
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Conditionally Render Cards */}
      <div className="more-cards">
        {(selectedCategory === "All" || selectedCategory === "Blackbuster Movies") && (
          <TitileCards title={"Blackbuster Movies"} />
        )}
        {(selectedCategory === "All" || selectedCategory === "Only on Netflix") && (
          <TitileCards title={"Only on Netflix"} />
        )}
        {(selectedCategory === "All" || selectedCategory === "Upcoming") && (
          <TitileCards title={"Upcoming"} />
        )}
        {(selectedCategory === "All" || selectedCategory === "Top Pics for You") && (
          <TitileCards title={"Top Pics for You"} />
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Home
