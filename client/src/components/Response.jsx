import "../styles/_response.scss";
import vanessa from "../images/vanessa.png";
import henry from "../images/Henry.png";
import alex from "../images/alex.png";
import apartment from "../images/RedApartment.png";
import React from "react";

const Response = () => {
  return (
    <div className="response">
      <h4 className="response__heading">WHAT DO YOUR CUSTOMERS SAY?</h4>

      <div className="response__cards">
        <div className="response__cards1">
          <div className="response__cardsProfile">
            <img className="response__cardsImages" src={vanessa} alt="Vanessa"></img>
            <h4 className="response__cardsHeading">Vanessa Jespson</h4>
          </div>
          <p>"Everything was very smooth and efficient, which I really appreciated and I will be recommending them to others looking for a home"</p>
        </div>

        <div className="response__cards2">
          <div className="response__cardsProfile">
            <img className="response__cardsImages" src={henry} alt="Henry"></img>
            <h4 className="response__cardsHeading">Henry N</h4>
          </div>
          <p>"I have pleasure in providing this personal testimony for Frank he is perfectionist. I have formed a very impressive opinion of him"</p>
        </div>

        <div className="response__cards3">
          <div className="response__cardsProfile">
            <img className="response__cardsImages" src={alex} alt="Alex"></img>
            <h4 className="response__cardsHeading">Alex Wang</h4>
          </div>
          <p>"Thank you Metro NZ Property Management for your hard work. I am sure we will work together in the long term"</p>
        </div>
      </div>
    </div>
  );
};

export default Response;
