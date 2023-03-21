import React from "react";
import Categories from "../Components/Categories/Categories";
import Products from "../Components/ProductsCrowsel/Products";
import Testinomial from "../Components/Testinomials/Testinomial";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-banner">
          <img src="../images/banner.png" alt="" />
        </div>
        <div className="banner-txt">
          <h3>Welcome to Snacksutra</h3>
          <h1>THAI SWEET CHILLI</h1>
          <h4>100% Gluten Free & Anti-Oxident</h4>
          <button className="banner-btn">Shop Now</button>
        </div>
      </div>

      {/*  */}
      <div className="content-main">
        <div className="content-box">
          <h2>The World's Yummy Snack Brands </h2>
          <div className="img-ext">
          <img className="img-2" src="./images/wavegrey.png" alt="wavegrey" />
        </div>
          <div className="box">
            <div className="yummybox">
              <img src="../images/badge.png" alt="" />
              <h4>High quality</h4>
              <p>
                SnackSutra crafts High Quality Snacks that helps you achieve you
                fitness goals
              </p>
            </div>
            <div className="yummybox">
              <img src="../images/settings.png" alt="" />
              <h4>Carefully Crafted</h4>
              <p>Made with utmost attention to quality/process/hygiene</p>
            </div>
            <div className="yummybox">
              <img src="../images/diet.png" alt="" />
              <h4>Healthy Ingredients</h4>
              <p>
                High quality Ingredients with nutritional profile that is 'good
                for you'.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <Categories />

      {/* Products Section */}
      <Products />

      {/* How it Works */}
      <div className="working">
        <h2>How It Works</h2>
        <div className="img-ext">
          <img className="img-2" src="./images/waveyellow.png" alt="wavegrey" />
        </div>

        <div className="working-card">
          <div className="card">
            <img src="../images/shop.png" alt="shop" />
            <small>Step 1</small>
            <h5>Choose your product</h5>
            <p>Smart filtering and suggestions make it easy to find.</p>
          </div>
          <div className="card">
            <img src="../images/cart.png" alt="shop" />
            <small>Step 2</small>
            <h5>Add to bag</h5>
            <p>Easily select the correct items and add then to cart.</p>
          </div>
          <div className="card">
            <img src="../images/delivery.png" alt="shop" />
            <small>Step 3</small>
            <h5>Free Shipping</h5>
            <p>The carrier will confirm and ship quickly to you.</p>
          </div>
          <div className="card">
            <img src="../images/costumer.png" alt="shop" />
            <small>Step 4</small>
            <h5>Enjoy the product</h5>
            <p>Have fun and enjoy your 5-star quality products.</p>
          </div>
        </div>
      </div>

      {/* Testinomial */}
      <Testinomial/>
    </>
  );
};

export default Home;
