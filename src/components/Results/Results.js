import React from "react";
import "./Results.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";

function Results({
  isLoading,
  articles,
  savedArticles,
  keyword,
  onMoreResults,
  onMinimize,
  isMoreResultButton,
  isMinimizeButton,
  isLoggedIn,
  onLoginClick,
  onSaveCard,
  onDeleteCard,
}) {
  return (
    <section className="results">
      {(isLoading === "loading" || "notFound") && (
        <Preloader isLoading={isLoading} />
      )}
      {isLoading === "loaded" && (
        <>
          <h2 className="results__title">Результаты поиска</h2>
          <NewsCardList
            articles={articles}
            savedArticles={savedArticles}
            keyword={keyword}
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
            onSaveCard={onSaveCard}
            onDeleteCard={onDeleteCard}
          />
          {isMoreResultButton && (
            <Button
              className="results__button"
              text="Показать еще"
              type="button"
              onClick={onMoreResults}
            />
          )}
          {isMinimizeButton && (
            <Button
              className="results__button"
              text="Свернуть"
              type="button"
              onClick={onMinimize}
            />
          )}
        </>
      )}
    </section>
  );
}

export default Results;
