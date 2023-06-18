import { Link } from "react-router-dom";
import "../styles/_searchItem.scss";
import bed from "../images/Bed.png";
import bath from "../images/bathroom.png";
import React from "react";


const SearchItem = ({ item })=> {
  if (!item) {
    return null;
  }
  return (
    <div className="search__Item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="si__Img"
      />
      <div className="si__Desc">
        <h1 className="si__Title">{item.name}</h1>
        <span className="si__Distance">{item.address}</span>
        <span className="si__Subtitle">{item.type}</span>
        <span className="si__CancelOp">
          <img className="si__CancelOpImages" src={bed} alt="" />
          {" "}{item.bedrooms}{" "}bedrooms{" "}
          <img className="si__CancelOpImages" src={bath} alt="" />{" "}{item.bathrooms}{" "}bathrooms
        </span>
      </div>
      <div className="si__Details">
        {item.rating && (
          <div className="si__Rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="si__DetailTexts">
          <span className="si__Price">${item.roomPrice}/per week</span>
          <span className="si__TaxOp">Includes taxes and fees</span>
          <Link to={`http://localhost:3000/properties/${item._id}`}>
            <button className="si__CheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
