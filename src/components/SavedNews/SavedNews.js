import React from "react";
import './SavedNews.css';
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews() {
  return (
    <section className="saved-news">
      <SavedNewsHeader />
      <NewsCardList savedCard/>
    </section>
  );
}

export default SavedNews;
