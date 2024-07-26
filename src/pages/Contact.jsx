import React from 'react';
import './style.css'
import monal from  '../assets/monal contact us.jpg'
const Contact = () => (
  <section id="contact">
    <div className="contact-container container">
      <div className="contact-img">
        <img src={monal} alt="" />
      </div>
      <div className="form-container">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="E-Mail" />
        <textarea cols="30" rows="6" placeholder="Type Your Message"></textarea>
        <a href="mailto:vimalnegi2003@gmail.com" className="btn btn-primary">Submit</a>
      </div>
    </div>
  </section>
);

export default Contact;
