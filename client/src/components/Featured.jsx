import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/_featured2.scss";

const Featured= () => {
  const { data, loading, error } = useFetch(
    "http://localhost:9000/api/properties/countByCity?cities=Auckland,Wellington,Christchurch"
  );

  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featured__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featured__img"
            />
            <div className="featured__titles">
              <h1 className="featured__title">Auckland</h1>
              <h2 className="featured__subtitle">{data[0]} properties</h2>
            </div>
          </div>

          <div className="featured__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featured__img"
            />
            <div className="featured__titles">
              <h1 className="featured__title">Wellington</h1>
              <h2 className="featured__subtitle">{data[1]} properties</h2>
            </div>
          </div>
          <div className="featured__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featured__img"
            />
            <div className="featured__titles">
              <h1 className="featured__title">Christchurch</h1>
              <h2 className="featured__subtitle">{data[2]} Christchurch</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
