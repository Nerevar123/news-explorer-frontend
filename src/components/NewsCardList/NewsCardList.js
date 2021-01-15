import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import image1 from "../../images/image_08.jpg";
import image2 from "../../images/image_04.png";
import image3 from "../../images/image_07.png";

function NewsCardList({ savedCard }) {
  return (
    <ul className="cards">
      {/* {cards.slice().reverse().map((card) => ( */}
      <li className="cards__item">
        <NewsCard
          // card={card}
          // key={card._id}
          // onCardClick={props.onCardClick}
          // onCardLike={props.onCardLike}
          // onDeleteClick={props.onDeleteClick}
          keyword="Природа"
          image={image1}
          link="https://lenta.ru/"
          date="2 августа, 2019"
          title="Национальное достояние – парки"
          text="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="Лента.ру"

          savedCard={savedCard}
        />
      </li>
      <li className="cards__item">
        <NewsCard
          keyword=""
          image={image2}
          link="https://lenta.ru/"
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="Медуза"

          savedCard={savedCard}
        />
      </li>
      <li className="cards__item">
        <NewsCard
          keyword="Тайга"
          image={image3}
          link="https://lenta.ru/"
          date="2 августа, 2019"
          title="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
          text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где знаменитый фотограф снимает первозданные леса России"
          source="Риа"
          savedCard={savedCard}
        />
      </li>
      {/* ))} */}
    </ul>
  );
}

export default NewsCardList;
