import React from 'react';
import Showcase from './Showcase';
import Beverages from './Beverages';
import Menu from './Menu';
import Contact from './Contact'
import './style.css'
const About = () => (
  <>
  <Showcase />
  <section id="about">
    <div className="about-wrapper container">
      <div className="about-text">
        <p className="small">About Us</p>
        <h2>Open : 5AM to 9PM , Hungry ? Eat anytime!</h2>
        <p><b>Address:</b> Bhagirathipuram Tehri, Tehri Garhwal Pincode-249124 Uttarakhand India</p>
      </div>
      <div className="about-img">
        <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" />
      </div>
    </div>
  </section>
  <Beverages />
  <Menu />
  <Contact />
  </>
);

export default About;