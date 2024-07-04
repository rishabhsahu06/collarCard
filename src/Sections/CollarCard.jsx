import React from 'react'
import logo from "../assets/logo.png"
import "./CollarCard.css"

function CollarCard() {
  return (
    <>
   <div className="collar-card-img">
   <img src={logo} alt="logo" />
   </div>

<div className="phone-card">
<ul>
    <li><i class="fa-solid fa-square-phone"></i>|</li>
    <li>(310)472- <br /> 5476 |</li>
    <li><i class="fa-solid fa-envelope-open-text"></i> sales@collarcard.com</li>
</ul>
</div>


    <ul className='collar-card-container'>
        <li>Home</li>
        <li>About us</li>
        <li>Clients</li>
        <li>Parents</li>
        <li>FAQs</li>
        <li>Contact</li>
    </ul>


    </>
  )
}

export default CollarCard