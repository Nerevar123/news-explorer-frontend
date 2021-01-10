import React from "react";
import './Results.css';
import NewsCardList from "../NewsCardList/NewsCardList";
import Button from "../Button/Button";

function Results() {
  return (
    <section className="results">
      <h2 className="results__title">Результаты поиска</h2>
      <NewsCardList />
      <Button text="Показать еще" className="results__button"/>
    </section>
  );
}

export default Results;
