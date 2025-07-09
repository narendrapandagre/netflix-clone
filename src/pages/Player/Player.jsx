import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const navigate = useNavigate();
  const {id} = useParams(); 
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://netflix-backend-production-1234.up.railway.app/movie/${id}`) //TODO: change to the actual url
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [id]);
  return (    
    <div className='player'>
        <img
            src={back_arrow_icon}
            alt="Back"
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
        />

        <iframe width="90%" height="90%" 
        src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=1234567890'
        title='trailer'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen></iframe>
        
        <div className="player-info">
            <img src={back_arrow_icon} alt="" onClick={() => navigate(-1)} />
            <div className="player-info-left-text">
              <h1>{movie?.name}</h1>
              <p>{movie?.description}</p>
            </div>
            <div className="player-info-right-text">
              <p>{movie?.year}</p>
              <p>{movie?.genre}</p>
              <p>{movie?.rating}</p>
            </div>
        </div>

    </div>
  )
}

export default Player