import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Results from "../Results/Results";
import About from "../About/About";

function Main({
  onSearch,
  isLoading,
  isSaving,
  validation,
  articles,
  savedArticles,
  keyword,
  onMoreResults,
  onMinimize,
  isMoreResultButton,
  isMinimizeButton,
  isLoggedIn,
  onLoginClick,
  onSaveCard,
  onDeleteCard,
}) {
  return (
    <main className="main">
      <SearchForm
        onSearch={onSearch}
        validation={validation}
        isSaving={isSaving}
      />
      {isLoading && (
        <Results
          isLoading={isLoading}
          articles={articles}
          savedArticles={savedArticles}
          keyword={keyword}
          onMoreResults={onMoreResults}
          onMinimize={onMinimize}
          isMoreResultButton={isMoreResultButton}
          isMinimizeButton={isMinimizeButton}
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          onSaveCard={onSaveCard}
          onDeleteCard={onDeleteCard}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
