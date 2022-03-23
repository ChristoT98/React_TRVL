import { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [button, setSignUpButton] = useState(false);

  const openMenuHandler = () => setOpenMenu(!openMenu);
  const closeMobileMenuHandler = () => setOpenMenu(false);

  const showSignUpButton = () => {
    if (window.innerWidth <= 960) {
      setSignUpButton(false);
    } else {
      setSignUpButton(true);
    }
  };

  useEffect(() => {
    showSignUpButton();
  }, []);

  window.addEventListener("resize", showSignUpButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="navbarLogo" onClick={closeMobileMenuHandler}>
            anchor.<i className="fa-solid fa-anchor"></i>
          </Link>
          <div className="menuIcon" onClick={openMenuHandler}>
            <i className={openMenu ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={openMenu ? "navMenu active" : "navMenu"}>
            <li className="navItem">
              <Link
                to="/"
                className="navLinks"
                onClick={closeMobileMenuHandler}
              >
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/services"
                className="navLinks"
                onClick={closeMobileMenuHandler}
              >
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/products"
                className="navLinks"
                onClick={closeMobileMenuHandler}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/signUp"
                className="navLinksMobile"
                onClick={closeMobileMenuHandler}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle={"btn--outline"}>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}
