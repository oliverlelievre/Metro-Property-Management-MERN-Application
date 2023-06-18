import "../../styles/_list.scss";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import React, { useState, ChangeEvent } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/Footer";
import HomeContact from "../../components/HomeContact";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:9000/api/properties?city=${destination}&min=${
      min || 0
    }&max=${max || 9999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <div className="list__Container">
        <div className="list__ContainerWrapper">
          <div className="list__ContainerWrapperSearch">
            <h1 className="list__ContainerWrapperSearchTitle">Filters</h1>
            <div className="list__ContainerWrapperSearchItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className="list__ContainerWrapperSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list__ContainerWrapperSearchItem">
              <label>Options</label>
              <div className="ls__Options">
                <div className="ls__OptionItem">
                  <span className="ls__OptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="ls__OptionInput"
                  />
                </div>
                <div className="ls__OptionItem">
                  <span className="ls__OptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="ls__OptionInput"
                  />
                </div>
                <div className="ls__OptionItem">
                  <span className="ls__OptionText">Bedrooms</span>
                  <input
                    type="number"
                    min={1}
                    className="ls__OptionInput"
                    placeholder={options.bedrooms}
                  />
                </div>
                <div className="ls__OptionItem">
                  <span className="ls__OptionText">Bathrooms</span>
                  <input
                    type="number"
                    min={1}
                    className="ls__OptionInput"
                    placeholder={options.bathrooms}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="list__Result">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
            <SearchItem />
          </div>
        </div>
      </div>
      <HomeContact />
      <Footer />
    </div>
  );
};

export default List;
