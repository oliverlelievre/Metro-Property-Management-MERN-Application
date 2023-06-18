import "../styles/_searchBar.scss";
import {
  faBed,
  faCalendarDays,
  faPerson,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange, Range } from "react-date-range";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDateChange = (item) => {
    const { startDate, endDate } = item.selection;
    const updatedDate = [
      {
        startDate: startDate || null,
        endDate: endDate || null,
        key: "selection",
      },
    ];
    setDate(updatedDate);
  };

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    bedroom: 1,
    bathroom: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/properties", { state: { destination, date, options } });
  };

  return (
    <div className="header__Search">
      <div className="header__SearchItem">
        <FontAwesomeIcon icon={faLocationDot} className="header__Icon" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="header__SearchInput"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="header__SearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="header__Icon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="header__SearchText"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="header__SearchItem">
        <FontAwesomeIcon icon={faBed} className="header__Icon" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="header__SearchText"
        >{`${options.bedroom} bedroom · ${options.bathroom} bathroom`}</span>
        {openOptions && (
          <div className="options">
            <div className="option__Item">
              <span className="option__Text">Bedroom</span>
              <div className="option__Counter">
                <button
                  disabled={options.bedroom <= 1}
                  className="option__CounterButton"
                  onClick={() => handleOption("bedroom", "d")}
                >
                  -
                </button>
                <span className="option__CounterNumber">{options.bedroom}</span>
                <button
                  className="option__CounterButton"
                  onClick={() => handleOption("bedroom", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="option__Item">
              <span className="option__Text">Bathroom</span>
              <div className="option__Counter">
                <button
                  disabled={options.bathroom <= 1}
                  className="option__CounterButton"
                  onClick={() => handleOption("bathroom", "d")}
                >
                  -
                </button>
                <span className="option__CounterNumber">
                  {options.bathroom}
                </span>
                <button
                  className="option__CounterButton"
                  onClick={() => handleOption("bathroom", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header__SearchItem">
        <button className="header__Btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
