import "../../styles/_property.scss";
import bed from "../../images/Bed.png";
import bath from "../../images/bathroom.png";
import { formatDistanceToNow } from "date-fns";
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
// import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/Navbar";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";
// import Reserve from "../../components/reserve/Reserve";

const Property = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:9000/api/properties/find/${id}`
  );
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const { dates, options } = useContext(SearchContext);

  // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // const dayDifference = (date1, date2) => {
  //   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // };

  // const days = dates && dates[0] ? dayDifference(dates[0].endDate, dates[0].startDate) : 0;
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="property__Container">
          <ContactModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            id={id}
          />
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />

              <div className="slider__Wrapper">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="slider__Img"
                />
              </div>

              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="property__Wrapper">
            <div className="property__WrapperDetails">
              <h1 className="property__WrapperDetailsTitle">{data.name}</h1>
              <p className="property__WrapperDetailsAddress">{data.address}</p>
              <span className="property__WrapperDetailsPrice">
                ${data.roomPrice} /per week
              </span>
              <span className="property__Essentials">
                <img className="property__EssentialsImages" src={bed} alt="" />{" "}
                {data.bedrooms} bedrooms{" "}
                <img className="property__EssentialsImages" src={bath} alt="" />{" "}
                {data.bathrooms} bathrooms
              </span>
              <p className="property__Desc">{data.description}</p>
              <h1 className="property__List">
                Listed{" "}
                {data.createdAt &&
                  formatDistanceToNow(new Date(data.createdAt), {
                    addSuffix: true,
                  })}
              </h1>
              <div className="property__Buttons">
                <button
                  className="property__Buttons1"
                  onClick={() => setOpenModal(true)}
                >
                  Request a viewing
                </button>
                <button
                  className="property__Buttons2"
                  onClick={() => setOpenModal(true)}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="property__Images">
              {photos?.map((photo, i) => (
                <div className="property__ImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="Img"
                  />
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Property;
