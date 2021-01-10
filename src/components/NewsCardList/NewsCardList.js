import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import image1 from "../../images/image_08.jpg";
import image2 from "../../images/image_04.png";
import image3 from "../../images/image_07.png";

function NewsCardList() {
  return (
    <ul className="cards">
      {/* {props.cards.slice().reverse().map((card) => ( */}
      <li className="cards__item">
        <NewsCard
          // card={card}
          // key={card._id}
          // onCardClick={props.onCardClick}
          // onCardLike={props.onCardLike}
          // onDeleteClick={props.onDeleteClick}
          link={image1}
          date="2 августа, 2019"
          name="Национальное достояние – парки"
          description="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="Лента.ру"
          keyword="Природа"
        />
      </li>
      <li className="cards__item">
        <NewsCard
          link={image2}
          date="2 августа, 2019"
          name="Лесные огоньки: история одной фотографии"
          description="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="Медуза"
        />
      </li>
      <li className="cards__item">
        <NewsCard
          link={image3}
          date="2 августа, 2019"
          name="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
          description="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где..."
          source="Риа"
        />
      </li>
      {/* ))} */}
    </ul>
  );
}

export default NewsCardList;
