import React from "react";
import "./About.css";
import portrait from "../../images/About-portrait.jpg";
import { TranslationContext } from "../../contexts/TranslationContext";

function About() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="about">
      <img className="about__photo" src={portrait} alt="Фото автора" />
      <div className="about__text">
        <h2 className="about__title">{translation.about}</h2>
        <p className="about__paragraph">{translation.aboutMe}</p>
        <p className="about__paragraph">{translation.aboutMe2}</p>
      </div>
    </section>
  );
}

export default About;
