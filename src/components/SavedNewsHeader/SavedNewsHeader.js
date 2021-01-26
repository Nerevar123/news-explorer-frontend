import React from "react";
import "./SavedNewsHeader.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader({ savedArticles }) {
  const currentUser = React.useContext(CurrentUserContext);
  const articlesLength = savedArticles.length;
  const keywords = savedArticles.map(({ keyword }) => keyword);

  const keywordsByPopularity = [...new Set(keywords)]
    .map((keyword) => {
      const popularity = keywords.filter((key) => key === keyword).length;
      const item = { keyword, popularity };
      return item;
    })
    .sort((a, b) => b.popularity - a.popularity)
    .map((item) => item.keyword);

  function setTitleText() {
    if (articlesLength % 10 === 1 && articlesLength % 100 !== 11) {
      return "сохранённая статья";
    } else if (
      (articlesLength % 10 === 2 && articlesLength % 100 !== 12) ||
      (articlesLength % 10 === 3 && articlesLength % 100 !== 13) ||
      (articlesLength % 10 === 4 && articlesLength % 100 !== 14)
    ) {
      return "сохранённые статьи";
    }
    return "сохранённых статей";
  }

  function setKeywordsText() {
    if (keywords.length === 1) {
      return "По ключевому слову: ";
    }
    return "По ключевым словам: ";
  }

  function setKeywordsEnding() {
    const length = keywordsByPopularity.length - 2;
    if (length % 10 === 1 && length % 100 !== 11) {
      return "-у другому";
    } else if (
      (length % 10 === 2 && length % 100 !== 12) ||
      (length % 10 === 3 && length % 100 !== 13) ||
      (length % 10 === 4 && length % 100 !== 14)
    ) {
      return "-м другим";
    }
    return "-и другим";
  }

  function setKeywords(keywords) {
    return keywords
      .map((keyword) => {
        if (!keyword) return keyword;
        return keyword[0].toUpperCase() + keyword.slice(1);
      })
      .join(", ");
  }

  return (
    <div className="saved-header">
      <p className="saved-header__heading">Сохранённые статьи</p>
      <h2 className="saved-header__title">
        {currentUser.name}, у вас {savedArticles.length} {setTitleText()}
      </h2>
      {savedArticles.length > 0 && (
        <p className="saved-header__keywords">
          {setKeywordsText()}
          {keywordsByPopularity.length < 4 && (
            <span className="saved-header__keyword">
              {setKeywords(keywordsByPopularity)}
            </span>
          )}
          {keywordsByPopularity.length > 3 && (
            <>
              <span className="saved-header__keyword">
                {setKeywords(keywordsByPopularity.slice(0, 2))}
              </span>{" "}
              и{" "}
              <span className="saved-header__keyword">
                {keywordsByPopularity.length - 2}
                {setKeywordsEnding()}
              </span>
            </>
          )}
        </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
