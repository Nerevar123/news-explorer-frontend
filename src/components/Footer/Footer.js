import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__navbar">
        <ul className="footer__links">
          <li className="footer__links-item">
            <Link to="/" className="footer__link">
              Главная
            </Link>
          </li>
          <li className="footer__links-item">
            <a
              href="https://praktikum.yandex.ru/"
              className="footer__link"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <ul className="footer__icons">
          <li className="footer__icons-item">
            <a
              href="https://github.com/Nerevar123"
              className="footer__icon footer__icon_type_github"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="footer__icons-item">
            <a
              href="https://www.facebook.com/mihail.plaksin.1"
              className="footer__icon footer__icon_type_facebook"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
