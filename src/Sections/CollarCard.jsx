import React from 'react';
import logo from '../assets/logo.png';
import './CollarCard.css';
import { Link } from 'react-scroll';

function CollarCard() {
  return (
    <div className="collar-card-container">
      <div className="collar-card-img">
        <img src={logo} alt="logo" />
      </div>

      <div className="phone-card">
        <ul>
          <li><i className="fa-solid fa-square-phone"></i></li>
          <li className='li-border'>(310) 472- <br /> 5476</li>
          <li><i className="fa-solid fa-envelope-open-text"></i>&nbsp;sales@collarcard.com</li>
        </ul>
      </div>

      <ul className="menu-list cursor-pointer">
      <li>
        <Link to="home" smooth={true} duration={600}>Home</Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={600}>About us</Link>
      </li>
      <li>
        <Link to="clients" smooth={true} duration={600}>Clients</Link>
      </li>
      <li>
        <Link to="patents" smooth={true} duration={600}>Patents</Link>
      </li>
      <li>
        <Link to="faq" smooth={true} duration={600}>FAQs</Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={600}>Contact</Link>
      </li>
    </ul>
    </div>
  );
}

export default CollarCard;
