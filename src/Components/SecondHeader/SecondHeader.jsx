import React from "react";
import { Link } from "react-router-dom";
import "./SecondHeader.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const SecondHeader = () => {
  return (
    <div className="secondHeader">
      <div className="helper">
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">My Account</Link>
          </li>
          <li>
            <Link to="/">My Wishlist</Link>
          </li>
          <li>
            <Link to="/">My Shopping Cart</Link>
          </li>
        </ul>
      </div>
      <div className="helperSec">
        <p>
          Need Help? Call us: <span>+0020 500</span>
        </p>

        <span className="vl"></span>

        <NavDropdown
          className="navdropdownn"
          id="nav-dropdown-dark-example"
          title="English"
          menuVariant="light"
        >
          <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">German</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">English USA</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          className="navdropdownn"
          id="nav-dropdown-dark-example"
          title="USD"
          menuVariant="light"
        >
          <NavDropdown.Item href="#action/3.1">Rupees</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Dinar</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Euro</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Chinese Yuan</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
};

export default SecondHeader;
