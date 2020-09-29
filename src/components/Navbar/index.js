import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
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
        <li className="nav-item active">
          <a className="nav-link" href="../../pages/About.js">
            <h5>About Me</h5> <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio.html">
            <h5>Portfolio</h5>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">
            <h5>Contact</h5>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
