import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  savedCard,
  articles,
  savedArticles,
  keyword,
  isLoggedIn,
  onLoginClick,
  onSaveCard,
  onDeleteCard,
}) {
  return (
    <ul className="cards">
      {articles.map((article, key) => (
        <li className="cards__item" key={key}>
          <NewsCard
            id={article._id || null}
            keyword={article.keyword || keyword}
            image={article.urlToImage || article.image}
            link={article.url || article.link}
            date={article.publishedAt || article.date}
            title={article.title}
            text={article.description || article.text}
            source={article.source.name || article.source}
            savedCard={savedCard}
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
            onSaveCard={onSaveCard}
            onDeleteCard={onDeleteCard}
            savedArticles={savedArticles}
          />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
