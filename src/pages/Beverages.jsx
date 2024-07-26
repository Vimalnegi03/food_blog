import React from 'react';
import './style.css'

import Tea from '../assets/Tea 3.jpg'
import cold from '../assets/cold coffee.webp'
import banana from '../assets/banana shake.jpg'
const Beverages = () => (
  <section id="food">
    <h2>Beverages</h2>
    <div className="food-container container">
      <div className="food-type fruite">
        <div className="img-container">
          <img src={Tea} height="900" width="800" alt="error" />
          <div className="img-content">
            <h3>Tea</h3>
            <a href="https://en.wikipedia.org/wiki/tea" className="btn btn-primary" target="blank">learn more</a>
          </div>
        </div>
      </div>
      <div className="food-type vegetable">
        <div className="img-container">
          <img src={cold} height="1000" width="1000" alt="error" />
          <div className="img-content">
            <h3>Cold Coffee</h3>
            <a href="https://en.wikipedia.org/wiki/iced coffee" className="btn btn-primary" target="blank">learn more</a>
          </div>
        </div>
      </div>
      <div className="food-type grin">
        <div className="img-container">
          <img src={banana} height="1000" width="1000" alt="error" />
          <div className="img-content">
            <h3>Banana Shake</h3>
            <a href="https://www.indianhealthyrecipes.com/banana-milkshake-recipe/" className="btn btn-primary" target="blank">learn more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Beverages;
