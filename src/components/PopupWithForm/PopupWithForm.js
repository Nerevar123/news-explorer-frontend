import React from "react";
import "./PopupWithForm.css";
import Form from "../Form/Form";
import Button from "../Button/Button";

function PopupWithForm({
  title,
  name,
  buttonText = "Сохранить",
  onClose,
  onSubmit,
  isSaving,
  children,
  isDisabled,
  refs,
}) {
  return (
    // <section className={`popup popup_type_${name}`} ref={refs}>
    <section className="popup">
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
      </div>
    </section>
  );
}

export default PopupWithForm;
