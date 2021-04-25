import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import useWindowSize from "../../hooks/useWindowSize";
import ClosablePopup from "../hocs/ClosablePopup";
import { CSSTransition } from "react-transition-group";
import Popup from "../Popup/Popup";
import Lang from "../Lang/Lang";
import "./Header.css";

function Header({
  isBlack,
  isLoggedIn,
  isRegisterPopupOpen,
  isLoginPopupOpen,
  onLoginClick,
  onLogoutClick,
  onClose,
  isButtonClicked,
  setIsButtonClicked,
  onButtonClick,
  refs,
  lang,
  setLang,
}) {
  const size = useWindowSize();
  const isPopupOpen = isLoginPopupOpen || isRegisterPopupOpen;

  return (
    <header
      className={`header ${isButtonClicked ? "header_opened" : ""} ${
        isBlack ? "header_theme_black" : ""
      } ${isPopupOpen ? "header_hided" : ""}`}
    >
      <Link to="/" className="header__logo">
        NewsExplorer
      </Link>
      <Navigation
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
        isBlack={isBlack}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
        lang={lang}
        setLang={setLang}
      />
      {size.width < 740 && (
        <>
          <Lang
            lang={lang}
            setLang={setLang}
            isBlack={isBlack}
            isButtonClicked={isButtonClicked}
          />
          <Button
            className={`header__menu-button ${
              isButtonClicked ? "header__menu-button_clicked" : ""
            }`}
            type="button"
            onClick={onButtonClick}
          />
        </>
      )}
      <CSSTransition
        nodeRef={refs}
        in={isButtonClicked}
        timeout={300}
        classNames="popup"
        unmountOnExit
      >
        <ClosablePopup>
          <Popup onClose={onClose} refs={refs} />
        </ClosablePopup>
      </CSSTransition>
    </header>
  );
}

export default Header;
