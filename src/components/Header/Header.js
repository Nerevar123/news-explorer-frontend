import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import useWindowSize from "../../hooks/useWindowSize";

function Header({ isBlack }) {
  const size = useWindowSize();
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);

  function handleButtonClick() {
    setIsButtonClicked(!isButtonClicked);
  }

  return (
    <header className={`header ${isButtonClicked ? "header_opened" : ""} ${isBlack ? "header_theme_black" : ""}`}>
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <Navigation isButtonClicked={isButtonClicked} isBlack={isBlack} />
      {size.width < 650 && (
        <>
          <Button
            className={`header__menu-button ${
              isButtonClicked ? "header__menu-button_clicked" : ""
            }`}
            onClick={handleButtonClick}
          />

        </>
      )}
      {/* <div className="header__overlay" /> */}
    </header>
  );
}

export default Header;
