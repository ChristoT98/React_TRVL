import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="navbarLogo">
            TRVL <i className="fab fa-typo3" />
          </Link>
        </div>
      </nav>
    </>
  );
}
