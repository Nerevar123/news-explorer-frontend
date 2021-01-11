import React, { useState } from "react";
import "./App.css";
import { Router, Route, Switch, useHistory, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import ClosablePopup from "../hocs/ClosablePopup";
import { CSSTransition } from "react-transition-group";

function App() {
  const history = useHistory();
  const nodeRef = React.useRef(null);
  const validation = useFormWithValidation();
  const [isRegisterPopupOpen, setRegisterClick] = useState(false);
  const [isLoginPopupOpen, setLoginClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleRegisterClick() {
    closeAllPopups();
    setRegisterClick(true);
  }

  function handleLoginClick() {
    closeAllPopups();
    setLoginClick(true);
  }

  function handleRegister() {
    setIsLoggedIn(true);
    closeAllPopups();
  }

  function handleLogin() {
    setIsLoggedIn(true);
    closeAllPopups();
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function closeAllPopups() {
    setRegisterClick(false);
    setLoginClick(false);
    // setTimeout(() => {
    //   setIsSuccess(false);
    // }, 500);
  }

  return (
    <div className="page__content">
      <Router history={history} basename="/">
        <Switch>
          <Route exact path="/">
            <Header isLoggedIn={isLoggedIn} onLoginClick={handleLoginClick} onLogoutClick={handleLogout} />
            <Main validation={validation} />
          </Route>
          <Route exact path="/saved-news">
            <Header isBlack isLoggedIn={isLoggedIn} onLogoutClick={handleLogout} />
            <SavedNews />
          </Route>
        </Switch>
      </Router>
      <Footer />
      <CSSTransition
        nodeRef={nodeRef}
        in={isRegisterPopupOpen}
        timeout={0}
        classNames="popup"
        unmountOnExit
      >
        <ClosablePopup>
          <RegisterPopup
            onClose={closeAllPopups}
            onLogin={handleRegister}
            onLoginClick={handleLoginClick}
            // onUpdateUser={handleUpdateUser}
            // isSaving={isSaving}
            validation={validation}
            refs={nodeRef}
          />
        </ClosablePopup>
      </CSSTransition>
      <CSSTransition
        nodeRef={nodeRef}
        in={isLoginPopupOpen}
        timeout={0}
        classNames="popup"
        unmountOnExit
      >
        <ClosablePopup>
          <LoginPopup
            onClose={closeAllPopups}
            onLogin={handleLogin}
            onRegisterClick={handleRegisterClick}
            // isSaving={isSaving}
            validation={validation}
            refs={nodeRef}
          />
        </ClosablePopup>
      </CSSTransition>
    </div>
  );
}

export default App;
