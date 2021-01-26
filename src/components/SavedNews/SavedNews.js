import React from "react";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews({ savedArticles, onDeleteCard }) {
  return (
    <section className="saved-news">
      <SavedNewsHeader savedArticles={savedArticles} />
      {savedArticles.length > 0 && (
        <NewsCardList
          articles={savedArticles}
          savedCard
          onDeleteCard={onDeleteCard}
          savedArticles={savedArticles}
        />
      )}
    </section>
  );
}

export default SavedNews;
