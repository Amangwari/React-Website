import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-section">
      <h2>Shop Our Snacks by Categories</h2>
      <div className="img-ext">
          <img className="img-2" src="./images/wavegrey.png" alt="wavegrey" />
        </div>
      <div className="categories-box">
        <div className="categorybox" id="category-box1">
          <div className="category-content">
            <span>Get Up to 20% off</span>
            <h5>Flavoured Roasted Makhana</h5>
            <button className="btn-category">Shop Now</button>
          </div>
          <img src="../images/chips2.png" alt="" />
        </div>
        <div className="categorybox" id="category-box3">
          <div className="category-content">
            <span>Get Up to 10% off</span>
            <h5> Quinoa Puff</h5>
            <button className="btn-category">Shop Now</button>
          </div>
          <img src="../images/salt.png" alt="" />
        </div>
        <div className="categorybox" id="category-box2">
          <div className="category-content">
            <span>Get Up to 30% off</span>
            <h5>Jawar Puff</h5>
            <button className="btn-category">Shop Now</button>
          </div>
          <img src="../images/chips1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
