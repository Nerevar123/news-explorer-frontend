import React from "react";
import Form from "../Form/Form";
import Button from "../Button/Button";
import "./PopupWithForm.css";

function PopupWithForm({
  title,
  name,
  buttonText,
  onClose,
  onSubmit,
  isSaving,
  children,
  isDisabled,
  linkButtonText,
  onLinkButtonClick,
  isSuccess,
}) {
  return (
    <div className="popup__container">
      {isSuccess ? (
        <>
          <h3 className="popup__title">
            Пользователь успешно зарегистрирован!
          </h3>
          <Button
            className="popup__link-button"
            text="Войти"
            type="button"
            onClick={onLinkButtonClick}
          />
        </>
      ) : (
        <>
          <h3 className="popup__title">{title}</h3>
          <Form
            name={name}
            onSubmit={onSubmit}
            isDisabled={isDisabled}
            buttonText={`${isSaving ? "Загрузка..." : buttonText}`}
            children={children}
          />
          <p className="popup__text">
            Или{" "}
            <Button
              className="popup__link-button"
              text={linkButtonText}
              type="button"
              onClick={onLinkButtonClick}
            />
          </p>
        </>
      )}
      <Button className="popup__close-button" type="button" onClick={onClose} />
    </div>
  );
}

export default PopupWithForm;
