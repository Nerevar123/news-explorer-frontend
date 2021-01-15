import React from "react";
import "./Preloader.css";

function Preloader({ isLoading, errors }) {
  return (
    <div className="preloader">
      {isLoading && (
        <>
          <div className="preloader__circle"></div>
          <p className="preloader__text">Идет поиск новостей...</p>
        </>
      )}
      {errors.loading && (
        <>
          <div className="preloader__not-found"></div>
          <h4 className="preloader__title">Ничего не найдено</h4>
          <p className="preloader__text">
            К сожалению, по вашему запросу ничего не найдено.
          </p>
        </>
      )}
    </div>
  );
}

export default Preloader;
