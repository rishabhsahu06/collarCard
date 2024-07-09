import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>
    <div className="contact-us">
        <h2>Get in touch</h2>
        <h1>Contact us</h1>
        <p>Please fill out our form, call us, or email us – <br />
        and we will get back to you as soon as we can.</p>
        <span><p className='num'>(310) 472-5476 | sales@collarcard.com</p></span>

        <div className="input-container">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />

            <input type="number" placeholder='Phone' />

            <input type="text" placeholder='Message' />
            <button>Submit</button>

        </div>
    </div>
    </div>
  )
}

export default Contact