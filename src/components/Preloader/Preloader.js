import React from "react";
import { TranslationContext } from "../../contexts/TranslationContext";
import "./Preloader.css";

function Preloader({ isLoading }) {
  const translation = React.useContext(TranslationContext);

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
          <p className="preloader__text">{translation.isSearching}</p>
        </>
      )}
      {isLoading === "notFound" && (
        <>
          <div className="preloader__not-found"></div>
          <h4 className="preloader__title">{translation.notFoundTitle}</h4>
          <p className="preloader__text">{translation.notFoundText}</p>
        </>
      )}
      {isLoading === "error" && (
        <>
          <div className="preloader__not-found"></div>
          <h4 className="preloader__title">{translation.errorTitle}</h4>
          <p className="preloader__text">{translation.errorText}</p>
        </>
      )}
    </div>
  );
}

export default Preloader;
