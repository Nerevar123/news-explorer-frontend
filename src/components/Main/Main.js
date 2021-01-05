import React from "react";
import './Main.css';
import SearchForm from "../SearchForm/SearchForm";

function Main() {
  return (
    <section className="main">
      <h1 className="main__title">Что творится в мире?</h1>
      <p className="main__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <SearchForm />
    </section>
  );
}

export default Main;
