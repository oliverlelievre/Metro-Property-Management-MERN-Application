import "../styles/_hero.scss";
import SearchBtn from "../images/Search.png";
import location from "../images/location.png";
import SearchBar from "./SearchBar";
import React from "react";

const Hero = () => {
  return (
    <div className="header">
      <div className="hero">
        <h1 className="hero__heading">
          Discover a place you will love to live
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="hero__subTitle">
          Helping clients to achieve harmony through our expertise and skills
        </p>
        <br></br>
        <div className="hero__searchBar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
