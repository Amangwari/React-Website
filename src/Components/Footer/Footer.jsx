import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="Footer-content">
        <div className="footer-left">
          <h4>Talk To Us</h4>
          <p>
            Find a location nearest to you. See <br /> <Link>Our Stores</Link>
          </p>
          <p className="tel-numb">+91 8767676788</p>
          <p style={{ fontWeight: "700" }}>Snacksutra@gmail.com</p>
        </div>
        <div className="footer-center">
          <h4>Company</h4>

          <p>About Us</p>
          <p>Store locations</p>
          <p>News & Blogs</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-center-center">
          <h4>Shop</h4>

          <p>Flavoured Roasted Makhana</p>
          <p>Quinoa Puff</p>
          <p>Jowar Puff</p>
        </div>
        <div className="footer-right">
          <h4>Information</h4>

          <p>Terms & Conditions</p>
          <p>Privacy & Popcy</p>
          <p>Shipping Popcy</p>
          <p>Returns Ploicy</p>
        </div>
      </div>
      <hr style={{ color: "#c3c3c3" }} />
      <div className="sub-footer">
        <div className="Copyright-sec">
          Copyright &#169; Snacksutra.com 2023. All rights reserved. Website
          Design by <img src="../images/betalogo.png" alt="logo" />
        </div>
        <div className="payment-sec">
          <img src="../images/card.png" alt="cards" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
