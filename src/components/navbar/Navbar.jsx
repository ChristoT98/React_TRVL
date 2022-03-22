import { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [button, setButton] = useState(true);

  const openMenuHandler = () => setOpenMenu(!openMenu);
  const closeMobileMenuHandler = () => setOpenMenu(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="navbarLogo" onClick={closeMobileMenuHandler}>
            TRVL <i className="fab fa-typo3" />
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
