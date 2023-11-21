import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function menuToggle() {
    const menuBtn = document.querySelector(".navbar__menu--btn");
    const navList = document.querySelector(".navbar__list--area");

    if (!showMenu) {
      menuBtn.classList.add("open");
      navList.classList.add("open");
      setShowMenu(true);
    } else {
      menuBtn.classList.remove("open");
      navList.classList.remove("open");
      setShowMenu(false);
    }
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar__title">
          <div className="navbar__title--text">
            <Link to="">Crazy Tech</Link>
          </div>
        </div>
        <div className="navbar__list--area">
          <div className="navbar__items">
            <div className="navbar__link">
              <Link to="">Home</Link>
            </div>
            <div className="navbar__link">
              <Link to="">About Us</Link>{" "}
            </div>
            <div className="navbar__link">
              <Link to="">Portfolio</Link>
            </div>
            <div className="navbar__link">
              <Link to="">Services</Link>{" "}
            </div>
            <div className="navbar__link">
              <Link to="">News </Link>{" "}
            </div>
            <div className="navbar__link">
              <Link to="">Case Studies</Link>{" "}
            </div>
          </div>
          <div className="nav-btn">
            <button className="navbar__button">
              <span className="navbar__button--title">Join us</span>
            </button>
          </div>
        </div>
        <div className="navbar__menu" onClick={menuToggle}>
          <span className="navbar__menu--btn"></span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
