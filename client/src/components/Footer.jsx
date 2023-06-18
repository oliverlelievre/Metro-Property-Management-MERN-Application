import "../styles/_footer.scss";
import instagram from "../images/Instagram(1).png";
import twitter from "../images/Twitter(1).png";
import facebook from "../images/Facebook.png";
import linkedin from "../images/Linkedin.png";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__Lists">
        <ul className="footer__List">
        <h3 className="footer__ListHeading">Services</h3>
          <li className="footer__ListItem">Property Management</li>
          <li className="footer__ListItem">Building Management</li>
          <li className="footer__ListItem">Rental Property Management</li>
          <li className="footer__ListItem">Property Mangement Albany</li>
          <li className="footer__ListItem">Body Corporate Administration</li>
          <li className="footer__ListItem">Investment Properties</li>
          <li className="footer__ListItem">Tenanted Property Sales</li>
          <li className="footer__ListItem">Healthy Homes Standards</li>
          <li className="footer__ListItem">Decluttering Service</li>
        </ul>
        <ul className="footer__List">
        <h3 className="footer__ListHeading">Tenants</h3>
          <li className="footer__ListItem">Tenancy Applications</li>
          <br></br>
          <h3 className="footer__ListHeading">About Us</h3>
          <li className="footer__ListItem">Management Team</li>
          <li className="footer__ListItem">Gallery</li>
          <li className="footer__ListItem">We're Hiring</li>
          <li className="footer__ListItem">Disputes Process</li>
        </ul>

        <ul className="footer__List">
        <h3 className="footer__ListHeading">Contact</h3>
          <li className="footer__ListItem"><a href="#">+64 9 391 4642</a></li>
          <li className="footer__ListItem"><a href="#">+64 21 642 119</a></li>
          <li className="footer__ListItem"><a href="#">info@metronz.co.nz</a></li>
          <br></br>
          <h3 className="footer__ListHeading">Location</h3>
          <li className="footer__ListItem">Level 33, ANZ Centre, 23-29 Albert St
          <br></br> Auckland 1010, New Zealand</li>
        </ul>
      </div>

      <div className="footer__Social">
        <div className="footer__Instagram">
          <a href="#"><img className="instagram" src={instagram} alt="instagram" /></a>
        </div>

        <div className="footer__Twitter">
          <a href="#"><img className="twitter" src={twitter} alt="twitter" /></a>
        </div>

        <div className="footer__Facebook">
          <a href="#"><img className="facebook" src={facebook} alt="facebook" /></a>
        </div>

        <div className="footer__Linkedin">
          <a href="#"><img className="linkedin" src={linkedin} alt="linkedin" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
