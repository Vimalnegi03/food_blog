import React from 'react';
import './style.css'
import aloo_paratha from '../assets/aloo paratha.webp'
import bread from '../assets/bread-omelette.jpg'
import chilli from '../assets/chilli potato.jpg'
import chole from '../assets/chole bhature.jpg'
import paneer from '../assets/paneer roll.jpg'
import rajma from '../assets/rajma chawal.jpg'

const Menu = () => (
  <section id="food-menu">
    <h2 className="food-menu-heading">Aaj Khaane Mein Kya Hai?</h2>
    <div className="food-menu-container container">
      <div className="food-menu-item">
        <div className="food-img">
          <img src={bread} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-title">Bread Omelette</h2>
          <p>The recipe is made from fresh eggs and is well served with tomato ketchup.</p>
          <p className="food-price">Price: &#8377; 35</p>
          <div className="btn-container">
            <button className="btn" id="addToCartBtn1"><a href="Order" target="_main">Order Now</a></button>
          </div>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={rajma} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-title">Rajma Chawal</h2>
          <p>Every Indian's first choice for lunch, served hot!</p>
          <p className="food-price">Price: &#8377; 50</p>
          <div className="btn-container">
          <button className="btn" id="addToCartBtn1"><a href="Order" target="_main">Order Now</a></button>
          </div>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={aloo_paratha} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-title">Aloo Paratha</h2>
          <p>Eat the best Aloo Paratha in the campus, here at Monal Fast Food corner.</p>
          <p className="food-price">Price: &#8377; 60</p>
          <div className="btn-container">
            <button className="btn" id="addToCartBtn1"><a href="Order" target="_main">Order Now</a></button>
          </div>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={paneer} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-title">Paneer Roll</h2>
          <p>Vegetarian heaven, crispy Paneer rolls are now available.</p>
          <p className="food-price">Price: &#8377; 50</p>
          <div className="btn-container">
            <button className="btn" id="addToCartBtn1"><a href="Order" target="_main">Order Now</a></button>
          </div>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={chilli} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-title">Chilli Potato</h2>
          <p>Who can miss this Chinese fast food recipe when hanging out with family or friends at our restaurant, try now.</p>
          <p className="food-price">Price: &#8377; 90</p>
          <div className="btn-container">
            <button className="btn" id="addToCartBtn1"><a href="Order" target="_main" >Order Now</a></button>
          </div>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={chole} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-title">Chole Bhature</h2>
          <p>One of the most liked North Indian food that everyone has once tasted in their lifetime, go on and have a bite.</p>
          <p className="food-price">Price: &#8377; 60</p>
          <div className="btn-container">
            <button className="btn" id="addToCartBtn1"><a href="Order" target="_main" >Order Now</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;
