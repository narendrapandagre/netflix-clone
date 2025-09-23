import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import myListData from '../../data/myListData';
import Slider from "react-slick";
import { FaPlay, FaPlus, FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Mylist.css';
import dummyImage from "../../assets/dummy.avif";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";

const banners = [
  { id: 1, image: banner1, title: "Banner 1", genres: ["Drama"], year: "2024", rating: "PG-13" },
  { id: 2, image: banner2, title: "Banner 2", genres: ["Action"], year: "2023", rating: "TV-MA" },
  { id: 3, image: banner3, title: "Banner 3", genres: ["Sci-Fi"], year: "2022", rating: "PG" },
  { id: 4, image: banner4, title: "Banner 4", genres: ["Thriller"], year: "2021", rating: "R" }
];


const Mylist = () => {
  const [myList, setMyList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sliderItems, setSliderItems] = useState([]);
  const [userList, setUserList] = useState([]); // 🔹 User ke saved list ke liye

  useEffect(() => {
    setMyList(myListData);
    setFilteredList(myListData);

    // 🔹 Slider ke liye ek ek item
    const movies = myListData.find(item => item.duration.includes("h"));
    const tvshows = myListData.find(item => item.duration.includes("Seasons"));
    const anime = myListData.find(item => item.genres.includes("Anime"));
    const docs = myListData.find(item => item.genres.includes("Documentary"));

    const sliderData = [movies, tvshows, anime, docs].filter(Boolean);
    setSliderItems(sliderData);

    // LocalStorage check
    const savedList = JSON.parse(localStorage.getItem("myList")) || [];
    setUserList(savedList);
  }, []);

  // 🔹 Add/Remove from My List
  const toggleMyList = (item) => {
    let updatedList;
    if (userList.some(m => m.id === item.id)) {
      updatedList = userList.filter(m => m.id !== item.id);
    } else {
      updatedList = [...userList, item];
    }
    setUserList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  // 🔹 Filter function
  const handleFilter = (filter) => {
    setSelectedFilter(filter);

    if (filter === "All") {
      setFilteredList(myList);
    } else if (filter === "TV Shows") {
      setFilteredList(myList.filter(item => item.duration.includes("Seasons")));
    } else if (filter === "Movies") {
      setFilteredList(myList.filter(item => item.duration.includes("h")));
    } else if (filter === "Anime") {
      setFilteredList(myList.filter(item => item.genres.includes("Anime")));
    } else if (filter === "Documentaries") {
      setFilteredList(myList.filter(item => item.genres.includes("Documentary")));
    } else if (filter === "Recently Added") {
      setFilteredList([...myList].sort((a, b) => b.year - a.year));
    } else if (filter === "My List") {
      setFilteredList(userList);
    }
  };

  // 🔹 Custom Arrows
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}><FaChevronRight /></div>
  );
  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}><FaChevronLeft /></div>
  );
  
  // 🔹 Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='mylist'>
      <Navbar />

      {/* 🔹 Top Slider */}
      <div className="mylist-slider">
        <Slider {...sliderSettings}>
          {banners.map(item => (
            <div className="slider-card" key={item.id}>
              <img src={item.image} alt={item.title} className="slider-image" />
              <div className="slider-overlay">
                <h2>{item.title}</h2>
                <p>{item.genres.join(", ")}</p>
                <p>{item.year} • {item.rating}</p>

                <div className="slider-buttons">
                  <button className="play-btn">
                    <FaPlay /> Play
                  </button>
                  <button className="list-btn" onClick={() => toggleMyList(item)}>
                    {userList.some(m => m.id === item.id) ? (
                      <><FaCheck /> My List</>
                    ) : (
                      <><FaPlus /> My List</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>

      <div className="mylist-container">
        <h1 className='title-text'>My List</h1>

        {/* 🔹 Controls */}
        <div className="mylist-controls">
          <div className="mylist-filter">
            {["All", "TV Shows", "Movies", "Anime", "Documentaries", "Recently Added", "My List"].map(filter => (
              <button
                key={filter}
                className={selectedFilter === filter ? "active" : ""}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 Cards */}
        <div className="mylist-cards">
          {filteredList.length === 0 ? (
            <p>No results found.</p>
          ) : (
            filteredList.map(movie => (
              <div className="mylist-card" key={movie.id}>
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className='cardlist'
                  onError={(e) => e.currentTarget.src = dummyImage} 
                />

                {/* Title हमेशा दिखे */}
                <div className="mylist-card-title">
                  {movie.title}
                </div>

                {/* बाकी details hover पर */}
                <div className="mylist-card-info">
                  <p>{movie.year}</p>
                  <p>{movie.rating}</p>
                  <p>{movie.duration}</p>
                  <p>{movie.genres.join(', ')}</p>
                  <p>{movie.score}</p>
                </div>
              </div>

            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mylist;
