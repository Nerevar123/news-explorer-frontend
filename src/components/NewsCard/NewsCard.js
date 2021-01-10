import React from "react";
import './NewsCard.css';
import Button from "../Button/Button";

function NewsCard({ link, date, name, description, source, keyword }) {
  return (
    <article className="card">
      <img className="card__image" src={link} alt="" />
      <div className="card__info">
        <span className="card__date">{date}</span>
        <p className="card__name">{name}</p>
        <p className="card__description">{description}</p>
        <span className="card__source">{source}</span>
      </div>
      <Button className="card__save-button" />
      {keyword && <span className="card__keyword">{keyword}</span>}
    </article>
  );
}

export default NewsCard;
