import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/_featuredProperties.scss";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:9000/api/properties?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fp__item" key={item._id}>
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="" className="fp__img" />
              <span className="fp__name">{item.name}</span>
              <span className="fp__city">{item.city}</span>
              <span className="fp__price">Starting from ${item.roomPrice}</span>
              {item.rating && (
                <div className="fp__rating">
                  <button className="fp__rating-button">{item.rating}</button>
                  <span className="fp__rating-text">Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;

