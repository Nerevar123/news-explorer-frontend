import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <div className="saved-header">
      <p className="saved-header__heading">Сохранённые статьи</p>
      <h2 className="saved-header__title">Грета, у вас 5 сохранённых статей</h2>
      <p className="saved-header__keywords">
        По ключевым словам:{" "}
        <span className="saved-header__keyword">Природа, Тайга</span> и{" "}
        <span className="saved-header__keyword">2-м другим</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
