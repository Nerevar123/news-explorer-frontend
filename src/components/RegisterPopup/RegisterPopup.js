import React, { useEffect } from "react";
import Label from "../Label/Label";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function RegisterPopup({
  onClose,
  onRegister,
  isSaving,
  isSuccess,
  validation,
  onLoginClick,
}) {
  const { values, handleChange, errors, isValid, resetForm } = validation;

  useEffect(() => {
    resetForm();
    return () => {
      resetForm();
    };
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    onRegister();
  }

  return (
    <PopupWithForm
      title="Регистрация"
      name="popup-form"
      buttonText="Зарегистрироваться"
      onClose={onClose}
      onSubmit={handleSubmit}
      isSaving={isSaving}
      isSuccess={isSuccess}
      isDisabled={!isValid}
      onLinkButtonClick={onLoginClick}
      linkButtonText="Войти"
      children={
        <>
          <fieldset className="form__fields">
            <Label
              values={values}
              onChange={handleChange}
              errors={errors}
              className="popup-form"
              name="email"
              placeholder="Введите почту"
              labelText="Email"
              type="email"
              required
              autoComplete="username"
            />
            <Label
              values={values}
              onChange={handleChange}
              errors={errors}
              className="popup-form"
              name="password"
              placeholder="Введите пароль"
              labelText="Пароль"
              isBlack
              type="password"
              required
              minLength="4"
              maxLength="16"
              autoComplete="current-password"
            />
            <Label
              values={values}
              onChange={handleChange}
              errors={errors}
              className="popup-form"
              name="name"
              placeholder="Введите своё имя"
              labelText="Имя"
              type="text"
              required
              minLength="2"
              maxLength="40"
              pattern="[a-zA-Zа-яА-Я -]{1,}"
            />
          </fieldset>
          <span
            className={`form__error ${
              errors.submit ? "form__error_active" : ""
            }`}
          >
            {errors.submit || ""}
          </span>
        </>
      }
    />
  );
}

export default RegisterPopup;
