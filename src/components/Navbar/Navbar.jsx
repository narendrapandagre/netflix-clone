import React, { useRef, useEffect } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
const navref = useRef();
  useEffect(()=> {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add('nav-dark');
      } else {
        navref.current.classList.remove('nav-dark');
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    } 
  })

  const navigate = useNavigate();
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
    <div ref={navref} className='navbar'>
        <div className="navbar-left">
           <img src={logo} alt='Netflix Logo' onClick={() => navigate('/')}/>
           <ul>
              <li onClick={() => navigate('/')}>Home</li>
              <li onClick={() => navigate('/')}>TV Show</li>
              <li onClick={() => navigate('/')}>Movies</li>
              <li onClick={() => navigate('/')}>New & Popular</li>
              <li onClick={handleMyList}>My List</li>
              <li onClick={() => navigate('/')}>Browse by Languages</li>
           </ul>
        </div>  
        <div className="navbar-right">
           <img src={search_icon} alt='' className='icons' onClick={handleSearch}/>
           <p onClick={() => navigate('/')}>Clildren</p>
           <img src={bell_icon} alt='' className='icons'/>
           <div className="navbar-profile">
              <img src={profile_img} alt='' className='profile'/>
              <img src={caret_icon} alt='' />
              <div className="dropdown">
                <p onClick={handleSignOut}>Sign Out of Netflix</p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar