import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Mylist.css';

const Mylist = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    // Example: Get saved list from localStorage
    const storedList = JSON.parse(localStorage.getItem('myList')) || [];
    setMyList(storedList);
  }, []);

  return (
    <div className='mylist'>
      <Navbar />
      <div className="mylist-container">
        <h1 className='title-text'>My List</h1>
        <div className="mylist-controls">
          <div className="mylist-filter">
            <button>All</button>
            <button>TV Shows</button>
            <button>Movies</button>
            <button>Anime</button>
            <button>Documentaries</button>
            <button>Recently Added</button>
            <button>My List</button>
          </div>
          <div className="mylist-sort">
            <span>Sort by:</span>
            <button>Release Date</button>
            <button>Rating</button>
            <button>Recently Added</button>
          </div>
        </div>

        <div className="mylist-cards">
          {myList.length === 0 ? (
            <p>Your list is empty.</p>
          ) : (
            myList.map(movie => (
              <div className="mylist-card" key={movie.id}>
                <img src={movie.image} alt={movie.title} className='cardlist' />
                <div className="mylist-card-info">
                  <h2>{movie.title}</h2>
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
