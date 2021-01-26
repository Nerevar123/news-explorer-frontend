import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Popup from "../Popup/Popup";
import Preloader from "../Preloader/Preloader";

import useFormWithValidation from "../../hooks/useFormWithValidation";
import ClosablePopup from "../hocs/ClosablePopup";
import ProtectedRoute from "../hocs/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { getNews } from "../../utils/NewsApi";
import { api } from "../../utils/MainApi";

function App() {
  const history = useHistory();
  const nodeRef = useRef(null);
  const validation = useFormWithValidation();
  const [currentUser, setCurrentUser] = useState({});
  const [isHeaderButtonClicked, setHeaderButtonClicked] = useState(false);
  const [isRegisterPopupOpen, setRegisterClick] = useState(false);
  const [isLoginPopupOpen, setLoginClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [articles, setArticles] = useState([]);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState(false);
  const [isMoreResultButton, setIsMoreResultButton] = useState(false);
  const [isMinimizeButton, setIsMinimizeButton] = useState(false);

  useEffect(() => {
    Promise.all([api.getSavedArticles(), api.getUserInfo()])
      .then(([articles, user]) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
        setSavedArticles(articles);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    const storedArticles = localStorage.getItem("articles");
    const keyword = localStorage.getItem("keyword");

    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
      setCurrentArticles(JSON.parse(storedArticles).slice(0, 3));
      if (JSON.parse(storedArticles).length > 3) {
        setIsMoreResultButton(true);
      }
      setCurrentKeyword(keyword);
      validation.setValues({ search: keyword });
      setIsLoading("loaded");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleButtonClick() {
    setHeaderButtonClicked(!isHeaderButtonClicked);
  }

  function handleRegisterClick() {
    closeAllPopups();
    setRegisterClick(true);
  }

  function handleLoginClick() {
    closeAllPopups();
    setIsSuccess(false);
    setLoginClick(true);
  }

  function handleRegister(user) {
    setIsSaving(true);
    api
      .register(user)
      .then(() => {
        setIsSuccess(true);
      })
      .catch((err) => {
        if (typeof err === "object") {
          validation.setErrors({ submit: "Ошибка сервера" });
        } else {
          validation.setErrors({ submit: err });
        }
        console.log(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  function handleLogin(user) {
    setIsSaving(true);
    api
      .login(user)
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        if (typeof err === "object") {
          validation.setErrors({ submit: "Ошибка сервера" });
        } else {
          validation.setErrors({ submit: err });
        }
        console.log(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  function handleLogout() {
    api
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setCurrentUser({});
        localStorage.removeItem("keyword");
        localStorage.removeItem("articles");
        setArticles([]);
        setCurrentArticles([]);
        setIsLoading(null);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setRegisterClick(false);
    setLoginClick(false);
    setHeaderButtonClicked(false);
  }

  function handleSearch(keyword) {
    setIsSaving(true);
    localStorage.removeItem("keyword");
    localStorage.removeItem("articles");
    setCurrentKeyword(keyword);
    localStorage.setItem("keyword", keyword);
    setIsLoading("loading");
    getNews(keyword)
      .then((results) => {
        if (results.articles.length === 0) {
          setIsLoading("notFound");
          return;
        }
        if (results.articles.length > 3) {
          setIsMoreResultButton(true);
        }
        setArticles(results.articles);
        setCurrentArticles(results.articles.slice(0, 3));
        localStorage.setItem("articles", JSON.stringify(results.articles));
        setIsLoading("loaded");
        setIsMinimizeButton(false);
      })
      .catch((err) => {
        setIsLoading("error");
        console.log(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  function handleMoreResults() {
    setCurrentArticles(articles.slice(0, currentArticles.length + 3));
    if (currentArticles.length + 3 > articles.length) {
      setIsMoreResultButton(false);
      setIsMinimizeButton(true);
    }
  }

  function handleMinimize() {
    setCurrentArticles(articles.slice(0, 3));
    setIsMinimizeButton(false);
    setIsMoreResultButton(true);
  }

  function handleSaveArticle(article) {
    api.saveArticle(article, currentKeyword).then((article) => {
      setSavedArticles([...savedArticles, article]);
    });
  }

  function handleDeleteArticle(id) {
    api
      .deleteArticle(id)
      .then(() => {
        const newArticles = savedArticles.filter((c) => c._id !== id);
        setSavedArticles(newArticles);
      })
      .catch((err) => console.log(err));
  }

  if (isLoggedIn === null) {
    return <Preloader isLoading={isLoading} />;
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Router history={history} basename="/">
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Header
                isLoggedIn={isLoggedIn}
                isButtonClicked={isHeaderButtonClicked}
                setIsButtonClicked={setHeaderButtonClicked}
                isRegisterPopupOpen={isRegisterPopupOpen}
                isLoginPopupOpen={isLoginPopupOpen}
                onButtonClick={handleButtonClick}
                onLoginClick={handleLoginClick}
                onLogoutClick={handleLogout}
                onClose={closeAllPopups}
                refs={nodeRef}
              />
              <Main
                onSearch={handleSearch}
                isLoading={isLoading}
                isSaving={isSaving}
                validation={validation}
                articles={currentArticles}
                savedArticles={savedArticles}
                keyword={currentKeyword}
                onMoreResults={handleMoreResults}
                onMinimize={handleMinimize}
                isMoreResultButton={isMoreResultButton}
                isMinimizeButton={isMinimizeButton}
                isLoggedIn={isLoggedIn}
                onLoginClick={handleLoginClick}
                onSaveCard={handleSaveArticle}
                onDeleteCard={handleDeleteArticle}
              />
            </Route>
            <ProtectedRoute
              exact
              path="/saved-news"
              loggedIn={isLoggedIn}
              setLoginClick={setLoginClick}
            >
              <>
                <Header
                  isBlack
                  isLoggedIn={isLoggedIn}
                  isButtonClicked={isHeaderButtonClicked}
                  setIsButtonClicked={setHeaderButtonClicked}
                  isRegisterPopupOpen={isRegisterPopupOpen}
                  isLoginPopupOpen={isLoginPopupOpen}
                  onButtonClick={handleButtonClick}
                  onLoginClick={handleLoginClick}
                  onLogoutClick={handleLogout}
                  onClose={closeAllPopups}
                  refs={nodeRef}
                />
                <SavedNews
                  savedArticles={savedArticles}
                  onDeleteCard={handleDeleteArticle}
                />
              </>
            </ProtectedRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
        <Footer />
        <CSSTransition
          nodeRef={nodeRef}
          in={isLoginPopupOpen || isRegisterPopupOpen}
          timeout={300}
          classNames="popup"
          unmountOnExit
        >
          <ClosablePopup>
            <Popup
              onClose={closeAllPopups}
              onLogin={handleLogin}
              onRegister={handleRegister}
              onLoginClick={handleLoginClick}
              onRegisterClick={handleRegisterClick}
              isRegisterPopupOpen={isRegisterPopupOpen}
              isLoginPopupOpen={isLoginPopupOpen}
              isSaving={isSaving}
              isSuccess={isSuccess}
              validation={validation}
              refs={nodeRef}
            />
          </ClosablePopup>
        </CSSTransition>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
