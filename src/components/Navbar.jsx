import { Link } from "react-router-dom";
import React from "react";
import "./styling/navbar.css"; // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid">
        {/* Brand Logo */}
        <img src="images/logo.png" alt="Logo" className="navbarimage" />
        <Link to="/" className="navbar-brand fw-bold">
          LOCKHEED <br />
          <span className="text-success"><b><i>Auto Sales</i></b></span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <b><Link to="/Getproducts" className="nav-link"><i>Available Vehicles</i></Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/Aboutus" className="nav-link">About Us</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/Addproducts" className="nav-link">Add Vehicle</Link></b>
            </li>
          </ul>

          {/* Authorization Links */}


          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-primary me-2">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;