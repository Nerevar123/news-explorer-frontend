import React from "react";
import "./NewsCard.css";
import Button from "../Button/Button";
import useWindowSize from "../../hooks/useWindowSize";
import { TranslationContext } from "../../contexts/TranslationContext";

function NewsCard({
  id,
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
  savedCard,
  isLoggedIn,
  onLoginClick,
  onSaveCard,
  onDeleteCard,
  savedArticles,
}) {
  const size = useWindowSize();
  const translation = React.useContext(TranslationContext);

  const isSaved = savedArticles.find((article) => {
    if (article.link === link) {
      return article;
    }
    return null;
  });

  function handleSaveCard() {
    onSaveCard({ keyword, title, text, date, source, link, image });
  }

  function handleDeleteCard() {
    if (!id) {
      onDeleteCard(isSaved._id);
      return;
    }
    onDeleteCard(id);
  }

  function formatText(text, length) {
    if (!text) return null;

    let shortText = text.substring(0, length);
    if (shortText !== text) {
      shortText = shortText + "...";
    }

    return shortText;
  }

  function isValidDate(date) {
    const dateWrapper = new Date(date);
    return !isNaN(dateWrapper.getDate());
  }

  function formatDate(date) {
    if (!isValidDate(date)) return null;

    let oldDate = new Date(date);
    const dayAndMonth = oldDate.toLocaleString("ru", {
      month: "long",
      day: "numeric",
    });
    const newDate = `${dayAndMonth}, ${oldDate.getFullYear()}`;

    return newDate;
  }

  return (
    <article className="card">
      <a href={link} className="card__link" rel="noreferrer" target="_blank">
        <img className="card__image" src={image} alt={title} />
      </a>
      <div className="card__info">
        <span className="card__date">{formatDate(date)}</span>
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
          <span className="card__tip">{translation.removeFromSaved}</span>
          <span className="card__keyword">{keyword}</span>
        </>
      ) : (
        <>
          {isLoggedIn ? (
            <Button
              className={`card__button card__button_type_save ${
                isSaved ? "card__button_type_save-active" : ""
              }`}
              type="button"
              onClick={isSaved ? handleDeleteCard : handleSaveCard}
            />
          ) : (
            <>
              <Button
                className={`card__button card__button_type_save card__button_notLoggedIn`}
                type="button"
                onClick={onLoginClick}
              />
              <span className="card__tip">{translation.signInToSave}</span>
            </>
          )}
        </>
      )}
    </article>
  );
}

export default NewsCard;
