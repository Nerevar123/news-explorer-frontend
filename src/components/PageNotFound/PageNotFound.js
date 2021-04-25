import React from "react";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../contexts/TranslationContext";
import "./PageNotFound.css";

function PageNotFound() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="not-found">
      <div className="not-found__icon" />
      <h3 className="not-found__title">{translation.notFound}</h3>
      <Link className="not-found__link" to="/">
        {translation.toMain}
      </Link>
    </section>
  );
}

export default PageNotFound;
