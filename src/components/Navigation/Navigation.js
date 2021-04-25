import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Lang from "../Lang/Lang";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useWindowSize from "../../hooks/useWindowSize";
import { TranslationContext } from "../../contexts/TranslationContext";
import "./Navigation.css";

function Navigation({
  isButtonClicked,
  setIsButtonClicked,
  isBlack,
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  lang,
  setLang,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const translation = React.useContext(TranslationContext);
  const size = useWindowSize();
  return (
    <nav
      className={`navigation ${!isButtonClicked ? "navigation_closed" : ""} ${
        isBlack ? "navigation_theme_black" : ""
      }`}
    >
      {size.width > 740 && (
        <Lang
          lang={lang}
          setLang={setLang}
          isBlack={isBlack}
          isButtonClicked={isButtonClicked}
        />
      )}
      <ul className="navigation__links">
        <li className="navigation__links-item">
          <NavLink
            exact
            to="/"
            className="navigation__link"
            activeClassName="navigation__link_active"
            onClick={() => setIsButtonClicked(false)}
          >
            {translation.main}
          </NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li className="navigation__links-item">
              <NavLink
                exact
                to="/saved-news"
                className="navigation__link"
                activeClassName="navigation__link_active"
                onClick={() => setIsButtonClicked(false)}
              >
                {translation.savedArticles}
              </NavLink>
            </li>
            <li className="navigation__links-item">
              <Button
                className="navigation__button navigation__button_logged"
                text={currentUser.name}
                type="button"
                onClick={onLogoutClick}
              />
            </li>
          </>
        ) : (
          <li className="navigation__links-item">
            <Button
              className="navigation__button"
              text={translation.authorize}
              type="button"
              onClick={onLoginClick}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
