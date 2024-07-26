import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './order.css';
import monalBanner from '../assets/monal_banner.jpg'; // Make sure the path is correct
import monalLogo from '../assets/monal_logo.png'; // Make sure the path is correct

function OrderSummary() {
  return (
    <main className="bg-img">
      <div className="row">
        <div className="col-lg-4" id="container-white">
          <img
            className="hero-img"
            src={monalBanner}
            alt="hero illustration"
          />
          <h1>Order Summary</h1>
          <p className="text-1">
            Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.
          </p>
          <div className="row" id="annual">
            <div className="col-sm-3">
              <img
                className="music-icon"
                src={monalLogo}
                alt="music note icon"
              />
            </div>
            <div className="col-sm-5 annual-plan">
              <h2>Total Amount</h2>
              <p className="price">&#8377; 250</p>
            </div>
            <div className="col-sm-4">
              <p className="change">Change</p>
            </div>
          </div>
          <button className="btn">
            <a href="https://www.phonepe.com/business-solutions/payment-gateway/register/?utm_source=sem_pg_exact&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745Au6WLfMWve7fRtjKD9IICEfZYg9jv2ThOPMx-gaLDVPeFunRhbOi0aAgVHEALw_wcB">
              Proceed to payment
            </a>
          </button>
          <p className="cancel">Cancel order</p>
        </div>
      </div>
    </main>
  );
}

export default OrderSummary;
