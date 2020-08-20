import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark purple">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-laptop-code"></i>
        ShivTheDev.Tech
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/article">
              Articles
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="icons">
        {/* <i class="fab fa-instagram-square"></i> */}
        <a
          href="https://github.com/citysiva180"
          className="fab fa-github-square"
          rel="noopener noreferrer"
          target="_blank"
        ></a>
        <a
          href="https://www.linkedin.com/in/siva-rajan-70286187/"
          className="fab fa-linkedin"
          rel="noopener noreferrer"
          target="_blank"
        ></a>
        {/* <a
          href="https://www.instagram.com/_shivthedev_/"
          className="fab fa-instagram-square"
          rel="noopener noreferrer"
          target="_blank"
        ></a> */}
        <a
          className="fab fa-facebook-square"
          href="https://www.facebook.com/sivjackson007"
          rel="noopener noreferrer"
          target="_blank"
        ></a>
        <a
          href="https://twitter.com/citysiva180"
          className="fab fa-twitter-square"
          rel="noopener noreferrer"
          target="_blank"
        ></a>
      </div>
    </nav>
  );
};

export default Navbar;
