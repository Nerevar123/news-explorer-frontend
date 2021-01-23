import React, { useState } from "react";
import "./NewsCard.css";
import Button from "../Button/Button";
import useWindowSize from "../../hooks/useWindowSize";

function NewsCard({
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
  savedCard,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const size = useWindowSize();

  function handleSaveCard() {
    setIsSaved(!isSaved);
  }

  function handleDeleteCard() {
    console.log("Удалено");
  }

  function formatText(text, length) {
    let shortText = text.substring(0, length);
    if (shortText !== text) {
      shortText = shortText + "...";
    }

    return shortText;
  }

  return (
    <article className="card">
      <a href={link} className="card__link" rel="noreferrer" target="_blank">
        <img className="card__image" src={image} alt={title} />
      </a>
      <div className="card__info">
        <span className="card__date">{date}</span>
        <a href={link} className="card__link" rel="noreferrer" target="_blank">
          {size.width >= 1050 && (
            <p className="card__name">{formatText(title, 55)}</p>
          )}
          {size.width < 1050 && (
            <p className="card__name">{formatText(title, 40)}</p>
          )}
        </a>
        {size.width >= 1050 && (
          <p className="card__description">{formatText(text, 150)}</p>
        )}
        {size.width < 1050 && (
          <p className="card__description">{formatText(text, 65)}</p>
        )}

        <a href={link} className="card__link" rel="noreferrer" target="_blank">
          <span className="card__source">{source}</span>
        </a>
      </div>
      {savedCard ? (
        <>
          <Button
            className="card__button card__button_type_delete"
            type="button"
            onClick={handleDeleteCard}
          />
          <span className="card__tip">Убрать из сохранённых</span>
        </>
      ) : (
        <>
          <Button
            className={`card__button card__button_type_save ${
              isSaved ? "card__button_type_save-active" : ""
            }`}
            type="button"
            onClick={handleSaveCard}
          />
          <span className="card__tip">Войдите, чтобы сохранять статьи</span>
        </>
      )}

      {keyword && <span className="card__keyword">{keyword}</span>}
    </article>
  );
}

export default NewsCard;
