import React from "react";
import house1 from "../images/House1.png";
import house2 from "../images/House2.png";
import key from "../images/Key.png";
import "../styles/_choose.scss";

const Choose = () => {
  return (
    <div className="choose">
      <div className="choose__heading">
        <h4 className="choose__headingText">WHY CHOOSE METRO NZ</h4>
        <div className="choose__headingContent">
          <h3 className="choose__headingContentSubtitle">
            Provides the most complete list of property
          </h3>
          <p>
            Metro NZ is one of the top Auckland Property Management companies.
            All of our staff are property investors who have expert knowledge of
            the property market and your best interest in mind at all times.
          </p>
        </div>
      </div>

      <div className="choose__cards">

        <div className="choose__cards1">
          <img src={house1} alt="house1"></img>
          <h4>Affordable Prices</h4>
          <p>
            We offer affordable prices without compromising on quality, making
            luxury living accessible to a wider audience.
          </p>
        </div>

        <div className="choose__cards2">
          <img src={house2} alt="house2"></img>
          <h4>High Quality Property</h4>
          <p className="choose__cards2Text">
            Exquisite properties of unrivaled quality, setting a new standard in
            luxury living.
          </p>
        </div>

        <div className="choose__cards3">
          <img src={key} alt="key"></img>
          <h4>Tailored Service</h4>
          <p>
            We offer specialized services for selling tenanted properties,
            easing fustration for vendors, agents, and tenants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
