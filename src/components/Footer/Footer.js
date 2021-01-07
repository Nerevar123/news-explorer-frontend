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
            <Link to="/" className="footer__link">
              Яндекс.Практикум
            </Link>
          </li>
        </ul>
        <ul className="footer__icons">
          <li className="footer__icons-item">
            <Link to="/" className="footer__icon footer__icon_type_github" />
          </li>
          <li className="footer__icons-item">
            <Link to="/" className="footer__icon footer__icon_type_facebook" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
