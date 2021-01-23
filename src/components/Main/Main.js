import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Results from "../Results/Results";
import About from "../About/About";

function Main({ onSearch, isLoading, isSearching, validation }) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} validation={validation} />
      {isSearching && (
        <Results isLoading={isLoading} errors={validation.errors} />
      )}
      <About />
    </main>
  );
}

export default Main;
