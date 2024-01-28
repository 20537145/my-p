import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../imgs/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

function NavLayout() {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  let [clicked, setClicked] = useState(false);
  const logoutHandler = () => {
    dispatch(logout());
  };
  const changeBackground = () => {
    if (window.scrollY >= 9) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  let handleClick = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const shouldApplyBackground = location.pathname === "/";

  return (
    <>
      
        <header
          className={shouldApplyBackground ? "change-color" : ""}
          id={shouldApplyBackground ? "background" : ""}
        >
          <nav className={nav ? "nav active" : "nav"}>
            <div className="logo-container">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className={nav ? "ul-bg active" : ""}>
              <ul id="navbar" className={clicked ? "navbar active " : "navbar"}>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="shop">Shop</Link>
                </li>
                <li>
                  <Link to="profile">Profile</Link>
                </li>
                <li>
                  <Link to="shop">Shop</Link>
                </li>
                {isAuth ? (
                  <li onClick={logoutHandler}>
                    <Link to="login">Logout</Link>
                  </li>
                ) : (
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
            <div
              className={
                !shouldApplyBackground ? "toggle-menu active" : "toggle-menu"
              }
              onClick={handleClick}
            >
              <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
              <p className="clearfix"></p>
            </div>
            <div className="search-box">
              <Link to="search">
                <button
                  className={
                    !shouldApplyBackground ? "search-btn active" : "search-btn"
                  }
                  href="#"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </Link>
            </div>
          </nav>
        
      </header>
      <Outlet />
      <footer className="footer">
        <div className="container-footer">
          <div className="row-footer">
            <div className="footer-col">
              <h4>Entreprise</h4>
              <ul className="footer-ul">
                <li>
                  <Link href="#">à propos de nous</Link>
                </li>
                <li>
                  <Link href="#">Nos services</Link>
                </li>
                <li>
                  <Link href="#">politique de confidentialité</Link>
                </li>
                <li>
                  <Link href="#">Programme d'affiliation</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Obtenir de l'aide</h4>
              <ul className="footer-ul">
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">expédition</Link>
                </li>
                <li>
                  <Link href="#">Retour</Link>
                </li>
                <li>
                  <Link href="#">statut de la commande</Link>
                </li>
                <li>
                  <Link href="#">options de paiement</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Magasin en ligne</h4>
              <ul className="footer-ul">
                <li>
                  <Link href="#">H Royal Meuble</Link>
                </li>
                <li>
                  <Link href="#">Eljem</Link>
                </li>
                <li>
                  <Link href="#">50521783</Link>
                </li>
                <li>
                  <Link href="#">email@gmail.com</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Suivez-nous</h4>
              <div className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/h.royal.meuble/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default NavLayout;
