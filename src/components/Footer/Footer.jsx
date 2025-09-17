import React from 'react'
import './Footer.css'
import youtubeIcon from '../../assets/youtube_icon.png';
import facebookIcon from '../../assets/facebook_icon.png';
import twitterIcon from '../../assets/twitter_icon.png';
import instagramIcon from '../../assets/instagram_icon.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
          <img src={youtubeIcon} alt="YouTube Icons" className='footer__logo' />
          <img src={facebookIcon} alt="Facebook Icons" className='footer__logo' />
          <img src={twitterIcon} alt="Twitter Icons" className='footer__logo' />
          <img src={instagramIcon} alt="Instagram Icons" className='footer__logo' />
        </div>
        <ul>
          <li>Audio Descreiption</li>
          <li>Help Center</li>
          <li>Gift Center</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms od Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className="copyright-text">@ 1997-2025 NetMovie, Inc.</p>
    </div>
  )
}

export default Footer