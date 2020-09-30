import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  console.log(window.location.pathname);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <a className="navbar-brand" href="#">
      <h1>Heribert Villazana</h1>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse bd-highlight" id="navbarNav">
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h5>About Me</h5>
            </Link>
        </li>
        <li className="nav-item">
        <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h5>Portfolio</h5>
            </Link>
        </li>
        <li className="nav-item">
        <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <h5>Contact</h5>
            </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
