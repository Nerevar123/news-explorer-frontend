import React from "react";
import "./Results.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";

function Results({ isLoading, errors }) {
  function handleMoreResults() {
    console.log("Loading results");
  }

  return (
    <section className="results">
      {isLoading ? (
        <Preloader isLoading={isLoading} errors={errors} />
      ) : (
        <>
          <h2 className="results__title">Результаты поиска</h2>
          <NewsCardList />
          <Button className="results__button" text="Показать еще"  type="button" onClick={handleMoreResults} />
        </>
      )}
    </section>
  );
}

export default Results;
