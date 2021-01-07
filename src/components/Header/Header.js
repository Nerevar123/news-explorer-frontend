import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import useWindowSize from "../../hooks/useWindowSize";

function Header() {
  const size = useWindowSize();
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);

  function handleButtonClick() {
    setIsButtonClicked(!isButtonClicked);
  }

  return (
    <header className={`header ${isButtonClicked ? "header_opened" : ""}`}>
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <Navigation isButtonClicked={isButtonClicked} />
      {size.width < 650 && (
        <Button
          className={`header__menu-button ${
            isButtonClicked ? "header__menu-button_clicked" : ""
          }`}
          onClick={handleButtonClick}
        />
      )}
    </header>
  );
}

export default Header;
