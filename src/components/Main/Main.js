import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Results from "../Results/Results";
import About from "../About/About";

function Main({ validation }) {
  return (
    <main className="main">
      <SearchForm validation={validation} />
      <Results />
      <About />
    </main>
  );
}

export default Main;
