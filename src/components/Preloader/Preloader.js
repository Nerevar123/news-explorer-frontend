import React from "react";
import "./Preloader.css";

function Preloader({ isLoading }) {
  return (
    <div className="preloader">
      {isLoading === null && (
        <div className="preloader__initial">
          <div className="preloader__circle"></div>
        </div>
      )}
      {isLoading === "loading" && (
        <>
          <div className="preloader__circle"></div>
          <p className="preloader__text">Идет поиск новостей...</p>
        </>
      )}
      {isLoading === "notFound" && (
        <>
          <div className="preloader__not-found"></div>
          <h4 className="preloader__title">Ничего не найдено</h4>
          <p className="preloader__text">
            К сожалению, по вашему запросу ничего не найдено.
          </p>
        </>
      )}
      {isLoading === "error" && (
        <>
          <div className="preloader__not-found"></div>
          <h4 className="preloader__title">
            Во время запроса произошла ошибка
          </h4>
          <p className="preloader__text">
            Возможно, проблема с соединением или сервер недоступен. Подождите
            немного и попробуйте ещё раз.
          </p>
        </>
      )}
    </div>
  );
}

export default Preloader;
