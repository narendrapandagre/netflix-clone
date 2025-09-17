import React, { useRef, useEffect } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navref = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add('nav-dark');
      } else {
        navref.current.classList.remove('nav-dark');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const handleSearch = () => {
    navigate('/search');
  }

  const handleMyList = () => {
    navigate('/mylist');
  }

  return (
    <div className='navbar'>
      <div ref={navref} className="nav-content">
        <div className="navbar-left">
          <img src={logo} alt='Netflix Logo' onClick={() => navigate('/')} />

          <ul>
            <li 
              className={location.pathname === "/" ? "active" : ""} 
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li 
              className={location.pathname === "/tv" ? "active" : ""} 
              onClick={() => navigate('/tv')}
            >
              TV Show
            </li>
            <li 
              className={location.pathname === "/movies" ? "active" : ""} 
              onClick={() => navigate('/movies')}
            >
              Movies
            </li>
            <li 
              className={location.pathname === "/new" ? "active" : ""} 
              onClick={() => navigate('/new')}
            >
              New & Popular
            </li>
            <li 
              className={location.pathname === "/mylist" ? "active" : ""} 
              onClick={handleMyList}
            >
              My List
            </li>
            <li 
              className={location.pathname === "/languages" ? "active" : ""} 
              onClick={() => navigate('/languages')}
            >
              Browse by Languages
            </li>
          </ul>
        </div>  

        <div className="navbar-right">
          <img src={search_icon} alt='' className='icons' onClick={handleSearch}/>
          <p onClick={() => navigate('/children')}>Children</p>
          <img src={bell_icon} alt='' className='icons'/>
          <div className="navbar-profile">
            <div className="nav-profile">
              <img src={profile_img} alt='' className='profile'/>
            </div>
            <img src={caret_icon} alt='' />
            <div className="dropdown">
              <p onClick={handleSignOut}>Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
