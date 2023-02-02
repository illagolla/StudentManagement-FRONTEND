import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnExpand, setBtnExpand] = useState(false);

  const ariaExpanded = () => {
    setBtnExpand(!btnExpand);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={btnExpand}
          aria-label="Toggle navigation"
          onClick={() => {
            ariaExpanded();
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/add">
                New Student
              </a> */}
              <Link to="/add" className="nav-link">
                New Student
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
