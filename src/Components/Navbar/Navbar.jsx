import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="navbar-section">
      <div className="logo">
        <Link to="/">
          <img src="../images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>

          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/">News & Blogs</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>

        <div className="searchBar">
          <input
            id="searchQueryInput"
            type="text"
            name="searchQueryInput"
            placeholder="Search"
          />
          <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="#666666"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="cart-section">
        <div className="search-icon-div">
          <div className="search-box">
            <input
              className="search-txt"
              type="text"
              name=""
              placeholder="Type to Search"
            />
            <Link className="search-btn" to="/">
              <BiSearch />
            </Link>
          </div>
        </div>
        <div className="icon-div iconback">
          <RiUser3Line size={20} className="iconn" />
        </div>
        <div className="icon-div iconback">
          <AiOutlineHeart size={20} className="iconn" />
        </div>
        <div id="iconcart" className="icon-div iconback">
          <AiOutlineShoppingCart size={20} className="iconn" />
          <span className="badge">3</span>
        </div>
        <span className="price">$0.00</span>
      </div>

      <a
        // className="btn btn-primary"
        className="hambtn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <Hamburger className="hamburgurBtn" toggled={isOpen} toggle={setOpen} />
      </a>

      <div
        className="offcanvas offcanvas-end w-75 p-3"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            <img
              style={{ height: "auto", width: "100px", marginLeft: "5rem" }}
              src="../images/logo.png"
              alt="img"
            />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="hamList">
            <ul>
              <li>Home</li>
              <hr />
              <li>About Us</li>
              <hr />
              <li>Shop</li>
              <hr />
              <li>News & Blogs</li>
              <hr />
              <li>FAQ</li>
              <hr />
              <li>Contact Us</li>
              <hr />
              <li>About Us</li>
              <hr />
              <li>My Account</li>
              <hr />
              <li>My Wishlist</li>
              <hr />
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
