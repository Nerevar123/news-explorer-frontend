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

function App() {
  const history = useHistory();
  const validation = useFormWithValidation();

  return (
    <div className="page__content">
        <Router history={history} basename="/">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main validation={validation} />
          </Route>
          <Route exact path="/saved-news">
            <Header isBlack />
            <SavedNews />
          </Route>
        </Switch>
      </Router>
      <ClosablePopup>
              <RegisterPopup
                // onClose={closeAllPopups}
                // onUpdateUser={handleUpdateUser}
                // isSaving={isSaving}
                validation={validation}
                // refs={nodeRef}
              />
            </ClosablePopup>
      <Footer />
    </div>
  );
}

export default App;
