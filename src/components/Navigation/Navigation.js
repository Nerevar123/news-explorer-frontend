import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./Navigation.css";

function Navigation({ isButtonClicked, isBlack }) {
  return (
    <nav
      className={`navigation ${!isButtonClicked ? "navigation_closed" : ""} ${isBlack ? "navigation_theme_black" : ""}`}
    >
      <ul className="navigation__links">
        <li className="navigation__links-item">
          <NavLink
          exact to="/"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Главная
          </NavLink>
        </li>
        <li className="navigation__links-item">
          <NavLink
            exact to="/saved-news"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Сохранённые статьи
          </NavLink>
        </li>
        <li className="navigation__links-item">
          <Button className="navigation__button" text="Грета" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
