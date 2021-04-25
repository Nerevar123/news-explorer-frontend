import React, { useState } from "react";
import "./Lang.css";

function Lang({ lang, setLang, isBlack, isButtonClicked }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!isMenuOpen);
  }

  function handleLangClick(lang) {
    setLang(lang);
    setMenuOpen(false);
  }

  return (
    <div
      className={`lang ${isMenuOpen ? "open" : ""} ${
        isBlack ? "lang_theme_black" : ""
      } ${isButtonClicked ? "lang_hided" : ""}`}
      onClick={handleMenuClick}
    >
      <div className="lang__trigger">
        <span>{lang === "en" ? "Eng" : "Ru"}</span>
        <div className="lang__arrow"></div>
      </div>
      <div className="lang__options">
        <span className="lang__option" onClick={() => handleLangClick("en")}>
          English
        </span>
        <span className="lang__option" onClick={() => handleLangClick("ru")}>
          Русский
        </span>
      </div>
    </div>
  );
}

export default Lang;
