import "../styles/_navbar.scss";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import logoImage from "../images/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="navbar__containerLogo">
            <img
              src={logoImage}
              alt="logo"
              className="navbar__containerLogoImage"
            ></img>
          </span>
        </Link>
        <div className="nav__Items">
          <button className="nav__Button">Home</button>
          <button className="nav__Button">Services</button>
          <button className="nav__Button">Tenants</button>
          <button className="nav__Button">About Us</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
