import React from "react";
import "./PopupWithForm.css";
import Form from "../Form/Form";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function PopupWithForm({
  title,
  name,
  buttonText = "Сохранить",
  onClose,
  onSubmit,
  isSaving,
  children,
  isDisabled,
  linkButtonText,
  onLinkButtonClick,
  refs,
}) {
  return (
    // <section className={`popup popup_type_${name}`} ref={refs}>
    <section className="popup" ref={refs}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <Form
          name={name}
          onSubmit={onSubmit}
          isDisabled={isDisabled}
          isSaving={isSaving}
          buttonText={buttonText}
          children={children}
        />
        <Button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <p className="popup__text">
          Или{" "}
          <Button
            className="popup__link-button"
            text={linkButtonText}
            onClick={onLinkButtonClick}
          />
        </p>
      </div>
    </section>
  );
}

export default PopupWithForm;
