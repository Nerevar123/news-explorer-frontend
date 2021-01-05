import React from "react";
import './Navigation.css';
import { NavLink  } from "react-router-dom";
import Button from "../Button/Button";

function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__links-list">
        <li className="navigation__links-item">
          <NavLink  to="/" className="navigation__link" activeClassName="navigation__link_active">
            Главная
          </NavLink>
        </li>
        <li className="navigation__links-item">
          <NavLink  to="/saved-news" className="navigation__link" activeClassName="navigation__link_active">
            Сохранённые статьи
          </NavLink>
        </li>
        <li className="navigation__links-item">
          <Button text="Грета" />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
