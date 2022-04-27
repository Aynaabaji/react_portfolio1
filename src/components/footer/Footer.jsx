import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aynaaz</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.facebook.com">
          <AiOutlineFacebook className='footer__icon'/>
        </a>
        <a href="https://www.Instagram.com">
          <AiOutlineInstagram className='footer__icon'/>
        </a>
        <a href="https://www.twitter.com">
          <FiTwitter className='footer__icon'/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; <a href="https://www.github.com/aynaabaji" target="_blank" rel="noreferrer">Aynaabaji.</a> All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer