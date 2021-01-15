import React, { useState, useRef } from "react";
import "./App.css";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import ClosablePopup from "../hocs/ClosablePopup";
import { CSSTransition } from "react-transition-group";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function App() {
  const history = useHistory();
  const nodeRef = useRef(null);
  const validation = useFormWithValidation();
  const [isHeaderButtonClicked, setHeaderButtonClicked] = useState(false);
  const [isRegisterPopupOpen, setRegisterClick] = useState(false);
  const [isLoginPopupOpen, setLoginClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

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

  function handleRegister() {
    setIsSaving(true);
    setIsSuccess(true);
    setIsSaving(false);
  }

  function handleLogin() {
    setIsSaving(true);
    setIsLoggedIn(true);
    closeAllPopups();
    setIsSaving(false);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/");
  }

  function closeAllPopups() {
    setRegisterClick(false);
    setLoginClick(false);
    setHeaderButtonClicked(false);
  }

  function handleSearch() {
    setIsSearching(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="page__content">
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
              isSearching={isSearching}
              validation={validation}
            />
          </Route>
          <Route exact path="/saved-news">
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
            <SavedNews />
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
    </div>
  );
}

export default App;
