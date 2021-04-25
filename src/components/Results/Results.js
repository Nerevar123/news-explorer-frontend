import React from "react";
import "./Results.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";
import { TranslationContext } from "../../contexts/TranslationContext";

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
  const translation = React.useContext(TranslationContext);

  return (
    <section className="results">
      {(isLoading === "loading" || "notFound") && (
        <Preloader isLoading={isLoading} />
      )}
      {isLoading === "loaded" && (
        <>
          <h2 className="results__title">{translation.results}</h2>
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
              text={translation.showMore}
              type="button"
              onClick={onMoreResults}
            />
          )}
          {isMinimizeButton && (
            <Button
              className="results__button"
              text={translation.collapse}
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
